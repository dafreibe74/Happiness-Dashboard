// SAMPLE STRUCTURE
// 1.  Check inspector console to see if each function is running on page load

// d3.json('combined_json.json').then(function (data) {

// Fetch the JSON data, console log it, and call initMyPage function
d3.json(url).then(function (data) {
  console.log (data);
  let countryName = data[0].country;
  console.log(countryName);
  let aspects = [data[0].Contribution_Corruption,data[0].Contribution_Freedom,data[0].Contribution_GDP_per_capita,data[0].Contribution_Generosity,data[0].Contribution_Life_expectancy,
  data[0].Contribution_Social_support];
  console.log(aspects[0]);
    var trace1 = {
        // x: [0.01],
        x: [data[0].Contribution_Corruption],
        y: [data[0].Country],
        name: 'Corruption',
        orientation: 'h',
        marker: {
          color: 'red',
          width: 1,
          
        },
        type: 'bar'
      };

      var trace2 = {
               
        x: [data[0].Contribution_Freedom],
        y: [data[0].Country],
        name: 'Freedom',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'orange',
          width: 1,
          
        }};
      var trace3 = {
               
                x: [data[0].Contribution_GDP_per_capita],
                y: [data[0].Country],
                name: 'GDP per Capita',
                orientation: 'h',
                type: 'bar',
                marker: {
                  color: 'blue',
                  width: 1,
                  
                }}
      var trace4 = {
                
                  x: [data[0].Contribution_Generosity],
                  y: [data[0].Country],
                  name: 'Generosity',
                  orientation: 'h',
                  type: 'bar',
                  marker: {
                    color: 'green',
                    width: 1,
                    
                  }}
     var trace5 = {
                
                    x: [data[0].Contribution_Life_expectancy],
                    y: [data[0].Country],
                    name: 'Life Expectancy',
                    orientation: 'h',
                    type: 'bar',
                    marker: {
                      color: 'pink',
                      width: 1,
                      
                    }} 
    var trace6 = {
                
                      x: [data[0].Contribution_Social_support],
                      y: [data[0].Country],
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
  width: 500,
  height: 300,
     }
    

    
      Plotly.newPlot("lil-guy", dataPlotting, layout);
      console.log(data[1].Country);
  //Create dropdown/select
  let dropdown = d3.select("#selDataset");
  // var select = document.getElementById("selDataset");
  //Loop through the data to get options for the dropdown
 
console.log(data);
    for (let i = 0; i < data.length; i++) {
      let el=data[i];
      console.log(el);
      // dropdown.append("option").text(data[i].Country).property("value", data[i].Country);
    }
    
                  // for(var i = 0; i < data.length; i++) {
                  //     var country = data[i].Country;
                  //     console.log(data[i].Country);
                  //     //Create option elements for Select element
                  //     var option = document.createElement("option");
                  //     //Set text content for the option
                  //     option.textContent = country;
                  //     //Set value property for the option
                  //     option.value = i;
                  //     //Append option to the select element
                  //     select.append(option);
                  // }
function optionChanged(newCountry){
//                         // code that updates graphics
  let countryName = data[value].country;
//                       Plotly.restyle("bar", "x", [values.slice(0,10).reverse()]);
//                       Plotly.restyle("bar", "y", [otu_ids.map(row=>"OTU "+row).slice(0,10).reverse()]);
//                       Plotly.restyle("bubble", "x",[otu_ids]);
//                       Plotly.restyle("bubble", "y", [values]);
//                       Plotly.restyle("gauge", "value", [gaugeInfo]);       
//                 }
              });
 

  

// const url = "/api/v1.0/happiness/data"
// // Fetch the JSON data, console log it, and call initMyPage function
// d3.json(url).then(function (importedData) {
//   console.log (importedData);
//   // initMyPage(importedData)
// })


// // Define init function 
// function initMyPage(){
   
// //     //Code for a map with default argument

    
// //     // Render the plot to the div tag with id "map"
      


//     
//        
      
//     
      
//  

//     // this checks that our initial function runs.
//     console.log("The Init() function ran")

//     // Create dropdown/select
//         var select = document.getElementById("");
//       //Loop through the data to get options for the dropdown
//         for(var i = 0; i < data.samples.length; i++) {
//             var id = data.samples[i]["id"];
//             //Create option elements for Select element
//             var option = document.createElement("option");
//             //Set text content for the option
//             option.textContent = id;
//             //Set value property for the option
//             option.value = i;
//             //Append option to the select element
//             select.append(option);
//         }

// }

// // function that runs whenever the dropdown is changed

// function optionChanged(newCountry){
//     // code that updates graphics
//       let values=globalData.samples[value]["sample_values"]
//   let otu_ids=globalData.samples[value]["otu_ids"]
//   let metadata = globalData.metadata[value]
//   let gaugeInfo = globalData.metadata[value]["wfreq"]
//   //Set x and y to the new values for the charts
//   x = values;
//   y = otu_ids.map(row=>"OTU "+row);
//   // Restyle the charts and change metadata
//   Plotly.restyle("bar", "x", [values.slice(0,10).reverse()]);
//   Plotly.restyle("bar", "y", [otu_ids.map(row=>"OTU "+row).slice(0,10).reverse()]);
//   Plotly.restyle("bubble", "x",[otu_ids]);
//   Plotly.restyle("bubble", "y", [values]);
//   Plotly.restyle("gauge", "value", [gaugeInfo]);
//     // one way is to recall each function
//     createScatter(newID)
//     createBar(newID)
//     createSummary(newID)
// ​
// }
// ​
// function createScatter(id){
//     // code that makes scatter plot at id='bubble'
// ​
//     // checking to see if function is running
//     console.log(`This function generates scatter plot of ${id} `)
// }
// ​
// function createBar(id){
//     // code that makes bar chart at id='bar'
// ​
//     // checking to see if function is running
//     console.log(`This function generates bar chart of ${id} `)
// ​
// }
// ​
// function createSummary(id){
//     // code that makes list, paragraph, text/linebreaks at id='sample-meta'
// ​
//     // checking to see if function is running
//     console.log(`This function generates summary info of ${id} `)
// }
// ​
// ​
// // function called, runs init instructions
// // runs only on load and refresh of browser page
// init()
// ​