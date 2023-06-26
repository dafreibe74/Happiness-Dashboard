​
// SAMPLE STRUCTURE
// 1.  Check inspector console to see if each function is running on page load
​
​
// function that contains instructions at page load/refresh
// function does not run until called
function init(){
    // code that runs once (only on page load or refresh)
​
    // this checks that our initial function runs.
    console.log("The Init() function ran")
​
    // create dropdown/select
​
​
    // run functions to generate plots with default id = 940
    createScatter('940')
    createBar('940')
    createSummary('940')
​
}
​
// function that runs whenever the dropdown is changed
// this function is in the HTML and is called with an input called 'this.value'
// that comes from the select element (dropdown)
function optionChanged(newID){
    // code that updates graphics
    // one way is to recall each function
    createScatter(newID)
    createBar(newID)
    createSummary(newID)
​
}
​
function createScatter(id){
    // code that makes scatter plot at id='bubble'
​
    // checking to see if function is running
    console.log(`This function generates scatter plot of ${id} `)
}
​
function createBar(id){
    // code that makes bar chart at id='bar'
​
    // checking to see if function is running
    console.log(`This function generates bar chart of ${id} `)
​
}
​
function createSummary(id){
    // code that makes list, paragraph, text/linebreaks at id='sample-meta'
​
    // checking to see if function is running
    console.log(`This function generates summary info of ${id} `)
}
​
​
// function called, runs init instructions
// runs only on load and refresh of browser page
init()