let url = "complete_js.json";

// view the json data in the console
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// initialize function to pull ID numbers
function init() {
    //add drop down to the webpage
    var dropDown = d3.select("#selDataset");
    // retrieve JSON data
    d3.json(url).then(function (data) {
        //assign the names part of json data to sampleId
        var sampleId = data.names;
        //create a function that adds the sampleID text and value to the dropdown
        sampleId.forEach((sample) => {
            dropDown.append("option").text(sample).property("value", sample)
        });
        //assign the first name value to a variable
        var initSample = sampleId[0];
        //view the drop down for the first sampleId
        buildDemo(initSample);
        buildCharts(initSample);
    });
};

// build function to create charts 
function buildCharts(sample) {
    d3.json(url).then(function (data) {
        // variables for charts
        var allSamples = data.samples;
        //make the function input be equivalent to our sampleId
        var sampleInfo = allSamples.filter(row => row.id == sample);
        // assign a variable to the frequency of the bacteria
        var sampleValues = sampleInfo[0].sample_values;
        //isolate the top values 
        var sampleValuesSlice = sampleValues.slice(0,10).reverse();
        //assign a variable for  bacteria number IDs
        var otuIds = sampleInfo[0].otu_ids;
        //isolate the first 10
        var otuIdsSlice = otuIds.slice(0,10).reverse();
        //assign a variable for the bacteria names
        var otuLabels = sampleInfo[0].otu_labels;
        //isolate the first ten
        var otuLabelsSlice = otuLabels.slice(0,10).reverse();
        //assign a variable for the subject who's bellybutton was sampled
        var metaData = data.metadata;
        //make the function input be equivalent to the subject id number
        var metaDataSample = metaData.filter(row => row.id == sample);
        //assign a variable for the frequency of bullbutton washes
        var wash = metaDataSample[0].wfreq;

        // build bar chart
        var trace1 = {
            //x values are the top 10 isolated bacteria frequency numbers
            x: sampleValuesSlice,
            //y values are the bacteria ids
            y: otuIdsSlice.map(item => `OTU ${item}`),
            //make it bar chart
            type: "bar",
            //horizontally orient it
            orientation: "h",
            //label the values on the axis
            text: otuLabelsSlice,
        };
        //use Plotly to plot the data
        var data = [trace1];
        Plotly.newPlot("bar", data)

        // build bubble chart
        var trace2 = {
            // x values are the entire dataset of bacteria id numbers
            x: otuIds,
            // y values are the entire dataset of bacteria frequency
            y: sampleValues,
            // add markers for the values
            mode: "markers",
            // define the markers
            marker: {
                //make the size proportional to the bacteria freuqency
                size: sampleValues,
                //each bacteria id will have a different color
                color: otuIds,
                // the colors will be earthy (green brown blue)
                colorscale: "Earth"
            },
            // bacteria id numbers as the axis ticks
            text: otuIds
        };
        // assign the trace to a new variable
        var data2 = [trace2];
        // suppress the legend because it only displays one color code
        var layout = {
            showlegend: false
        };
        // plot the data using Plotly
        Plotly.newPlot("bubble", data2, layout);

        // build chart 3; gauge chart adapted from plotly
        var data3 = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: wash,
              title: {text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week" },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                axis: { range: [null, 9] },
                bar: { color: "black" },
                steps: [
                  { range: [0, 1], color: "rgba(114, 70, 28, 0.9)" },
                  { range: [1, 2], color: "rgba(169, 146, 48, 0.9)" },
                  { range: [2, 3], color: "rgba(199, 188, 58, 0.9)" },
                  { range: [3, 4], color: "rgba(221, 226, 68, 0.9)" },
                  { range: [4, 5], color: "rgba(66, 206, 58, 0.9)" },
                  { range: [5, 6], color: "rgba(29, 184, 122, 0.9)" },
                  { range: [6, 7], color: "rgba(15, 155, 165, 0.9)" },
                  { range: [7, 8], color: "rgba(11, 117, 154, 0.9)" },
                  { range: [8, 9], color: "rgba(0, 34, 125, 0.9)" },
                ],
                threshold: {
                  line: { color: "black", width: 4 },
                  thickness: 0.75,
                  value: wash
                }
              }
            }
          ];
          
          var layout2 = { width: 600, height: 450, margin: { t: 0, b: 0 } };
          Plotly.newPlot('gauge', data3, layout2);
    });
};

//assign the metadata to each chart
function buildDemo(sample) {
    // select the class from the .html
    var demo = d3.select("#sample-metadata");
    // create a function for the metadata
    d3.json(url).then(function (data) {
        // assign the metadata to a variable
        var metaData = data.metadata;
        // function to pull bacteria id data from json and assign it to the buildDemo function input
        var metaDataSample = metaData.filter(row => row.id == sample);
        // clear the demo between each selection
        demo.html("");
        // function to loops through dataset and populate demo info table
        metaDataSample.forEach((row) => {
            for (const [key, value] of Object.entries(row)) {
                demo.append("p").text(`${key}: ${value}`);
            };
        });
    });
};

// 
function optionChanged(sample) {
    buildDemo(sample);
    buildCharts(sample);
};

// call initialize function to run
init();