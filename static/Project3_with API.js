// SAMPLE STRUCTURE
// 1.  Check inspector console to see if each function is running on page load


// const url = "http://127.0.0.1:5000/api/v1.0/happiness/data";
// Fetch the JSON data, console log it, and call initMyPage function
// d3.json(url).then(function (data) {
d3.json('mock_data').then(function (data)  {
  console.log (data);
  let countryName = data[0].country;
  console.log(countryName);
  let aspects = [data[0].contribution_corruption,data[0].contribution_freedom,data[0].contribution_gdp,
  data[0].contribution_generosity,data[0].contribution_life_expectancy,
  data[0].contribution_social_support];
  
    var trace1 = {
        // x: [0.01],
        x: [data[0].contribution_corruption],
        y: [data[0].country],
        name: 'Corruption',
        orientation: 'h',
        marker: {
          color: 'red',
          width: 1,
          
        },
        type: 'bar'
      };

      var trace2 = {
               
        x: [data[0].contribution_freedom],
        y: [data[0].country],
        name: 'Freedom',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'orange',
          width: 1,
          
        }};
      var trace3 = {
               
                x: [data[0].contribution_gdp],
                y: [data[0].country],
                name: 'GDP per Capita',
                orientation: 'h',
                type: 'bar',
                marker: {
                  color: 'blue',
                  width: 1,
                  
                }}
      var trace4 = {
                
                  x: [data[0].contribution_generosity],
                  y: [data[0].country],
                  name: 'Generosity',
                  orientation: 'h',
                  type: 'bar',
                  marker: {
                    color: 'green',
                    width: 1,
                    
                  }}
     var trace5 = {
                
                    x: [data[0].contribution_life_expectancy],
                    y: [data[0].country],
                    name: 'Life Expectancy',
                    orientation: 'h',
                    type: 'bar',
                    marker: {
                      color: 'pink',
                      width: 1,
                      
                    }} 
    var trace6 = {
                
                      x: [data[0].contribution_social_support],
                      y: [data[0].country],
                      name: 'Social Support',
                      orientation: 'h',
                      type: 'bar',
                      marker: {
                        color: 'yellow',
                        width: 1,
                        
                      }}                 
     var dataPlotting = [trace1, trace2, trace3, trace4,trace5,trace6];
     var layout = {
              title: 'Factors of Happiness Score',
              barmode: 'stack',
              // yaxis: countryName,
              // xaxis: {tickformat: '%'},
              type: 'multicategory',
              autosize: false,
  width: 700,
  height: 250,
     }
    

    
      Plotly.newPlot("lil-guy", dataPlotting, layout);

  //Create dropdown/select
  // let dropdown = d3.select("#selDataset");
   var select = document.getElementById("selDataset");
//   //Loop through the data to get options for the dropdown
 
// console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       dropdown.append("option").text(data[i].country).property("value", data[i].country);
//     }
// })
    
for(var i = 0; i < data.length; i++) {
    var country = data[i].country;
//Create option elements for Select element
    var option = document.createElement("option");
//Set text content for the option
    option.textContent = country;
//Set value property for the option
    option.value = i;
//Append option to the select element
    select.append(option);
                  }
  function optionChanged(value){
      // code that updates graphics
      let countryName = data[value].country;
      console.log(countryName);
      let aspects = [data[value].contribution_corruption,data[value].contribution_freedom,data[value].contribution_gdp,
      data[value].contribution_generosity,data[value].contribution_life_expectancy,
      data[value].contribution_social_support];
      const selectedTraceIndex = ((this).val());

      // Restyle the chart based on the selected trace
      restyleChart(selectedTraceIndex);
    };
      // //Set x and y to the new values for the charts
      //        x = values;
      //        y = otu_ids.map(row=>"OTU "+row);
      // // Restyle the charts and change metadata
      //       Plotly.restyle("bar", "x", [values.slice(0,10).reverse()]);
      //       Plotly.restyle("bar", "y", [otu_ids.map(row=>"OTU "+row).slice(0,10).reverse()]);
      //       Plotly.restyle("bubble", "x",[otu_ids]);
      //                                     Plotly.restyle("bubble", "y", [values]);
      //                                     Plotly.restyle("gauge", "value", [gaugeInfo]);       
      //                               }

                                     function restyleChart(traceIndex) {
                                      const update = {
                                        visible: false
                                      };
                                    
                                      // Hide all traces
                                      for (let i = 0; i < dataPlotting.length; i++) {
                                        Plotly.restyle("lil-guy", update, i);
                                      }
                                    
                                      // Show the selected trace
                                      Plotly.restyle('lil-guy', { visible: true }, traceIndex);
                                    
                }
              })