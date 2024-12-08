var size = 0;
var placement = 'point';

var style_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,1.0)', lineDash: [28.499999999999996,5.699999999999999], lineCap: 'butt', lineJoin: 'miter', width: 5.699999999999999}),fill: new ol.style.Fill({color: 'rgba(179,191,0,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
