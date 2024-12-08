var size = 0;
var placement = 'point';
function categories_FRFutureRoads_34(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Complete upgrade,Sub-Arterial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upgrade one side,Sub-Arterial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,127,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'New road,Trunk Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,131,227,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Complete upgrade,Trunk Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upgrade one side,Trunk Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,177,25,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'New road,Industrial Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(197,0,255,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upgrade one side,Industrial Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(163,211,157,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'New road,Principal Rural Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,115,77,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Complete upgrade,Principal Rural Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,172,106,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Complete upgrade,Rural Residential Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,230,0,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upgrade one side,Rural Residential Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,255,190,1.0)', lineDash: [30.4,15.2], lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_FRFutureRoads_34 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get('Project_Type') + ',' + feature.get('Hierarchy');
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_FRFutureRoads_34(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
