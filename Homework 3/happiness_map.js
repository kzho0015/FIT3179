var vg_1 = "happiness_map.vg.json";

var opt = {
    "mode": "vega-lite"
  };

vegaEmbed("#world_map", vg_1, opt).then(function(result) { 
    //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);



