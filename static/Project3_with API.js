// 1.  Check inspector console to see if each function is running on page load
//Call LilGuy function
LilGuy("Afghanistan");
//Define LilGuy function
function LilGuy(country2) {
  const url = "http://127.0.0.1:5000/api/v1.0/happiness/data";
  // Fetch the JSON data, console log it, and call initMyPage function
  d3.json(url).then(function (data) {
    let globalData = [];
    globalData = data;
    console.log(globalData);
    let countryData = data.filter((i) => i.country == country2)[0];
    console.log(countryData);
    let countryName = countryData.country;
    console.log(countryName);
    let aspects = [
      countryData.contribution_corruption,
      countryData.contribution_freedom,
      countryData.contribution_gdp,
      countryData.contribution_generosity,
      countryData.contribution_life_expectancy,
      countryData.contribution_social_support,
    ];
    d3.select("#country-data").html("");
    var trace1 = {
      x: [aspects[0]],
      y: [countryData.country],
      name: "Corruption",
      orientation: "h",
      marker: {
        color: "#264653",
        width: 1,
      },
      type: "bar",
    };

    var trace2 = {
      x: [aspects[1]],
      y: [countryData.country],
      name: "Freedom",
      orientation: "h",
      type: "bar",
      marker: {
        color: "#2A9D8F",
        width: 1,
      },
    };

    var trace3 = {
      x: [aspects[2]],
      y: [countryData.country],
      name: "GDP per Capita",
      orientation: "h",
      type: "bar",
      marker: {
        color: "#E9C46A",
        width: 1,
      },
    };

    var trace4 = {
      x: [aspects[3]],
      y: [countryData.country],
      name: "Generosity",
      orientation: "h",
      type: "bar",
      marker: {
        color: "#F4A261",
        width: 1,
      },
    };

    var trace5 = {
      x: [aspects[4]],
      y: [countryData.country],
      name: "Life Expectancy",
      orientation: "h",
      type: "bar",
      marker: {
        color: "#E76F51",
        width: 1,
      },
    };

    var trace6 = {
      x: [aspects[5]],
      y: [countryData.country],
      name: "Social Support",
      orientation: "h",
      type: "bar",
      marker: {
        color: "#f94144",
        width: 1,
      },
    };
    var dataPlotting = [trace1, trace2, trace3, trace4, trace5, trace6];
    var layout = {
      title: "Factors of Happiness Score",
      barmode: "stack",
      type: "multicategory",
      autosize: false,
      width: 1100,
      height: 300,
    };

    Plotly.newPlot("lil-guy", dataPlotting, layout);

    //Create dropdown/select
    var select = document.getElementById("selDataset");
    //Loop through the data to get options for the dropdown
    for (var i = 0; i < data.length; i++) {
      var country = data[i].country;
      //Create option elements for Select element
      var option = document.createElement("option");
      //Set text content for the option
      option.textContent = country;
      //Set value property for the option
      option.value = country;
      //Append option to the select element
      select.append(option);
    }
  });
}
function optionChanged(value) {
  console.log(value);
  LilGuy(value);
}
