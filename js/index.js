var data = [{
  "value":242,
  "color": "#48d1cc",
  "label":"Agnostic"
},{
  "value":521,
  "color":"#e2dcf7",
  "label":"Atheist"
},{
  "value":211,
      "color":"#eeab68",
  "label":"Christian"
},{
  "value":21,
      "color":"#a1f9ab",
  "label":"Buddhist"
},{
  "value":49,
      "color":"#f9eca1",
  "label":"Hindu"
},{
  "value":91,
      "color":"#91c8e3",
    "label":"Muslim"
},{
  "value":56,
      "color":"#ec6fba",
    "label":"Jewish"
},{
  "value":12,
      "color":"#c0f057",
    "label":"Other"
}];

var ctx = jQuery('#chart-pie').get(0).getContext('2d');

var pollResults = new Chart(ctx).Pie(data);