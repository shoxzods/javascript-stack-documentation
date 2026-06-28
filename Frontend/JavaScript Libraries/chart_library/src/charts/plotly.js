// ---------------------------------- Plotty js --------------------------------------- //

// url:
/*
    https://www.w3schools.com/js/js_graphics_plotly.asp
*/ 

/*
  npm i plotly.js-dist-min
*/

import Plotly from "plotly.js-dist-min";

// Bar Charts
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);