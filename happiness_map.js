var vg_1 = "happiness_map.vg.json";
var vg_2 = "happiness_stacked.vg.json";

var opt = {
    "mode": "vega-lite"
  };

var opt2 = {
    "mode": "vega-lite"
  };

vegaEmbed("#world_map", vg_1, opt).then(function(result) { 
    //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_bar", vg_2, opt2).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

