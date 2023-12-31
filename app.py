# Import the dependencies.
# import numpy as np
# import json
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///data/Happiness_PF.sqlite")
engine = create_engine("sqlite:///Happiness_PF.sqlite")
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
Bands = Base.classes.Bands_2021
Happiness = Base.classes.Happiness_2021
Codes = Base.classes.Country_Codes

# Create our session (link) from Python to the DB
session = Session(engine)
    
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

# @app.route("/api/v1.0/happiness/scores")
# def scores():
    
#     """Return a list of all happiness scores by country"""
#     # Query all happiness data
#     scores_results = session.query(Happiness.Country, Happiness.Happiness).all()

#     # Convert the query results from the happiness db to a dictionary
#     scores_dict = dict(scores_results)
    
#     session.close()
    
#     return jsonify(scores_dict)



# @app.route("/api/v1.0/bands")
# def bands():
    
#     """Return a list of number of bands and bands per by country"""
#     # Query all happiness data
#     bands_results = session.query(Bands.Country, Bands.Bands).all()

#     # Convert the query results from the happiness db to a dictionary
#     bands_dict = dict(bands_results)
    
#     session.close()
    
#     return jsonify(bands_dict)

# @app.route("/api/v1.0/gdp")
# def gdp():
    
#     """Return a list of gdp by country"""
#     # Query all happiness data
#     gdp_results = session.query(Happiness.Country, Happiness.GDP_per_capita).all()

#     # Convert the query results from the happiness db to a dictionary
#     gdp_dict = dict(gdp_results)
    
#     session.close()
    
#     return jsonify(gdp_dict)

@app.route("/api/v1.0/happiness/data")
def happinessData():
    joined_results = session.query(Happiness, Bands, Codes).join(Bands,Happiness.Country == Bands.Country).join(Codes, Happiness.Country == Codes.Country).all() 
    happiness_data_list = []

    for result in joined_results:
        country = result[0].Country
        happiness_score = result[0].Happiness
        gdp = result[0].GDP_per_capita
        social_support = result[0].Social_support
        life_expectancy = result[0].Life_expectancy
        freedom = result[0].Freedom
        generosity = result[0].Generosity
        corruption = result[0].Corruption
        dystopia = result[0].Dystopia
        contribution_gdp = result[0].Contribution_GDP_per_capita
        contribution_social_support = result[0].Contribution_Social_support
        contribution_life_expectancy = result[0].Contribution_Life_expectancy
        contribution_freedom = result[0].Contribution_Freedom
        contribution_generosity = result[0].Contribution_Generosity
        contribution_corruption = result[0].Contribution_Corruption
        contribution_dystopia = result[0].Contribution_Dystopia
        metal_bands_per_100000_people = result[1].Metal_bands_per_100000_people
        bands = result[1].Bands
        population = result[1].Population
        iso_a2 = result[2].iso_a2
        iso_a3 = result[2].iso_a3
        
        happiness_data = {
            "country": country,
            "happiness score": happiness_score,
            "gdp": gdp,
            "social_support": social_support,
            "life_expectancy": life_expectancy,
            "freedom": freedom,
            "generosity": generosity,
            "corruption": corruption,
            "dystopia": dystopia,
            "contribution_gdp": contribution_gdp,
            "contribution_social_support": contribution_social_support,
            "contribution_life_expectancy": contribution_life_expectancy,
            "contribution_freedom": contribution_freedom,
            "contribution_generosity": contribution_generosity,
            "contribution_corruption": contribution_corruption,
            "contribution_dystopia": contribution_dystopia,
            "metal_bands_per_100000_people": metal_bands_per_100000_people,
            "bands": bands,
            "population": population,
            "iso_a2": iso_a2,
            "iso_a3": iso_a3
            }

        happiness_data_list.append(happiness_data)

    session.close()
    return jsonify(happiness_data_list)
    
# @app.route("/api/v1.0/happiness/contribution")
# def contributionData():
#     contribution_results = session.query(Happiness.Country, Happiness.Contribution_GDP_per_capita, Happiness.Contribution_Social_support, Happiness.Contribution_Life_expectancy, Happiness.Contribution_Freedom, Happiness.Contribution_Generosity, Happiness.Contribution_Corruption, Happiness.Contribution_Dystopia).all()
    
#     contribution_data_list = []

#     for result in contribution_results:
#         country = result[0]
#         contribution_gdp = result[1]
#         contribution_social_support = result[2]
#         contribution_life_expectancy = result[3]
#         contribution_freedom = result[4]
#         contribution_generosity = result[5]
#         contribution_corruption = result[6]
#         contribution_dystopia = result[7]

#         contribution_data = [{
#             "country": country,
#             "contribution_gdp": contribution_gdp,
#             "contribution_social_support": contribution_social_support,
#             "contribution_life_expectancy": contribution_life_expectancy,
#             "contribution_freedom": contribution_freedom,
#             "contribution_generosity": contribution_generosity,
#             "contribution_corruption": contribution_corruption,
#             "contribution_dystopia": contribution_dystopia
#             }]
        
#         contribution_data_list.append(contribution_data)


#     return jsonify(contribution_data_list)
    
    
    # # Convert list of tuples into normal list
    # all_scores = []
    # for Country, Happiness in results:
    #     happines_score_dict = {}
    #     happines_score_dict["Country"] = Country
    #     happines_score_dict["Happiness"] = Happiness
    #     all_scores.append(happines_score_dict)

    # return jsonify(all_scores)


if __name__ == "__main__":
    app.run()
