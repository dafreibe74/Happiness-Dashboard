// SAMPLE STRUCTURE
// 1.  Check inspector console to see if each function is running on page load


const url = "http://127.0.0.1:5000/api/v1.0/happiness/data";
// Fetch the JSON data, console log it, and call initMyPage function
d3.json(url).then(function (data) {
let globalData=[]

// d3.json('mock_data.json').then(function (data)  {
    globalData=data;
    console.log(globalData);
    let countryName = data[0].country;
    console.log(countryName);
    let aspects = [data[0].contribution_corruption,data[0].contribution_freedom,data[0].contribution_gdp,
    data[0].contribution_generosity,data[0].contribution_life_expectancy,
    data[0].contribution_social_support];
    d3.select("#country-data").html("");
    var trace1 = {
        x: [aspects[0]],
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
        x: [aspects[1]],
        y: [data[0].country],
        name: 'Freedom',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'orange',
          width: 1,
          
        }};
      var trace3 = {
        x: [aspects[2]],
        y: [data[0].country],
        name: 'GDP per Capita',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'blue',
          width: 1,          
        }}
      var trace4 = {
        x: [aspects[3]],
        y: [data[0].country],
        name: 'Generosity',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'green',
          width: 1,        
        }}
      var trace5 = {
                
        x: [aspects[4]],
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
          type: 'multicategory',
          autosize: false,
          width: 700,
          height: 250,
        }
              
      Plotly.newPlot("lil-guy", dataPlotting, layout);

      //Create dropdown/select
      var select = document.getElementById("selDataset");
      //Loop through the data to get options for the dropdown
    
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
  })

function optionChanged(value) {
       console.log(globalData);
       // code that updates graphics
       let countryName = globalData[value].country;
       console.log(countryName);
       let aspects = [globalData[value].contribution_corruption,globalData[value].contribution_freedom,globalData[value].contribution_gdp,
       globalData[value].contribution_generosity,globalData[value].contribution_life_expectancy,
       globalData[value].contribution_social_support];
       y=countryName;
       x=aspects;
       console.log(aspects);
       Plotly.restyle("lil guy", "x", [x]);
       Plotly.restyle("lil guy", "y", [y]);
   }
  // Iterate over each trace and set the visible property based on the selected trace
//   for (var i = 0; i < chartData.length; i++) {
//     var trace = chartData[i];
//     var isVisible = trace.name === selectedTrace;
//     Plotly.restyle(chartDiv, { visible: isVisible }, i);
//   }
// }
// }
// document.getElementById("selDataset").addEventListener("optionChanged", restyleChart);
      // //Set x and y to the new values for the charts
      //        x = values;
      //        y = otu_ids.map(row=>"OTU "+row);
      // // Restyle the charts and change metadata
      //       Plotly.restyle("bar", "x", [values.slice(0,10).reverse()]);
      //       Plotly.restyle("bar", "y", [otu_ids.map(row=>"OTU "+row).slice(0,10).reverse()]);
      //       Plotly.restyle("bubble", "x",[otu_ids]);
      //                                     Plotly.restyle("bubble", "y", [values]);
   




       //Create dropdown/select
  // let dropdown = d3.select("#selDataset");
  //Loop through the data to get options for the dropdown
 
// console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       dropdown.append("option").text(data[i].country).property("value", data[i].country);
//     }
// })