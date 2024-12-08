var size = 0;
var placement = 'point';

var style_Suburb_71 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0000";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Locality") !== null && resolution > 1 && resolution < 14) {
        labelText = String(feature.get("Locality"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [6.27,1.254,2.508,1.254,2.508,1.254], lineCap: 'butt', lineJoin: 'miter', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
