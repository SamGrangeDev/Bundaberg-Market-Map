ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7855").setExtent([936729.844877, 7176658.614612, 1141046.947690, 7279327.321082]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Strategicportland_2 = new ol.format.GeoJSON();
var features_Strategicportland_2 = format_Strategicportland_2.readFeatures(json_Strategicportland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Strategicportland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategicportland_2.addFeatures(features_Strategicportland_2);
var lyr_Strategicportland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strategicportland_2, 
                style: style_Strategicportland_2,
                popuplayertitle: "Strategic port land",
                interactive: false,
                title: '<img src="styles/legend/Strategicportland_2.png" /> Strategic port land'
            });
var format_Limiteddevelopment_3 = new ol.format.GeoJSON();
var features_Limiteddevelopment_3 = format_Limiteddevelopment_3.readFeatures(json_Limiteddevelopment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Limiteddevelopment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteddevelopment_3.addFeatures(features_Limiteddevelopment_3);
var lyr_Limiteddevelopment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteddevelopment_3, 
                style: style_Limiteddevelopment_3,
                popuplayertitle: "Limited development",
                interactive: false,
                title: '<img src="styles/legend/Limiteddevelopment_3.png" /> Limited development'
            });
var format_Specialpurpose_4 = new ol.format.GeoJSON();
var features_Specialpurpose_4 = format_Specialpurpose_4.readFeatures(json_Specialpurpose_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Specialpurpose_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialpurpose_4.addFeatures(features_Specialpurpose_4);
var lyr_Specialpurpose_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialpurpose_4, 
                style: style_Specialpurpose_4,
                popuplayertitle: "Special purpose",
                interactive: false,
                title: '<img src="styles/legend/Specialpurpose_4.png" /> Special purpose'
            });
var format_Communityfacilities_5 = new ol.format.GeoJSON();
var features_Communityfacilities_5 = format_Communityfacilities_5.readFeatures(json_Communityfacilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Communityfacilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communityfacilities_5.addFeatures(features_Communityfacilities_5);
var lyr_Communityfacilities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communityfacilities_5, 
                style: style_Communityfacilities_5,
                popuplayertitle: "Community facilities",
                interactive: false,
                title: '<img src="styles/legend/Communityfacilities_5.png" /> Community facilities'
            });
var format_Highimpactindustry_6 = new ol.format.GeoJSON();
var features_Highimpactindustry_6 = format_Highimpactindustry_6.readFeatures(json_Highimpactindustry_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Highimpactindustry_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highimpactindustry_6.addFeatures(features_Highimpactindustry_6);
var lyr_Highimpactindustry_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highimpactindustry_6, 
                style: style_Highimpactindustry_6,
                popuplayertitle: "High impact industry",
                interactive: false,
                title: '<img src="styles/legend/Highimpactindustry_6.png" /> High impact industry'
            });
var format_Industry_7 = new ol.format.GeoJSON();
var features_Industry_7 = format_Industry_7.readFeatures(json_Industry_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Industry_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industry_7.addFeatures(features_Industry_7);
var lyr_Industry_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industry_7, 
                style: style_Industry_7,
                popuplayertitle: "Industry",
                interactive: false,
                title: '<img src="styles/legend/Industry_7.png" /> Industry'
            });
var format_Environmentalmanagementandconservation_8 = new ol.format.GeoJSON();
var features_Environmentalmanagementandconservation_8 = format_Environmentalmanagementandconservation_8.readFeatures(json_Environmentalmanagementandconservation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Environmentalmanagementandconservation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Environmentalmanagementandconservation_8.addFeatures(features_Environmentalmanagementandconservation_8);
var lyr_Environmentalmanagementandconservation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Environmentalmanagementandconservation_8, 
                style: style_Environmentalmanagementandconservation_8,
                popuplayertitle: "Environmental management and conservation",
                interactive: false,
                title: '<img src="styles/legend/Environmentalmanagementandconservation_8.png" /> Environmental management and conservation'
            });
var format_Sportandrecreation_9 = new ol.format.GeoJSON();
var features_Sportandrecreation_9 = format_Sportandrecreation_9.readFeatures(json_Sportandrecreation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Sportandrecreation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportandrecreation_9.addFeatures(features_Sportandrecreation_9);
var lyr_Sportandrecreation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportandrecreation_9, 
                style: style_Sportandrecreation_9,
                popuplayertitle: "Sport and recreation",
                interactive: false,
                title: '<img src="styles/legend/Sportandrecreation_9.png" /> Sport and recreation'
            });
var format_Openspace_10 = new ol.format.GeoJSON();
var features_Openspace_10 = format_Openspace_10.readFeatures(json_Openspace_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Openspace_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Openspace_10.addFeatures(features_Openspace_10);
var lyr_Openspace_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Openspace_10, 
                style: style_Openspace_10,
                popuplayertitle: "Open space",
                interactive: false,
                title: '<img src="styles/legend/Openspace_10.png" /> Open space'
            });
var format_Rural_11 = new ol.format.GeoJSON();
var features_Rural_11 = format_Rural_11.readFeatures(json_Rural_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Rural_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_11.addFeatures(features_Rural_11);
var lyr_Rural_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_11, 
                style: style_Rural_11,
                popuplayertitle: "Rural",
                interactive: false,
                title: '<img src="styles/legend/Rural_11.png" /> Rural'
            });
var format_Ruralresidential_12 = new ol.format.GeoJSON();
var features_Ruralresidential_12 = format_Ruralresidential_12.readFeatures(json_Ruralresidential_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Ruralresidential_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruralresidential_12.addFeatures(features_Ruralresidential_12);
var lyr_Ruralresidential_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruralresidential_12, 
                style: style_Ruralresidential_12,
                popuplayertitle: "Rural residential",
                interactive: false,
                title: '<img src="styles/legend/Ruralresidential_12.png" /> Rural residential'
            });
var format_Localcentre_13 = new ol.format.GeoJSON();
var features_Localcentre_13 = format_Localcentre_13.readFeatures(json_Localcentre_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Localcentre_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localcentre_13.addFeatures(features_Localcentre_13);
var lyr_Localcentre_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localcentre_13, 
                style: style_Localcentre_13,
                popuplayertitle: "Local centre",
                interactive: false,
                title: '<img src="styles/legend/Localcentre_13.png" /> Local centre'
            });
var format_Neighbourhoodcentre_14 = new ol.format.GeoJSON();
var features_Neighbourhoodcentre_14 = format_Neighbourhoodcentre_14.readFeatures(json_Neighbourhoodcentre_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Neighbourhoodcentre_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhoodcentre_14.addFeatures(features_Neighbourhoodcentre_14);
var lyr_Neighbourhoodcentre_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighbourhoodcentre_14, 
                style: style_Neighbourhoodcentre_14,
                popuplayertitle: "Neighbourhood centre",
                interactive: false,
                title: '<img src="styles/legend/Neighbourhoodcentre_14.png" /> Neighbourhood centre'
            });
var format_Districtcentre_15 = new ol.format.GeoJSON();
var features_Districtcentre_15 = format_Districtcentre_15.readFeatures(json_Districtcentre_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Districtcentre_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtcentre_15.addFeatures(features_Districtcentre_15);
var lyr_Districtcentre_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtcentre_15, 
                style: style_Districtcentre_15,
                popuplayertitle: "District centre",
                interactive: false,
                title: '<img src="styles/legend/Districtcentre_15.png" /> District centre'
            });
var format_Majorcentre_16 = new ol.format.GeoJSON();
var features_Majorcentre_16 = format_Majorcentre_16.readFeatures(json_Majorcentre_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Majorcentre_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorcentre_16.addFeatures(features_Majorcentre_16);
var lyr_Majorcentre_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Majorcentre_16, 
                style: style_Majorcentre_16,
                popuplayertitle: "Major centre",
                interactive: false,
                title: '<img src="styles/legend/Majorcentre_16.png" /> Major centre'
            });
var format_Principalcentre_17 = new ol.format.GeoJSON();
var features_Principalcentre_17 = format_Principalcentre_17.readFeatures(json_Principalcentre_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Principalcentre_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Principalcentre_17.addFeatures(features_Principalcentre_17);
var lyr_Principalcentre_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Principalcentre_17, 
                style: style_Principalcentre_17,
                popuplayertitle: "Principal centre",
                interactive: false,
                title: '<img src="styles/legend/Principalcentre_17.png" /> Principal centre'
            });
var format_Specialisedcentre_18 = new ol.format.GeoJSON();
var features_Specialisedcentre_18 = format_Specialisedcentre_18.readFeatures(json_Specialisedcentre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Specialisedcentre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialisedcentre_18.addFeatures(features_Specialisedcentre_18);
var lyr_Specialisedcentre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialisedcentre_18, 
                style: style_Specialisedcentre_18,
                popuplayertitle: "Specialised centre",
                interactive: false,
                title: '<img src="styles/legend/Specialisedcentre_18.png" /> Specialised centre'
            });
var format_Highdensityresidential_19 = new ol.format.GeoJSON();
var features_Highdensityresidential_19 = format_Highdensityresidential_19.readFeatures(json_Highdensityresidential_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Highdensityresidential_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highdensityresidential_19.addFeatures(features_Highdensityresidential_19);
var lyr_Highdensityresidential_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highdensityresidential_19, 
                style: style_Highdensityresidential_19,
                popuplayertitle: "High density residential",
                interactive: false,
                title: '<img src="styles/legend/Highdensityresidential_19.png" /> High density residential'
            });
var format_Mediumdensityresidential_20 = new ol.format.GeoJSON();
var features_Mediumdensityresidential_20 = format_Mediumdensityresidential_20.readFeatures(json_Mediumdensityresidential_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Mediumdensityresidential_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mediumdensityresidential_20.addFeatures(features_Mediumdensityresidential_20);
var lyr_Mediumdensityresidential_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mediumdensityresidential_20, 
                style: style_Mediumdensityresidential_20,
                popuplayertitle: "Medium density residential",
                interactive: false,
                title: '<img src="styles/legend/Mediumdensityresidential_20.png" /> Medium density residential'
            });
var format_Emergingcommunity_21 = new ol.format.GeoJSON();
var features_Emergingcommunity_21 = format_Emergingcommunity_21.readFeatures(json_Emergingcommunity_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Emergingcommunity_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emergingcommunity_21.addFeatures(features_Emergingcommunity_21);
var lyr_Emergingcommunity_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emergingcommunity_21, 
                style: style_Emergingcommunity_21,
                popuplayertitle: "Emerging community",
                interactive: false,
                title: '<img src="styles/legend/Emergingcommunity_21.png" /> Emerging community'
            });
var format_Lowdensityresidential_22 = new ol.format.GeoJSON();
var features_Lowdensityresidential_22 = format_Lowdensityresidential_22.readFeatures(json_Lowdensityresidential_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Lowdensityresidential_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowdensityresidential_22.addFeatures(features_Lowdensityresidential_22);
var lyr_Lowdensityresidential_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowdensityresidential_22, 
                style: style_Lowdensityresidential_22,
                popuplayertitle: "Low density residential",
                interactive: false,
                title: '<img src="styles/legend/Lowdensityresidential_22.png" /> Low density residential'
            });
var format_FTMFutureTrunkMains_23 = new ol.format.GeoJSON();
var features_FTMFutureTrunkMains_23 = format_FTMFutureTrunkMains_23.readFeatures(json_FTMFutureTrunkMains_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FTMFutureTrunkMains_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FTMFutureTrunkMains_23.addFeatures(features_FTMFutureTrunkMains_23);
var lyr_FTMFutureTrunkMains_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FTMFutureTrunkMains_23, 
                style: style_FTMFutureTrunkMains_23,
                popuplayertitle: "FTM - Future Trunk Mains",
                interactive: false,
    title: 'FTM - Future Trunk Mains<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_0.png" /> Acquire Easement<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_1.png" /> Channel (Lined)<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_2.png" /> Channel (Unlined)<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_3.png" /> Drainage Conduit (Pipe)<br />'
        });
var format_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = new ol.format.GeoJSON();
var features_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = format_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.readFeatures(json_PRWTPProposedRubyannaWastewaterTreatmentPlant_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.addFeatures(features_PRWTPProposedRubyannaWastewaterTreatmentPlant_24);
var lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRWTPProposedRubyannaWastewaterTreatmentPlant_24, 
                style: style_PRWTPProposedRubyannaWastewaterTreatmentPlant_24,
                popuplayertitle: "PRWTP - Proposed Rubyanna Wastewater Treatment Plant",
                interactive: false,
                title: '<img src="styles/legend/PRWTPProposedRubyannaWastewaterTreatmentPlant_24.png" /> PRWTP - Proposed Rubyanna Wastewater Treatment Plant'
            });
var format_WTPWastewaterTreatmentPlant_25 = new ol.format.GeoJSON();
var features_WTPWastewaterTreatmentPlant_25 = format_WTPWastewaterTreatmentPlant_25.readFeatures(json_WTPWastewaterTreatmentPlant_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WTPWastewaterTreatmentPlant_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTPWastewaterTreatmentPlant_25.addFeatures(features_WTPWastewaterTreatmentPlant_25);
var lyr_WTPWastewaterTreatmentPlant_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WTPWastewaterTreatmentPlant_25, 
                style: style_WTPWastewaterTreatmentPlant_25,
                popuplayertitle: "WTP - Wastewater Treatment Plant",
                interactive: false,
                title: '<img src="styles/legend/WTPWastewaterTreatmentPlant_25.png" /> WTP - Wastewater Treatment Plant'
            });
var format_WTPBWastewaterTreatmentPlantBuffer_26 = new ol.format.GeoJSON();
var features_WTPBWastewaterTreatmentPlantBuffer_26 = format_WTPBWastewaterTreatmentPlantBuffer_26.readFeatures(json_WTPBWastewaterTreatmentPlantBuffer_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WTPBWastewaterTreatmentPlantBuffer_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTPBWastewaterTreatmentPlantBuffer_26.addFeatures(features_WTPBWastewaterTreatmentPlantBuffer_26);
var lyr_WTPBWastewaterTreatmentPlantBuffer_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WTPBWastewaterTreatmentPlantBuffer_26, 
                style: style_WTPBWastewaterTreatmentPlantBuffer_26,
                popuplayertitle: "WTPB - Wastewater Treatment Plant Buffer",
                interactive: false,
                title: '<img src="styles/legend/WTPBWastewaterTreatmentPlantBuffer_26.png" /> WTPB - Wastewater Treatment Plant Buffer'
            });
var format_WMFBWasteManagementFacilityBuffer_27 = new ol.format.GeoJSON();
var features_WMFBWasteManagementFacilityBuffer_27 = format_WMFBWasteManagementFacilityBuffer_27.readFeatures(json_WMFBWasteManagementFacilityBuffer_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WMFBWasteManagementFacilityBuffer_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WMFBWasteManagementFacilityBuffer_27.addFeatures(features_WMFBWasteManagementFacilityBuffer_27);
var lyr_WMFBWasteManagementFacilityBuffer_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WMFBWasteManagementFacilityBuffer_27, 
                style: style_WMFBWasteManagementFacilityBuffer_27,
                popuplayertitle: "WMFB - Waste Management Facility Buffer",
                interactive: false,
                title: '<img src="styles/legend/WMFBWasteManagementFacilityBuffer_27.png" /> WMFB - Waste Management Facility Buffer'
            });
var format_WMFWasteManagementFacility_28 = new ol.format.GeoJSON();
var features_WMFWasteManagementFacility_28 = format_WMFWasteManagementFacility_28.readFeatures(json_WMFWasteManagementFacility_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WMFWasteManagementFacility_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WMFWasteManagementFacility_28.addFeatures(features_WMFWasteManagementFacility_28);
var lyr_WMFWasteManagementFacility_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WMFWasteManagementFacility_28, 
                style: style_WMFWasteManagementFacility_28,
                popuplayertitle: "WMF - Waste Management Facility",
                interactive: false,
                title: '<img src="styles/legend/WMFWasteManagementFacility_28.png" /> WMF - Waste Management Facility'
            });
var format_STSASeaTurtleSensitiveArea_29 = new ol.format.GeoJSON();
var features_STSASeaTurtleSensitiveArea_29 = format_STSASeaTurtleSensitiveArea_29.readFeatures(json_STSASeaTurtleSensitiveArea_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_STSASeaTurtleSensitiveArea_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STSASeaTurtleSensitiveArea_29.addFeatures(features_STSASeaTurtleSensitiveArea_29);
var lyr_STSASeaTurtleSensitiveArea_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STSASeaTurtleSensitiveArea_29, 
                style: style_STSASeaTurtleSensitiveArea_29,
                popuplayertitle: "STSA - Sea Turtle Sensitive Area",
                interactive: false,
    title: 'STSA - Sea Turtle Sensitive Area<br />\
    <img src="styles/legend/STSASeaTurtleSensitiveArea_29_0.png" /> <br />'
        });
var format_SCRCBStateControlledRoadCorridorBuffer_30 = new ol.format.GeoJSON();
var features_SCRCBStateControlledRoadCorridorBuffer_30 = format_SCRCBStateControlledRoadCorridorBuffer_30.readFeatures(json_SCRCBStateControlledRoadCorridorBuffer_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SCRCBStateControlledRoadCorridorBuffer_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCRCBStateControlledRoadCorridorBuffer_30.addFeatures(features_SCRCBStateControlledRoadCorridorBuffer_30);
var lyr_SCRCBStateControlledRoadCorridorBuffer_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCRCBStateControlledRoadCorridorBuffer_30, 
                style: style_SCRCBStateControlledRoadCorridorBuffer_30,
                popuplayertitle: "SCRCB - State Controlled Road Corridor Buffer",
                interactive: false,
                title: '<img src="styles/legend/SCRCBStateControlledRoadCorridorBuffer_30.png" /> SCRCB - State Controlled Road Corridor Buffer'
            });
var format_SLSteepLand_31 = new ol.format.GeoJSON();
var features_SLSteepLand_31 = format_SLSteepLand_31.readFeatures(json_SLSteepLand_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SLSteepLand_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLSteepLand_31.addFeatures(features_SLSteepLand_31);
var lyr_SLSteepLand_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLSteepLand_31, 
                style: style_SLSteepLand_31,
                popuplayertitle: "SL - Steep Land",
                interactive: false,
                title: '<img src="styles/legend/SLSteepLand_31.png" /> SL - Steep Land'
            });
var format_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = new ol.format.GeoJSON();
var features_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = format_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.readFeatures(json_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.addFeatures(features_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32);
var lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32, 
                style: style_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32,
                popuplayertitle: "PRWTPB - Proposed Rubyanna Wastewater Treatment Plant Buffer",
                interactive: false,
                title: '<img src="styles/legend/PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.png" /> PRWTPB - Proposed Rubyanna Wastewater Treatment Plant Buffer'
            });
var format_FPFuturePathways_33 = new ol.format.GeoJSON();
var features_FPFuturePathways_33 = format_FPFuturePathways_33.readFeatures(json_FPFuturePathways_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FPFuturePathways_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPFuturePathways_33.addFeatures(features_FPFuturePathways_33);
var lyr_FPFuturePathways_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPFuturePathways_33, 
                style: style_FPFuturePathways_33,
                popuplayertitle: "FP - Future Pathways",
                interactive: false,
    title: 'FP - Future Pathways<br />\
    <img src="styles/legend/FPFuturePathways_33_0.png" /> Principal Pathway<br />\
    <img src="styles/legend/FPFuturePathways_33_1.png" /> Distributor Pathway<br />\
    <img src="styles/legend/FPFuturePathways_33_2.png" /> Collector Pathway<br />\
    <img src="styles/legend/FPFuturePathways_33_3.png" /> Distributor On Road Cycleway<br />'
        });
var format_FRFutureRoads_34 = new ol.format.GeoJSON();
var features_FRFutureRoads_34 = format_FRFutureRoads_34.readFeatures(json_FRFutureRoads_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FRFutureRoads_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRFutureRoads_34.addFeatures(features_FRFutureRoads_34);
var lyr_FRFutureRoads_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FRFutureRoads_34, 
                style: style_FRFutureRoads_34,
                popuplayertitle: "FR - Future Roads",
                interactive: false,
    title: 'FR - Future Roads<br />\
    <img src="styles/legend/FRFutureRoads_34_0.png" /> Complete upgrade, Sub-Arterial<br />\
    <img src="styles/legend/FRFutureRoads_34_1.png" /> Upgrade one side, Sub-Arterial<br />\
    <img src="styles/legend/FRFutureRoads_34_2.png" /> New road, Trunk Collector<br />\
    <img src="styles/legend/FRFutureRoads_34_3.png" /> Complete upgrade, Trunk Collector<br />\
    <img src="styles/legend/FRFutureRoads_34_4.png" /> Upgrade one side, Trunk Collector<br />\
    <img src="styles/legend/FRFutureRoads_34_5.png" /> New road, Industrial Collector<br />\
    <img src="styles/legend/FRFutureRoads_34_6.png" /> Upgrade one side, Industrial Collector<br />\
    <img src="styles/legend/FRFutureRoads_34_7.png" /> New road, Principal Rural Road<br />\
    <img src="styles/legend/FRFutureRoads_34_8.png" /> Complete upgrade, Principal Rural Road<br />\
    <img src="styles/legend/FRFutureRoads_34_9.png" /> Complete upgrade, Rural Residential Collector<br />\
    <img src="styles/legend/FRFutureRoads_34_10.png" /> Upgrade one side, Rural Residential Collector<br />'
        });
var format_OAOperationalAirspace_35 = new ol.format.GeoJSON();
var features_OAOperationalAirspace_35 = format_OAOperationalAirspace_35.readFeatures(json_OAOperationalAirspace_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_OAOperationalAirspace_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OAOperationalAirspace_35.addFeatures(features_OAOperationalAirspace_35);
var lyr_OAOperationalAirspace_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OAOperationalAirspace_35, 
                style: style_OAOperationalAirspace_35,
                popuplayertitle: "OA - Operational Airspace",
                interactive: false,
                title: '<img src="styles/legend/OAOperationalAirspace_35.png" /> OA - Operational Airspace'
            });
var format_GPBGasPipelineBuffer_36 = new ol.format.GeoJSON();
var features_GPBGasPipelineBuffer_36 = format_GPBGasPipelineBuffer_36.readFeatures(json_GPBGasPipelineBuffer_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_GPBGasPipelineBuffer_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPBGasPipelineBuffer_36.addFeatures(features_GPBGasPipelineBuffer_36);
var lyr_GPBGasPipelineBuffer_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPBGasPipelineBuffer_36, 
                style: style_GPBGasPipelineBuffer_36,
                popuplayertitle: "GPB - Gas Pipeline Buffer",
                interactive: false,
                title: '<img src="styles/legend/GPBGasPipelineBuffer_36.png" /> GPB - Gas Pipeline Buffer'
            });
var lyr_Contours5m_37 = new ol.layer.Image({
                            opacity: 1,
                            title: "Contours 5m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Contours5m_37.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16845923.343907, -2929085.709033, 16991326.499938, -2814905.177922]
                            })
                        });
var format_TRSATransportRouteSeparationArea_38 = new ol.format.GeoJSON();
var features_TRSATransportRouteSeparationArea_38 = format_TRSATransportRouteSeparationArea_38.readFeatures(json_TRSATransportRouteSeparationArea_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_TRSATransportRouteSeparationArea_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRSATransportRouteSeparationArea_38.addFeatures(features_TRSATransportRouteSeparationArea_38);
var lyr_TRSATransportRouteSeparationArea_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRSATransportRouteSeparationArea_38, 
                style: style_TRSATransportRouteSeparationArea_38,
                popuplayertitle: "TRSA - Transport Route Separation Area",
                interactive: false,
                title: '<img src="styles/legend/TRSATransportRouteSeparationArea_38.png" /> TRSA - Transport Route Separation Area'
            });
var format_LACSLLotsAffectedbyCoastalSetbackLine_39 = new ol.format.GeoJSON();
var features_LACSLLotsAffectedbyCoastalSetbackLine_39 = format_LACSLLotsAffectedbyCoastalSetbackLine_39.readFeatures(json_LACSLLotsAffectedbyCoastalSetbackLine_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LACSLLotsAffectedbyCoastalSetbackLine_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LACSLLotsAffectedbyCoastalSetbackLine_39.addFeatures(features_LACSLLotsAffectedbyCoastalSetbackLine_39);
var lyr_LACSLLotsAffectedbyCoastalSetbackLine_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LACSLLotsAffectedbyCoastalSetbackLine_39, 
                style: style_LACSLLotsAffectedbyCoastalSetbackLine_39,
                popuplayertitle: "LACSL - Lots Affected by Coastal Setback Line",
                interactive: false,
                title: '<img src="styles/legend/LACSLLotsAffectedbyCoastalSetbackLine_39.png" /> LACSL - Lots Affected by Coastal Setback Line'
            });
var format_MEIBMajorElectricityInfrastructureBuffer_40 = new ol.format.GeoJSON();
var features_MEIBMajorElectricityInfrastructureBuffer_40 = format_MEIBMajorElectricityInfrastructureBuffer_40.readFeatures(json_MEIBMajorElectricityInfrastructureBuffer_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MEIBMajorElectricityInfrastructureBuffer_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEIBMajorElectricityInfrastructureBuffer_40.addFeatures(features_MEIBMajorElectricityInfrastructureBuffer_40);
var lyr_MEIBMajorElectricityInfrastructureBuffer_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEIBMajorElectricityInfrastructureBuffer_40, 
                style: style_MEIBMajorElectricityInfrastructureBuffer_40,
                popuplayertitle: "MEIB - Major Electricity Infrastructure Buffer",
                interactive: false,
                title: '<img src="styles/legend/MEIBMajorElectricityInfrastructureBuffer_40.png" /> MEIB - Major Electricity Infrastructure Buffer'
            });
var format_MESBMajorElectricitySubstationBuffer_41 = new ol.format.GeoJSON();
var features_MESBMajorElectricitySubstationBuffer_41 = format_MESBMajorElectricitySubstationBuffer_41.readFeatures(json_MESBMajorElectricitySubstationBuffer_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MESBMajorElectricitySubstationBuffer_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MESBMajorElectricitySubstationBuffer_41.addFeatures(features_MESBMajorElectricitySubstationBuffer_41);
var lyr_MESBMajorElectricitySubstationBuffer_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MESBMajorElectricitySubstationBuffer_41, 
                style: style_MESBMajorElectricitySubstationBuffer_41,
                popuplayertitle: "MESB - Major Electricity Substation Buffer",
                interactive: false,
                title: '<img src="styles/legend/MESBMajorElectricitySubstationBuffer_41.png" /> MESB - Major Electricity Substation Buffer'
            });
var format_MTMiningTenements_42 = new ol.format.GeoJSON();
var features_MTMiningTenements_42 = format_MTMiningTenements_42.readFeatures(json_MTMiningTenements_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MTMiningTenements_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTMiningTenements_42.addFeatures(features_MTMiningTenements_42);
var lyr_MTMiningTenements_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTMiningTenements_42, 
                style: style_MTMiningTenements_42,
                popuplayertitle: "MT - Mining Tenements",
                interactive: false,
                title: '<img src="styles/legend/MTMiningTenements_42.png" /> MT - Mining Tenements'
            });
var format_RCRailCorridor_43 = new ol.format.GeoJSON();
var features_RCRailCorridor_43 = format_RCRailCorridor_43.readFeatures(json_RCRailCorridor_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_RCRailCorridor_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCRailCorridor_43.addFeatures(features_RCRailCorridor_43);
var lyr_RCRailCorridor_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCRailCorridor_43, 
                style: style_RCRailCorridor_43,
                popuplayertitle: "RC - Rail Corridor",
                interactive: false,
                title: '<img src="styles/legend/RCRailCorridor_43.png" /> RC - Rail Corridor'
            });
var format_RSAResourceSeparationArea_44 = new ol.format.GeoJSON();
var features_RSAResourceSeparationArea_44 = format_RSAResourceSeparationArea_44.readFeatures(json_RSAResourceSeparationArea_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_RSAResourceSeparationArea_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSAResourceSeparationArea_44.addFeatures(features_RSAResourceSeparationArea_44);
var lyr_RSAResourceSeparationArea_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSAResourceSeparationArea_44, 
                style: style_RSAResourceSeparationArea_44,
                popuplayertitle: "RSA - Resource Separation Area",
                interactive: false,
                title: '<img src="styles/legend/RSAResourceSeparationArea_44.png" /> RSA - Resource Separation Area'
            });
var format_LHAPLocalHeritageAdjoiningProperties_45 = new ol.format.GeoJSON();
var features_LHAPLocalHeritageAdjoiningProperties_45 = format_LHAPLocalHeritageAdjoiningProperties_45.readFeatures(json_LHAPLocalHeritageAdjoiningProperties_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LHAPLocalHeritageAdjoiningProperties_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LHAPLocalHeritageAdjoiningProperties_45.addFeatures(features_LHAPLocalHeritageAdjoiningProperties_45);
var lyr_LHAPLocalHeritageAdjoiningProperties_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LHAPLocalHeritageAdjoiningProperties_45, 
                style: style_LHAPLocalHeritageAdjoiningProperties_45,
                popuplayertitle: "LHAP - Local Heritage Adjoining Properties",
                interactive: false,
                title: '<img src="styles/legend/LHAPLocalHeritageAdjoiningProperties_45.png" /> LHAP - Local Heritage Adjoining Properties'
            });
var format_LHPLocalHeritagePlaces_46 = new ol.format.GeoJSON();
var features_LHPLocalHeritagePlaces_46 = format_LHPLocalHeritagePlaces_46.readFeatures(json_LHPLocalHeritagePlaces_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LHPLocalHeritagePlaces_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LHPLocalHeritagePlaces_46.addFeatures(features_LHPLocalHeritagePlaces_46);
var lyr_LHPLocalHeritagePlaces_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LHPLocalHeritagePlaces_46, 
                style: style_LHPLocalHeritagePlaces_46,
                popuplayertitle: "LHP - Local Heritage Places",
                interactive: false,
                title: '<img src="styles/legend/LHPLocalHeritagePlaces_46.png" /> LHP - Local Heritage Places'
            });
var format_HPHeritagePlaces_47 = new ol.format.GeoJSON();
var features_HPHeritagePlaces_47 = format_HPHeritagePlaces_47.readFeatures(json_HPHeritagePlaces_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_HPHeritagePlaces_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPHeritagePlaces_47.addFeatures(features_HPHeritagePlaces_47);
var lyr_HPHeritagePlaces_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HPHeritagePlaces_47, 
                style: style_HPHeritagePlaces_47,
                popuplayertitle: "HP - Heritage Places",
                interactive: false,
                title: '<img src="styles/legend/HPHeritagePlaces_47.png" /> HP - Heritage Places'
            });
var format_GPGasPipeline_48 = new ol.format.GeoJSON();
var features_GPGasPipeline_48 = format_GPGasPipeline_48.readFeatures(json_GPGasPipeline_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_GPGasPipeline_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPGasPipeline_48.addFeatures(features_GPGasPipeline_48);
var lyr_GPGasPipeline_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPGasPipeline_48, 
                style: style_GPGasPipeline_48,
                popuplayertitle: "GP - Gas Pipeline",
                interactive: false,
                title: '<img src="styles/legend/GPGasPipeline_48.png" /> GP - Gas Pipeline'
            });
var format_MEIMajorElectricityInfrastructure_49 = new ol.format.GeoJSON();
var features_MEIMajorElectricityInfrastructure_49 = format_MEIMajorElectricityInfrastructure_49.readFeatures(json_MEIMajorElectricityInfrastructure_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MEIMajorElectricityInfrastructure_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEIMajorElectricityInfrastructure_49.addFeatures(features_MEIMajorElectricityInfrastructure_49);
var lyr_MEIMajorElectricityInfrastructure_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEIMajorElectricityInfrastructure_49, 
                style: style_MEIMajorElectricityInfrastructure_49,
                popuplayertitle: "MEI - Major Electricity Infrastructure",
                interactive: false,
                title: '<img src="styles/legend/MEIMajorElectricityInfrastructure_49.png" /> MEI - Major Electricity Infrastructure'
            });
var format_WBWaterwaysSouth_50 = new ol.format.GeoJSON();
var features_WBWaterwaysSouth_50 = format_WBWaterwaysSouth_50.readFeatures(json_WBWaterwaysSouth_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WBWaterwaysSouth_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysSouth_50.addFeatures(features_WBWaterwaysSouth_50);
var lyr_WBWaterwaysSouth_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysSouth_50, 
                style: style_WBWaterwaysSouth_50,
                popuplayertitle: "WB - Waterways (South)",
                interactive: false,
                title: '<img src="styles/legend/WBWaterwaysSouth_50.png" /> WB - Waterways (South)'
            });
var format_WBWaterwaysNorth_51 = new ol.format.GeoJSON();
var features_WBWaterwaysNorth_51 = format_WBWaterwaysNorth_51.readFeatures(json_WBWaterwaysNorth_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WBWaterwaysNorth_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysNorth_51.addFeatures(features_WBWaterwaysNorth_51);
var lyr_WBWaterwaysNorth_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysNorth_51, 
                style: style_WBWaterwaysNorth_51,
                popuplayertitle: "WB - Waterways (North)",
                interactive: false,
                title: '<img src="styles/legend/WBWaterwaysNorth_51.png" /> WB - Waterways (North)'
            });
var format_STIAStormTideInundationArea_52 = new ol.format.GeoJSON();
var features_STIAStormTideInundationArea_52 = format_STIAStormTideInundationArea_52.readFeatures(json_STIAStormTideInundationArea_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_STIAStormTideInundationArea_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STIAStormTideInundationArea_52.addFeatures(features_STIAStormTideInundationArea_52);
var lyr_STIAStormTideInundationArea_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STIAStormTideInundationArea_52, 
                style: style_STIAStormTideInundationArea_52,
                popuplayertitle: "STIA - Storm Tide Inundation Area",
                interactive: false,
                title: '<img src="styles/legend/STIAStormTideInundationArea_52.png" /> STIA - Storm Tide Inundation Area'
            });
var format_RPAResourceProcessingArea_53 = new ol.format.GeoJSON();
var features_RPAResourceProcessingArea_53 = format_RPAResourceProcessingArea_53.readFeatures(json_RPAResourceProcessingArea_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_RPAResourceProcessingArea_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPAResourceProcessingArea_53.addFeatures(features_RPAResourceProcessingArea_53);
var lyr_RPAResourceProcessingArea_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPAResourceProcessingArea_53, 
                style: style_RPAResourceProcessingArea_53,
                popuplayertitle: "RPA - Resource Processing Area",
                interactive: false,
                title: '<img src="styles/legend/RPAResourceProcessingArea_53.png" /> RPA - Resource Processing Area'
            });
var format_EASEMENTS_54 = new ol.format.GeoJSON();
var features_EASEMENTS_54 = format_EASEMENTS_54.readFeatures(json_EASEMENTS_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_EASEMENTS_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EASEMENTS_54.addFeatures(features_EASEMENTS_54);
var lyr_EASEMENTS_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EASEMENTS_54, 
                style: style_EASEMENTS_54,
                popuplayertitle: "EASEMENTS",
                interactive: false,
                title: '<img src="styles/legend/EASEMENTS_54.png" /> EASEMENTS'
            });
var format_SPEncumbrances_55 = new ol.format.GeoJSON();
var features_SPEncumbrances_55 = format_SPEncumbrances_55.readFeatures(json_SPEncumbrances_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SPEncumbrances_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPEncumbrances_55.addFeatures(features_SPEncumbrances_55);
var lyr_SPEncumbrances_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPEncumbrances_55, 
                style: style_SPEncumbrances_55,
                popuplayertitle: "SP Encumbrances",
                interactive: false,
                title: '<img src="styles/legend/SPEncumbrances_55.png" /> SP Encumbrances'
            });
var format_SettlementPatternInset2Childers_56 = new ol.format.GeoJSON();
var features_SettlementPatternInset2Childers_56 = format_SettlementPatternInset2Childers_56.readFeatures(json_SettlementPatternInset2Childers_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SettlementPatternInset2Childers_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SettlementPatternInset2Childers_56.addFeatures(features_SettlementPatternInset2Childers_56);
var lyr_SettlementPatternInset2Childers_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SettlementPatternInset2Childers_56, 
                style: style_SettlementPatternInset2Childers_56,
                popuplayertitle: "Settlement Pattern Inset 2 Childers",
                interactive: false,
                title: '<img src="styles/legend/SettlementPatternInset2Childers_56.png" /> Settlement Pattern Inset 2 Childers'
            });
var format_SettlementPatternInset3GinGin_57 = new ol.format.GeoJSON();
var features_SettlementPatternInset3GinGin_57 = format_SettlementPatternInset3GinGin_57.readFeatures(json_SettlementPatternInset3GinGin_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SettlementPatternInset3GinGin_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SettlementPatternInset3GinGin_57.addFeatures(features_SettlementPatternInset3GinGin_57);
var lyr_SettlementPatternInset3GinGin_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SettlementPatternInset3GinGin_57, 
                style: style_SettlementPatternInset3GinGin_57,
                popuplayertitle: "Settlement Pattern Inset 3 Gin Gin",
                interactive: false,
                title: '<img src="styles/legend/SettlementPatternInset3GinGin_57.png" /> Settlement Pattern Inset 3 Gin Gin'
            });
var format_KalkieAshfieldLDA_58 = new ol.format.GeoJSON();
var features_KalkieAshfieldLDA_58 = format_KalkieAshfieldLDA_58.readFeatures(json_KalkieAshfieldLDA_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_KalkieAshfieldLDA_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalkieAshfieldLDA_58.addFeatures(features_KalkieAshfieldLDA_58);
var lyr_KalkieAshfieldLDA_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KalkieAshfieldLDA_58, 
                style: style_KalkieAshfieldLDA_58,
                popuplayertitle: "Kalkie Ashfield LDA",
                interactive: false,
                title: '<img src="styles/legend/KalkieAshfieldLDA_58.png" /> Kalkie Ashfield LDA'
            });
var format_BranyanLocalAreaPlan_59 = new ol.format.GeoJSON();
var features_BranyanLocalAreaPlan_59 = format_BranyanLocalAreaPlan_59.readFeatures(json_BranyanLocalAreaPlan_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_BranyanLocalAreaPlan_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BranyanLocalAreaPlan_59.addFeatures(features_BranyanLocalAreaPlan_59);
var lyr_BranyanLocalAreaPlan_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BranyanLocalAreaPlan_59, 
                style: style_BranyanLocalAreaPlan_59,
                popuplayertitle: "Branyan Local Area Plan",
                interactive: false,
                title: '<img src="styles/legend/BranyanLocalAreaPlan_59.png" /> Branyan Local Area Plan'
            });
var format_HugesandSeaviewBargarraStructurePlan_60 = new ol.format.GeoJSON();
var features_HugesandSeaviewBargarraStructurePlan_60 = format_HugesandSeaviewBargarraStructurePlan_60.readFeatures(json_HugesandSeaviewBargarraStructurePlan_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_HugesandSeaviewBargarraStructurePlan_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HugesandSeaviewBargarraStructurePlan_60.addFeatures(features_HugesandSeaviewBargarraStructurePlan_60);
var lyr_HugesandSeaviewBargarraStructurePlan_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HugesandSeaviewBargarraStructurePlan_60, 
                style: style_HugesandSeaviewBargarraStructurePlan_60,
                popuplayertitle: "Huges and Seaview Bargarra Structure Plan",
                interactive: false,
                title: '<img src="styles/legend/HugesandSeaviewBargarraStructurePlan_60.png" /> Huges and Seaview Bargarra Structure Plan'
            });
var format_CentralCoastalCorridorSouth_61 = new ol.format.GeoJSON();
var features_CentralCoastalCorridorSouth_61 = format_CentralCoastalCorridorSouth_61.readFeatures(json_CentralCoastalCorridorSouth_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_CentralCoastalCorridorSouth_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralCoastalCorridorSouth_61.addFeatures(features_CentralCoastalCorridorSouth_61);
var lyr_CentralCoastalCorridorSouth_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralCoastalCorridorSouth_61, 
                style: style_CentralCoastalCorridorSouth_61,
                popuplayertitle: "Central Coastal Corridor (South)",
                interactive: false,
                title: '<img src="styles/legend/CentralCoastalCorridorSouth_61.png" /> Central Coastal Corridor (South)'
            });
var format_CentralCoastalCorridorNorth_62 = new ol.format.GeoJSON();
var features_CentralCoastalCorridorNorth_62 = format_CentralCoastalCorridorNorth_62.readFeatures(json_CentralCoastalCorridorNorth_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_CentralCoastalCorridorNorth_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralCoastalCorridorNorth_62.addFeatures(features_CentralCoastalCorridorNorth_62);
var lyr_CentralCoastalCorridorNorth_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralCoastalCorridorNorth_62, 
                style: style_CentralCoastalCorridorNorth_62,
                popuplayertitle: "Central Coastal Corridor (North)",
                interactive: false,
                title: '<img src="styles/legend/CentralCoastalCorridorNorth_62.png" /> Central Coastal Corridor (North)'
            });
var lyr_SettlementPatternInset2Childers_63 = new ol.layer.Image({
                            opacity: 1,
                            title: "Settlement Pattern Inset 2 Childers",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SettlementPatternInset2Childers_63.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16949715.499190, -2905724.498337, 16954188.869477, -2903516.873554]
                            })
                        });
var lyr_SettlementPatternInset3GinGin_64 = new ol.layer.Image({
                            opacity: 1,
                            title: "Settlement Pattern Inset 3 Gin Gin",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SettlementPatternInset3GinGin_64.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16913608.230424, -2876224.154214, 16918215.305661, -2872500.581769]
                            })
                        });
var lyr_CentralCoastalCorridorNorth_65 = new ol.layer.Image({
                            opacity: 1,
                            title: "Central Coastal Corridor (North)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CentralCoastalCorridorNorth_65.png",
    attributions: ' ',
                                projection: 'EPSG:7855',
                                alwaysInRange: true,
                                imageExtent: [1046482.902034, 7248628.746426, 1048105.379082, 7250820.106303]
                            })
                        });
var lyr_CentralCoastalCorridorSouth_66 = new ol.layer.Image({
                            opacity: 1,
                            title: "Central Coastal Corridor (South)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CentralCoastalCorridorSouth_66.png",
    attributions: ' ',
                                projection: 'EPSG:7855',
                                alwaysInRange: true,
                                imageExtent: [1052437.772941, 7232441.874242, 1055392.434049, 7240265.011040]
                            })
                        });
var lyr_KalkieAshfieldStructurePlanConcept_67 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kalkie Ashfield Structure Plan Concept",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KalkieAshfieldStructurePlanConcept_67.png",
    attributions: ' ',
                                projection: 'EPSG:7855',
                                alwaysInRange: true,
                                imageExtent: [1042703.378300, 7237056.357853, 1047318.350574, 7243492.781352]
                            })
                        });
var lyr_HugesandSeaviewBargarraStructurePlanSouth_68 = new ol.layer.Image({
                            opacity: 1,
                            title: "Huges and Seaview Bargarra Structure Plan (South)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HugesandSeaviewBargarraStructurePlanSouth_68.png",
    attributions: ' ',
                                projection: 'EPSG:7855',
                                alwaysInRange: true,
                                imageExtent: [1051626.698136, 7240703.842482, 1052433.770491, 7242359.111899]
                            })
                        });
var lyr_HugesandSeaviewBargarraStructurePlan_69 = new ol.layer.Image({
                            opacity: 1,
                            title: "Huges and Seaview Bargarra Structure Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HugesandSeaviewBargarraStructurePlan_69.png",
    attributions: ' ',
                                projection: 'EPSG:7855',
                                alwaysInRange: true,
                                imageExtent: [1050577.320210, 7242148.550067, 1052459.385726, 7243907.136152]
                            })
                        });
var lyr_BranyanLocalAreaPlan_70 = new ol.layer.Image({
                            opacity: 1,
                            title: "Branyan Local Area Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BranyanLocalAreaPlan_70.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16949539.221882, -2866206.854473, 16955900.081150, -2862275.725751]
                            })
                        });
var format_Suburb_71 = new ol.format.GeoJSON();
var features_Suburb_71 = format_Suburb_71.readFeatures(json_Suburb_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Suburb_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_71.addFeatures(features_Suburb_71);
var lyr_Suburb_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_71, 
                style: style_Suburb_71,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_71.png" /> Suburb'
            });
var format_LGA_72 = new ol.format.GeoJSON();
var features_LGA_72 = format_LGA_72.readFeatures(json_LGA_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LGA_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_72.addFeatures(features_LGA_72);
var lyr_LGA_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_72, 
                style: style_LGA_72,
                popuplayertitle: "LGA",
                interactive: false,
                title: '<img src="styles/legend/LGA_72.png" /> LGA'
            });
var format_Estate_73 = new ol.format.GeoJSON();
var features_Estate_73 = format_Estate_73.readFeatures(json_Estate_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Estate_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estate_73.addFeatures(features_Estate_73);
var lyr_Estate_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estate_73, 
                style: style_Estate_73,
                popuplayertitle: "Estate",
                interactive: false,
                title: '<img src="styles/legend/Estate_73.png" /> Estate'
            });
var format_MajorLandOwner_74 = new ol.format.GeoJSON();
var features_MajorLandOwner_74 = format_MajorLandOwner_74.readFeatures(json_MajorLandOwner_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MajorLandOwner_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLandOwner_74.addFeatures(features_MajorLandOwner_74);
var lyr_MajorLandOwner_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLandOwner_74, 
                style: style_MajorLandOwner_74,
                popuplayertitle: "Major Land Owner",
                interactive: false,
    title: 'Major Land Owner<br />\
    <img src="styles/legend/MajorLandOwner_74_0.png" /> Craig Michael DerepazDebbie Maree Derepas<br />\
    <img src="styles/legend/MajorLandOwner_74_1.png" /> Giovanni Santalucia<br />\
    <img src="styles/legend/MajorLandOwner_74_2.png" /> Jeanne Eloise Strahan<br />'
        });
var format_Unzoned_75 = new ol.format.GeoJSON();
var features_Unzoned_75 = format_Unzoned_75.readFeatures(json_Unzoned_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Unzoned_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unzoned_75.addFeatures(features_Unzoned_75);
var lyr_Unzoned_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unzoned_75, 
                style: style_Unzoned_75,
                popuplayertitle: "Unzoned",
                interactive: true,
                title: '<img src="styles/legend/Unzoned_75.png" /> Unzoned'
            });
var format_Zoned_76 = new ol.format.GeoJSON();
var features_Zoned_76 = format_Zoned_76.readFeatures(json_Zoned_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Zoned_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoned_76.addFeatures(features_Zoned_76);
var lyr_Zoned_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoned_76, 
                style: style_Zoned_76,
                popuplayertitle: "Zoned",
                interactive: true,
                title: '<img src="styles/legend/Zoned_76.png" /> Zoned'
            });
var format_EstateLabel_77 = new ol.format.GeoJSON();
var features_EstateLabel_77 = format_EstateLabel_77.readFeatures(json_EstateLabel_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_EstateLabel_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstateLabel_77.addFeatures(features_EstateLabel_77);
var lyr_EstateLabel_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstateLabel_77, 
                style: style_EstateLabel_77,
                popuplayertitle: "Estate Label",
                interactive: false,
                title: '<img src="styles/legend/EstateLabel_77.png" /> Estate Label'
            });
var format_ParcelAttributesLabel_78 = new ol.format.GeoJSON();
var features_ParcelAttributesLabel_78 = format_ParcelAttributesLabel_78.readFeatures(json_ParcelAttributesLabel_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ParcelAttributesLabel_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributesLabel_78.addFeatures(features_ParcelAttributesLabel_78);
var lyr_ParcelAttributesLabel_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributesLabel_78, 
                style: style_ParcelAttributesLabel_78,
                popuplayertitle: "Parcel Attributes Label",
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributesLabel_78.png" /> Parcel Attributes Label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_EstateLabel_77,lyr_ParcelAttributesLabel_78,],
                                fold: "open",
                                title: "Label Switch"});
var group_ParcelAttributes = new ol.layer.Group({
                                layers: [lyr_Unzoned_75,lyr_Zoned_76,],
                                fold: "open",
                                title: "Parcel Attributes"});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_71,lyr_LGA_72,lyr_Estate_73,lyr_MajorLandOwner_74,],
                                fold: "open",
                                title: "Administrative"});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_SettlementPatternInset2Childers_63,lyr_SettlementPatternInset3GinGin_64,lyr_CentralCoastalCorridorNorth_65,lyr_CentralCoastalCorridorSouth_66,lyr_KalkieAshfieldStructurePlanConcept_67,lyr_HugesandSeaviewBargarraStructurePlanSouth_68,lyr_HugesandSeaviewBargarraStructurePlan_69,lyr_BranyanLocalAreaPlan_70,],
                                fold: "open",
                                title: "PSP"});
var group_PSPGrowthArea = new ol.layer.Group({
                                layers: [lyr_SettlementPatternInset2Childers_56,lyr_SettlementPatternInset3GinGin_57,lyr_KalkieAshfieldLDA_58,lyr_BranyanLocalAreaPlan_59,lyr_HugesandSeaviewBargarraStructurePlan_60,lyr_CentralCoastalCorridorSouth_61,lyr_CentralCoastalCorridorNorth_62,],
                                fold: "open",
                                title: "PSP / Growth Area"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_TRSATransportRouteSeparationArea_38,lyr_LACSLLotsAffectedbyCoastalSetbackLine_39,lyr_MEIBMajorElectricityInfrastructureBuffer_40,lyr_MESBMajorElectricitySubstationBuffer_41,lyr_MTMiningTenements_42,lyr_RCRailCorridor_43,lyr_RSAResourceSeparationArea_44,lyr_LHAPLocalHeritageAdjoiningProperties_45,lyr_LHPLocalHeritagePlaces_46,lyr_HPHeritagePlaces_47,lyr_GPGasPipeline_48,lyr_MEIMajorElectricityInfrastructure_49,lyr_WBWaterwaysSouth_50,lyr_WBWaterwaysNorth_51,lyr_STIAStormTideInundationArea_52,lyr_RPAResourceProcessingArea_53,lyr_EASEMENTS_54,lyr_SPEncumbrances_55,],
                                fold: "open",
                                title: "NDH Deducted Overlays"});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_STSASeaTurtleSensitiveArea_29,lyr_SCRCBStateControlledRoadCorridorBuffer_30,lyr_SLSteepLand_31,lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32,lyr_FPFuturePathways_33,lyr_FRFutureRoads_34,lyr_OAOperationalAirspace_35,lyr_GPBGasPipelineBuffer_36,lyr_Contours5m_37,],
                                fold: "open",
                                title: "Note to Due Diligence"});
var group_OtherLayers = new ol.layer.Group({
                                layers: [lyr_FTMFutureTrunkMains_23,lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24,lyr_WTPWastewaterTreatmentPlant_25,lyr_WTPBWastewaterTreatmentPlantBuffer_26,lyr_WMFBWasteManagementFacilityBuffer_27,lyr_WMFWasteManagementFacility_28,],
                                fold: "open",
                                title: "Other Layers"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_Strategicportland_2,lyr_Limiteddevelopment_3,lyr_Specialpurpose_4,lyr_Communityfacilities_5,lyr_Highimpactindustry_6,lyr_Industry_7,lyr_Environmentalmanagementandconservation_8,lyr_Sportandrecreation_9,lyr_Openspace_10,lyr_Rural_11,lyr_Ruralresidential_12,lyr_Localcentre_13,lyr_Neighbourhoodcentre_14,lyr_Districtcentre_15,lyr_Majorcentre_16,lyr_Principalcentre_17,lyr_Specialisedcentre_18,lyr_Highdensityresidential_19,lyr_Mediumdensityresidential_20,lyr_Emergingcommunity_21,lyr_Lowdensityresidential_22,],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatellite_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatellite_1.setVisible(true);lyr_Strategicportland_2.setVisible(false);lyr_Limiteddevelopment_3.setVisible(false);lyr_Specialpurpose_4.setVisible(false);lyr_Communityfacilities_5.setVisible(false);lyr_Highimpactindustry_6.setVisible(false);lyr_Industry_7.setVisible(false);lyr_Environmentalmanagementandconservation_8.setVisible(false);lyr_Sportandrecreation_9.setVisible(false);lyr_Openspace_10.setVisible(false);lyr_Rural_11.setVisible(false);lyr_Ruralresidential_12.setVisible(false);lyr_Localcentre_13.setVisible(false);lyr_Neighbourhoodcentre_14.setVisible(false);lyr_Districtcentre_15.setVisible(false);lyr_Majorcentre_16.setVisible(false);lyr_Principalcentre_17.setVisible(false);lyr_Specialisedcentre_18.setVisible(false);lyr_Highdensityresidential_19.setVisible(false);lyr_Mediumdensityresidential_20.setVisible(false);lyr_Emergingcommunity_21.setVisible(false);lyr_Lowdensityresidential_22.setVisible(false);lyr_FTMFutureTrunkMains_23.setVisible(false);lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.setVisible(false);lyr_WTPWastewaterTreatmentPlant_25.setVisible(false);lyr_WTPBWastewaterTreatmentPlantBuffer_26.setVisible(false);lyr_WMFBWasteManagementFacilityBuffer_27.setVisible(false);lyr_WMFWasteManagementFacility_28.setVisible(false);lyr_STSASeaTurtleSensitiveArea_29.setVisible(false);lyr_SCRCBStateControlledRoadCorridorBuffer_30.setVisible(false);lyr_SLSteepLand_31.setVisible(false);lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.setVisible(false);lyr_FPFuturePathways_33.setVisible(false);lyr_FRFutureRoads_34.setVisible(false);lyr_OAOperationalAirspace_35.setVisible(false);lyr_GPBGasPipelineBuffer_36.setVisible(false);lyr_Contours5m_37.setVisible(false);lyr_TRSATransportRouteSeparationArea_38.setVisible(false);lyr_LACSLLotsAffectedbyCoastalSetbackLine_39.setVisible(false);lyr_MEIBMajorElectricityInfrastructureBuffer_40.setVisible(false);lyr_MESBMajorElectricitySubstationBuffer_41.setVisible(false);lyr_MTMiningTenements_42.setVisible(false);lyr_RCRailCorridor_43.setVisible(false);lyr_RSAResourceSeparationArea_44.setVisible(false);lyr_LHAPLocalHeritageAdjoiningProperties_45.setVisible(false);lyr_LHPLocalHeritagePlaces_46.setVisible(false);lyr_HPHeritagePlaces_47.setVisible(false);lyr_GPGasPipeline_48.setVisible(false);lyr_MEIMajorElectricityInfrastructure_49.setVisible(false);lyr_WBWaterwaysSouth_50.setVisible(false);lyr_WBWaterwaysNorth_51.setVisible(false);lyr_STIAStormTideInundationArea_52.setVisible(false);lyr_RPAResourceProcessingArea_53.setVisible(false);lyr_EASEMENTS_54.setVisible(false);lyr_SPEncumbrances_55.setVisible(false);lyr_SettlementPatternInset2Childers_56.setVisible(false);lyr_SettlementPatternInset3GinGin_57.setVisible(false);lyr_KalkieAshfieldLDA_58.setVisible(false);lyr_BranyanLocalAreaPlan_59.setVisible(false);lyr_HugesandSeaviewBargarraStructurePlan_60.setVisible(false);lyr_CentralCoastalCorridorSouth_61.setVisible(false);lyr_CentralCoastalCorridorNorth_62.setVisible(false);lyr_SettlementPatternInset2Childers_63.setVisible(false);lyr_SettlementPatternInset3GinGin_64.setVisible(false);lyr_CentralCoastalCorridorNorth_65.setVisible(false);lyr_CentralCoastalCorridorSouth_66.setVisible(false);lyr_KalkieAshfieldStructurePlanConcept_67.setVisible(false);lyr_HugesandSeaviewBargarraStructurePlanSouth_68.setVisible(false);lyr_HugesandSeaviewBargarraStructurePlan_69.setVisible(false);lyr_BranyanLocalAreaPlan_70.setVisible(false);lyr_Suburb_71.setVisible(true);lyr_LGA_72.setVisible(true);lyr_Estate_73.setVisible(false);lyr_MajorLandOwner_74.setVisible(true);lyr_Unzoned_75.setVisible(true);lyr_Zoned_76.setVisible(true);lyr_EstateLabel_77.setVisible(false);lyr_ParcelAttributesLabel_78.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_OtherLayers,group_NotetoDueDiligence,group_NDHDeductedOverlays,group_PSPGrowthArea,group_PSP,group_Administrative,group_ParcelAttributes,group_LabelSwitch];
lyr_Strategicportland_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Limiteddevelopment_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Specialpurpose_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Communityfacilities_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Highimpactindustry_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Industry_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Environmentalmanagementandconservation_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Sportandrecreation_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Openspace_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Rural_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Ruralresidential_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Localcentre_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Neighbourhoodcentre_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Districtcentre_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Majorcentre_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Principalcentre_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Specialisedcentre_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Highdensityresidential_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Mediumdensityresidential_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Emergingcommunity_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Lowdensityresidential_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_FTMFutureTrunkMains_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LGIP_ID': 'LGIP_ID', 'Asset_Name': 'Asset_Name', 'Asset_Type': 'Asset_Type', 'Shape_Leng': 'Shape_Leng', 'BRC_Timing': 'BRC_Timing', 'SOW_Total_Asset_Cost_Base_Year': 'SOW_Total_Asset_Cost_Base_Year', 'Shape_Length': 'Shape_Length', });
lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WTPWastewaterTreatmentPlant_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Infrastructure_Status': 'Infrastructure_Status', 'Infrastructure_Change_Date': 'Infrastructure_Change_Date', });
lyr_WTPBWastewaterTreatmentPlantBuffer_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Infrastructure_Status': 'Infrastructure_Status', 'Infrastructure_Change_Date': 'Infrastructure_Change_Date', });
lyr_WMFBWasteManagementFacilityBuffer_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WMFWasteManagementFacility_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_STSASeaTurtleSensitiveArea_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'BUFF_DIST': 'BUFF_DIST', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SCRCBStateControlledRoadCorridorBuffer_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ROAD_NAME': 'ROAD_NAME', 'Segment_ID': 'Segment_ID', 'Parcel_ID': 'Parcel_ID', 'Seg_Par': 'Seg_Par', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SLSteepLand_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FPFuturePathways_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Asset_Type': 'Asset_Type', 'Path_Width': 'Path_Width', 'LGIP_ID': 'LGIP_ID', 'Facility_L': 'Facility_L', 'Constructi': 'Constructi', 'Shape_Leng': 'Shape_Leng', 'BRC_Timing': 'BRC_Timing', 'SOW_Total_Asset_Cost_Base_Year': 'SOW_Total_Asset_Cost_Base_Year', 'Shape_Length': 'Shape_Length', });
lyr_FRFutureRoads_34.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Hierarchy': 'Hierarchy', 'Project_Type': 'Project_Type', 'Project': 'Project', 'LGIP_ID': 'LGIP_ID', 'Shape_Leng': 'Shape_Leng', 'BRC_Timing': 'BRC_Timing', 'SOW_Total_Asset_Cost_Base_Year': 'SOW_Total_Asset_Cost_Base_Year', 'Shape_Length': 'Shape_Length', });
lyr_OAOperationalAirspace_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LOCATION': 'LOCATION', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GPBGasPipelineBuffer_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'STATUS': 'STATUS', 'D_GRANTED': 'D_GRANTED', 'PRINC_HLDR': 'PRINC_HLDR', 'STAGE': 'STAGE', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'PERMIT_USE': 'PERMIT_USE', 'PERMIT_TYPE': 'PERMIT_TYPE', });
lyr_TRSATransportRouteSeparationArea_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KRA_NO': 'KRA No', 'KRA_NAME': 'KRA Name', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LACSLLotsAffectedbyCoastalSetbackLine_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MEIBMajorElectricityInfrastructureBuffer_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'POWERLINK': 'POWERLINK', 'BUFF_DIST': 'BUFF_DIST', 'ERGON': 'ERGON', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MESBMajorElectricitySubstationBuffer_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SITE_NAME': 'SITE_NAME', 'SITE_STATU': 'SITE_STATU', 'BUFF_DIST': 'BUFF_DIST', 'ASSET_TYPE': 'ASSET_TYPE', 'OP_NUMBER': 'OP_NUMBER', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MTMiningTenements_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'NAME', 'DIVISION': 'DIVISION', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'PERMITID': 'PERMITID', 'DISPLAYNAME': 'DISPLAYNAME', 'PERMITNAME': 'PERMITNAME', 'PERMITTYPEID': 'PERMITTYPEID', 'PERMITTYPE': 'PERMITTYPE', 'PERMITTYPEABBREVIATION': 'PERMITTYPEABBREVIATION', 'PERMITNUMBER': 'PERMITNUMBER', 'PERMITSTATUSTYPEID': 'PERMITSTATUSTYPEID', 'PERMITSTATUS': 'PERMITSTATUS', 'PERMITSTATE': 'PERMITSTATE', 'PERMITMINERALS': 'PERMITMINERALS', 'PERMITPURPOSE': 'PERMITPURPOSE', 'LODGEDATE': 'LODGEDATE', 'APPROVEDATE': 'APPROVEDATE', 'EXPIRYDATE': 'EXPIRYDATE', 'NONCURRENTDATE': 'NONCURRENTDATE', 'AUTHORISEDHOLDERID': 'AUTHORISEDHOLDERID', 'AUTHORISEDHOLDERNAME': 'AUTHORISEDHOLDERNAME', 'NATIVETITLECATEGORY': 'NATIVETITLECATEGORY', 'SHAPEAREA': 'SHAPEAREA', 'SHAPEAREAHECTARES': 'SHAPEAREAHECTARES', 'AREA_SUBBLOCKS': 'AREA_SUBBLOCKS', });
lyr_RCRailCorridor_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Area': 'Area', 'AREA_UNIT': 'AREA_UNIT', 'Category': 'Category', 'QR_INTERES': 'QR_INTERES', 'Date_Stamp': 'Date_Stamp', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RSAResourceSeparationArea_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KRA_NO': 'KRA No', 'KRA_NAME': 'KRA Name', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LHAPLocalHeritageAdjoiningProperties_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Previous_Council_Name': 'Previous_Council_Name', 'LOT': 'LOT', 'PLAN_': 'PLAN_', 'Parcel_Number': 'Parcel_Number', 'Registration_Date': 'Registration_Date', 'DERM_LANDUSE': 'DERM_LANDUSE', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Description': 'Description', 'Table7_No': 'Table7_No', });
lyr_LHPLocalHeritagePlaces_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Site_Name': 'Site_Name', 'Address': 'Address', 'SURV_IND': 'SURV_IND', 'PARCEL_TYP': 'PARCEL_TYP', 'COVER_TYP': 'COVER_TYP', 'LOT': 'LOT', 'PLAN_': 'PLAN', 'LOTPLAN': 'LOTPLAN', 'SEG_NUM': 'SEG_NUM', 'PAR_NUM': 'PAR_NUM', 'SEGPAR': 'SEGPAR', 'PAR_IND': 'PAR_IND', 'LOT_AREA': 'LOT_AREA', 'EXCL_AREA': 'EXCL_AREA', 'LOT_VOLUME': 'LOT_VOLUME', 'TENURE': 'TENURE', 'PRC': 'PRC', 'PARISH': 'PARISH', 'COUNTY': 'COUNTY', 'LAC': 'LAC', 'SHIRE_NAME': 'SHIRE_NAME', 'FEAT_NAME': 'FEAT_NAME', 'ALIAS_NAME': 'ALIAS_NAME', 'LOC': 'LOC', 'LOCALITY': 'LOCALITY', 'ACC_CODE': 'ACC_CODE', 'CA_AREA_SQ': 'CA_AREA_SQ', 'Suburb': 'Suburb', 'Descriptio': 'Descriptio', 'Council_Re': 'Council_Re', 'Ref_No': 'Ref_No', 'Table7_No': 'Table7_No', 'LAYER_NAME': 'LAYER_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HPHeritagePlaces_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLACE_ID': 'PLACE_ID', 'ACCURACY': 'ACCURACY', 'PLACENAME': 'PLACENAME', 'STATUS': 'STATUS', 'ENTRYDATE': 'ENTRYDATE', 'AREA_SQM': 'AREA_SQM', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GPGasPipeline_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'PERMITID': 'PERMITID', 'PERMITNAME': 'PermitName', 'PERMITTYPEID': 'PERMITTYPEID', 'PERMITTYPE': 'PERMITTYPE', 'PERMITTYPEABBREVIATION': 'PERMITTYPEABBREVIATION', 'PERMITNUMBER': 'PermitNumber', 'PERMITSTATUSTYPEID': 'PERMITSTATUSTYPEID', 'PERMITSTATUS': 'PERMITSTATUS', 'PERMITSTATE': 'PermitState', 'PERMITMINERALS': 'PermitMinerals', 'PERMITPURPOSE': 'PermitPurpose', 'LODGEDATE': 'LodgeDate', 'APPROVEDATE': 'ApproveDate', 'EXPIRYDATE': 'ExpiryDate', 'NONCURRENTDATE': 'NonCurrentDate', 'AUTHORISEDHOLDERID': 'AuthorisedHolderId', 'AUTHORISEDHOLDERNAME': 'AuthorisedHolderName', 'NATIVETITLECATEGORY': 'NativeTitleCategory', 'DIVISION': 'Division', 'AREA_SUBBLOCKS': 'Area_SubBlocks', 'NAME': 'NAME', });
lyr_MEIMajorElectricityInfrastructure_49.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ROUTE_LENG': 'ROUTE_LENG', 'ANNOTATION': 'ANNOTATION', 'SW_SIZE': 'SW_SIZE', 'TYPE': 'TYPE', 'CONSTRUCTI': 'CONSTRUCTI', 'LEGACY_ID': 'LEGACY_ID', 'LEGACY_FEE': 'LEGACY_FEE', 'OPERATING_': 'OPERATING_', 'TR_LINE_ID': 'TR_LINE_ID', 'GSCH_ANNOT': 'GSCH_ANNOT', 'ECORP_ASSE': 'ECORP_ASSE', 'SERVICE_ST': 'SERVICE_ST', 'ANNOTATI00': 'ANNOTATI00', 'REPORTING_': 'REPORTING_', 'TR_LINE_GC': 'TR_LINE_GC', 'FEEDER_OP_': 'FEEDER_OP_', 'FEEDER_O00': 'FEEDER_O00', 'DATE_ERECT': 'DATE_ERECT', 'VERIFIED': 'VERIFIED', 'WIND_PRESS': 'WIND_PRESS', 'ENERGISED': 'ENERGISED', 'MEAN_EFFEC': 'MEAN_EFFEC', 'SPECIAL_CO': 'SPECIAL_CO', 'ZONE_SUBST': 'ZONE_SUBST', 'PHASE': 'PHASE', 'FEEDER_SEC': 'FEEDER_SEC', 'MAX_DESIGN': 'MAX_DESIGN', 'PHASE_CODE': 'PHASE_CODE', 'LINE_LENGT': 'LINE_LENGT', 'REMARKS': 'REMARKS', 'OWNER': 'OWNER', 'NO_CONDUCT': 'NO_CONDUCT', 'CONSTRUC00': 'CONSTRUC00', 'DESCRIPTIO': 'DESCRIPTIO', 'ANNOTATI01': 'ANNOTATI01', 'NBL': 'NBL', 'CUTTING_AL': 'CUTTING_AL', 'GSCH_ANN00': 'GSCH_ANN00', 'LGA': 'LGA', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', });
lyr_WBWaterwaysSouth_50.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_WBWaterwaysNorth_51.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_STIAStormTideInundationArea_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RPAResourceProcessingArea_53.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EASEMENTS_54.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'PURPOSE': 'PURPOSE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SPEncumbrances_55.set('fieldAliases', {'id': 'id', });
lyr_SettlementPatternInset2Childers_56.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SettlementPatternInset3GinGin_57.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_KalkieAshfieldLDA_58.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_BranyanLocalAreaPlan_59.set('fieldAliases', {'id': 'id', });
lyr_HugesandSeaviewBargarraStructurePlan_60.set('fieldAliases', {'id': 'id', });
lyr_CentralCoastalCorridorSouth_61.set('fieldAliases', {'id': 'id', });
lyr_CentralCoastalCorridorNorth_62.set('fieldAliases', {'id': 'id', });
lyr_Suburb_71.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Locality': 'Locality', 'Post_Code': 'Post_Code', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LGA_72.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Previous_Council': 'Previous_Council', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Estate_73.set('fieldAliases', {'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', });
lyr_MajorLandOwner_74.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'plan_lot': 'plan_lot', 'derm_landuse': 'derm_landuse', 'house_no': 'house_no', 'street_name': 'street_name', 'street_type': 'street_type', 'road_name': 'road_name', 'locality': 'locality', 'legal_area': 'legal_area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Major Land Owner': 'Major Land Owner', });
lyr_Unzoned_75.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'plan_lot': 'plan_lot', 'derm_landuse': 'derm_landuse', 'house_no': 'house_no', 'street_name': 'street_name', 'street_type': 'street_type', 'road_name': 'road_name', 'locality': 'locality', 'legal_area': 'legal_area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Major Land Owner': 'Major Land Owner', });
lyr_Zoned_76.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'plan_lot': 'plan_lot', 'derm_landuse': 'derm_landuse', 'house_no': 'house_no', 'street_name': 'street_name', 'street_type': 'street_type', 'road_name': 'road_name', 'locality': 'locality', 'legal_area': 'legal_area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Major Land Owner': 'Major Land Owner', });
lyr_EstateLabel_77.set('fieldAliases', {'fid': 'fid', 'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', });
lyr_ParcelAttributesLabel_78.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'full_address': 'full_address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'plan_lot': 'plan_lot', 'derm_landuse': 'derm_landuse', 'house_no': 'house_no', 'street_name': 'street_name', 'street_type': 'street_type', 'road_name': 'road_name', 'locality': 'locality', 'legal_area': 'legal_area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Major Land Owner': 'Major Land Owner', });
lyr_Strategicportland_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Limiteddevelopment_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Specialpurpose_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Communityfacilities_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Highimpactindustry_6.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Industry_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Environmentalmanagementandconservation_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Sportandrecreation_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Openspace_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Rural_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Ruralresidential_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Localcentre_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Neighbourhoodcentre_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Districtcentre_15.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Majorcentre_16.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Principalcentre_17.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Specialisedcentre_18.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Highdensityresidential_19.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Mediumdensityresidential_20.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Emergingcommunity_21.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_Lowdensityresidential_22.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PLAN_LOT': '', 'Zone_Precincts': '', 'CF_Label': '', 'AREA_SQM': '', 'ZONE': '', 'Shape_Length': '', 'Shape_Area': '', 'Amendment': '', 'INCLUDE': '', });
lyr_FTMFutureTrunkMains_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LGIP_ID': 'TextEdit', 'Asset_Name': 'TextEdit', 'Asset_Type': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BRC_Timing': 'TextEdit', 'SOW_Total_Asset_Cost_Base_Year': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WTPWastewaterTreatmentPlant_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Infrastructure_Status': 'TextEdit', 'Infrastructure_Change_Date': 'DateTime', });
lyr_WTPBWastewaterTreatmentPlantBuffer_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Infrastructure_Status': 'TextEdit', 'Infrastructure_Change_Date': 'DateTime', });
lyr_WMFBWasteManagementFacilityBuffer_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WMFWasteManagementFacility_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_STSASeaTurtleSensitiveArea_29.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SCRCBStateControlledRoadCorridorBuffer_30.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'STREET': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'Segment_ID': 'TextEdit', 'Parcel_ID': 'TextEdit', 'Seg_Par': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SLSteepLand_31.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FPFuturePathways_33.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Asset_Type': 'TextEdit', 'Path_Width': 'TextEdit', 'LGIP_ID': 'TextEdit', 'Facility_L': 'TextEdit', 'Constructi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BRC_Timing': 'TextEdit', 'SOW_Total_Asset_Cost_Base_Year': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_FRFutureRoads_34.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Hierarchy': 'TextEdit', 'Project_Type': 'TextEdit', 'Project': 'TextEdit', 'LGIP_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BRC_Timing': 'TextEdit', 'SOW_Total_Asset_Cost_Base_Year': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_OAOperationalAirspace_35.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LOCATION': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GPBGasPipelineBuffer_36.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'STATUS': 'TextEdit', 'D_GRANTED': 'TextEdit', 'PRINC_HLDR': 'TextEdit', 'STAGE': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERMIT_USE': 'TextEdit', 'PERMIT_TYPE': 'TextEdit', });
lyr_TRSATransportRouteSeparationArea_38.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRA_NO': 'Range', 'KRA_NAME': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LACSLLotsAffectedbyCoastalSetbackLine_39.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MEIBMajorElectricityInfrastructureBuffer_40.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'POWERLINK': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ERGON': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MESBMajorElectricitySubstationBuffer_41.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SITE_NAME': 'TextEdit', 'SITE_STATU': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ASSET_TYPE': 'TextEdit', 'OP_NUMBER': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MTMiningTenements_42.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'DIVISION': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERMITID': 'TextEdit', 'DISPLAYNAME': 'TextEdit', 'PERMITNAME': 'TextEdit', 'PERMITTYPEID': 'TextEdit', 'PERMITTYPE': 'TextEdit', 'PERMITTYPEABBREVIATION': 'TextEdit', 'PERMITNUMBER': 'TextEdit', 'PERMITSTATUSTYPEID': 'TextEdit', 'PERMITSTATUS': 'TextEdit', 'PERMITSTATE': 'TextEdit', 'PERMITMINERALS': 'TextEdit', 'PERMITPURPOSE': 'TextEdit', 'LODGEDATE': 'DateTime', 'APPROVEDATE': 'DateTime', 'EXPIRYDATE': 'DateTime', 'NONCURRENTDATE': 'DateTime', 'AUTHORISEDHOLDERID': 'TextEdit', 'AUTHORISEDHOLDERNAME': 'TextEdit', 'NATIVETITLECATEGORY': 'TextEdit', 'SHAPEAREA': 'TextEdit', 'SHAPEAREAHECTARES': 'TextEdit', 'AREA_SUBBLOCKS': 'TextEdit', });
lyr_RCRailCorridor_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Area': 'TextEdit', 'AREA_UNIT': 'TextEdit', 'Category': 'TextEdit', 'QR_INTERES': 'TextEdit', 'Date_Stamp': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RSAResourceSeparationArea_44.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRA_NO': 'Range', 'KRA_NAME': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LHAPLocalHeritageAdjoiningProperties_45.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Previous_Council_Name': 'TextEdit', 'LOT': 'TextEdit', 'PLAN_': 'TextEdit', 'Parcel_Number': 'TextEdit', 'Registration_Date': 'DateTime', 'DERM_LANDUSE': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Description': 'TextEdit', 'Table7_No': 'Range', });
lyr_LHPLocalHeritagePlaces_46.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'Site_Name': 'TextEdit', 'Address': 'TextEdit', 'SURV_IND': 'TextEdit', 'PARCEL_TYP': 'TextEdit', 'COVER_TYP': 'TextEdit', 'LOT': 'TextEdit', 'PLAN_': 'TextEdit', 'LOTPLAN': 'TextEdit', 'SEG_NUM': 'TextEdit', 'PAR_NUM': 'TextEdit', 'SEGPAR': 'TextEdit', 'PAR_IND': 'TextEdit', 'LOT_AREA': 'TextEdit', 'EXCL_AREA': 'TextEdit', 'LOT_VOLUME': 'TextEdit', 'TENURE': 'TextEdit', 'PRC': 'TextEdit', 'PARISH': 'TextEdit', 'COUNTY': 'TextEdit', 'LAC': 'TextEdit', 'SHIRE_NAME': 'TextEdit', 'FEAT_NAME': 'TextEdit', 'ALIAS_NAME': 'TextEdit', 'LOC': 'TextEdit', 'LOCALITY': 'TextEdit', 'ACC_CODE': 'TextEdit', 'CA_AREA_SQ': 'TextEdit', 'Suburb': 'TextEdit', 'Descriptio': 'TextEdit', 'Council_Re': 'TextEdit', 'Ref_No': 'TextEdit', 'Table7_No': 'Range', 'LAYER_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HPHeritagePlaces_47.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLACE_ID': 'TextEdit', 'ACCURACY': 'TextEdit', 'PLACENAME': 'TextEdit', 'STATUS': 'TextEdit', 'ENTRYDATE': 'DateTime', 'AREA_SQM': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GPGasPipeline_48.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'PERMITID': 'TextEdit', 'PERMITNAME': 'TextEdit', 'PERMITTYPEID': 'TextEdit', 'PERMITTYPE': 'TextEdit', 'PERMITTYPEABBREVIATION': 'TextEdit', 'PERMITNUMBER': 'TextEdit', 'PERMITSTATUSTYPEID': 'TextEdit', 'PERMITSTATUS': 'TextEdit', 'PERMITSTATE': 'TextEdit', 'PERMITMINERALS': 'TextEdit', 'PERMITPURPOSE': 'TextEdit', 'LODGEDATE': 'DateTime', 'APPROVEDATE': 'DateTime', 'EXPIRYDATE': 'DateTime', 'NONCURRENTDATE': 'DateTime', 'AUTHORISEDHOLDERID': 'TextEdit', 'AUTHORISEDHOLDERNAME': 'TextEdit', 'NATIVETITLECATEGORY': 'TextEdit', 'DIVISION': 'TextEdit', 'AREA_SUBBLOCKS': 'TextEdit', 'NAME': 'TextEdit', });
lyr_MEIMajorElectricityInfrastructure_49.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ROUTE_LENG': 'TextEdit', 'ANNOTATION': 'TextEdit', 'SW_SIZE': 'TextEdit', 'TYPE': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'LEGACY_ID': 'TextEdit', 'LEGACY_FEE': 'TextEdit', 'OPERATING_': 'TextEdit', 'TR_LINE_ID': 'TextEdit', 'GSCH_ANNOT': 'TextEdit', 'ECORP_ASSE': 'TextEdit', 'SERVICE_ST': 'TextEdit', 'ANNOTATI00': 'TextEdit', 'REPORTING_': 'TextEdit', 'TR_LINE_GC': 'TextEdit', 'FEEDER_OP_': 'TextEdit', 'FEEDER_O00': 'TextEdit', 'DATE_ERECT': 'TextEdit', 'VERIFIED': 'TextEdit', 'WIND_PRESS': 'TextEdit', 'ENERGISED': 'TextEdit', 'MEAN_EFFEC': 'TextEdit', 'SPECIAL_CO': 'TextEdit', 'ZONE_SUBST': 'TextEdit', 'PHASE': 'TextEdit', 'FEEDER_SEC': 'TextEdit', 'MAX_DESIGN': 'TextEdit', 'PHASE_CODE': 'TextEdit', 'LINE_LENGT': 'TextEdit', 'REMARKS': 'TextEdit', 'OWNER': 'TextEdit', 'NO_CONDUCT': 'TextEdit', 'CONSTRUC00': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'ANNOTATI01': 'TextEdit', 'NBL': 'TextEdit', 'CUTTING_AL': 'TextEdit', 'GSCH_ANN00': 'TextEdit', 'LGA': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_WBWaterwaysSouth_50.set('fieldImages', {'fid': '', 'DN': '', });
lyr_WBWaterwaysNorth_51.set('fieldImages', {'fid': '', 'DN': '', });
lyr_STIAStormTideInundationArea_52.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RPAResourceProcessingArea_53.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EASEMENTS_54.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'PURPOSE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SPEncumbrances_55.set('fieldImages', {'id': '', });
lyr_SettlementPatternInset2Childers_56.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_SettlementPatternInset3GinGin_57.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_KalkieAshfieldLDA_58.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_BranyanLocalAreaPlan_59.set('fieldImages', {'id': '', });
lyr_HugesandSeaviewBargarraStructurePlan_60.set('fieldImages', {'id': '', });
lyr_CentralCoastalCorridorSouth_61.set('fieldImages', {'id': 'TextEdit', });
lyr_CentralCoastalCorridorNorth_62.set('fieldImages', {'id': '', });
lyr_Suburb_71.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Locality': 'TextEdit', 'Post_Code': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LGA_72.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Previous_Council': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Estate_73.set('fieldImages', {'Estate': '', 'Status': '', 'Developer': '', });
lyr_MajorLandOwner_74.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned/Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (350m2)': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'plan_lot': 'TextEdit', 'derm_landuse': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'road_name': 'TextEdit', 'locality': 'TextEdit', 'legal_area': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Major Land Owner': 'TextEdit', });
lyr_Unzoned_75.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PARCEL': '', 'Address': '', 'Zoned/Unzoned': '', 'Zoning': '', 'Strategy': '', 'Strat Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 20dw/HA (350m2)': '', 'VALUE @ 350m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Address': '', 'Vendor Mobile': '', 'Vendor Email': '', 'Lead Link': '', 'plan_lot': '', 'derm_landuse': '', 'house_no': '', 'street_name': '', 'street_type': '', 'road_name': '', 'locality': '', 'legal_area': '', 'Shape_Length': '', 'Shape_Area': '', 'Major Land Owner': '', });
lyr_Zoned_76.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned/Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (350m2)': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'plan_lot': 'TextEdit', 'derm_landuse': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'road_name': 'TextEdit', 'locality': 'TextEdit', 'legal_area': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Major Land Owner': 'TextEdit', });
lyr_EstateLabel_77.set('fieldImages', {'fid': 'TextEdit', 'Estate': 'TextEdit', 'Status': 'TextEdit', 'Developer': 'TextEdit', });
lyr_ParcelAttributesLabel_78.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'full_address': 'TextEdit', 'Zoned/Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (350m2)': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'plan_lot': 'TextEdit', 'derm_landuse': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'road_name': 'TextEdit', 'locality': 'TextEdit', 'legal_area': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Major Land Owner': 'TextEdit', });
lyr_Strategicportland_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Limiteddevelopment_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Specialpurpose_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Communityfacilities_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Highimpactindustry_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Industry_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Environmentalmanagementandconservation_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Sportandrecreation_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Openspace_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Rural_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Ruralresidential_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Localcentre_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Neighbourhoodcentre_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Districtcentre_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Majorcentre_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Principalcentre_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Specialisedcentre_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Highdensityresidential_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Mediumdensityresidential_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Emergingcommunity_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Lowdensityresidential_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_FTMFutureTrunkMains_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LGIP_ID': 'hidden field', 'Asset_Name': 'hidden field', 'Asset_Type': 'hidden field', 'Shape_Leng': 'hidden field', 'BRC_Timing': 'hidden field', 'SOW_Total_Asset_Cost_Base_Year': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WTPWastewaterTreatmentPlant_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Infrastructure_Status': 'hidden field', 'Infrastructure_Change_Date': 'hidden field', });
lyr_WTPBWastewaterTreatmentPlantBuffer_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Infrastructure_Status': 'hidden field', 'Infrastructure_Change_Date': 'hidden field', });
lyr_WMFBWasteManagementFacilityBuffer_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WMFWasteManagementFacility_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_STSASeaTurtleSensitiveArea_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'BUFF_DIST': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SCRCBStateControlledRoadCorridorBuffer_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'STREET': 'hidden field', 'ROAD_NAME': 'hidden field', 'Segment_ID': 'hidden field', 'Parcel_ID': 'hidden field', 'Seg_Par': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLSteepLand_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FPFuturePathways_33.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Asset_Type': 'hidden field', 'Path_Width': 'hidden field', 'LGIP_ID': 'hidden field', 'Facility_L': 'hidden field', 'Constructi': 'hidden field', 'Shape_Leng': 'hidden field', 'BRC_Timing': 'hidden field', 'SOW_Total_Asset_Cost_Base_Year': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_FRFutureRoads_34.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Hierarchy': 'hidden field', 'Project_Type': 'hidden field', 'Project': 'hidden field', 'LGIP_ID': 'hidden field', 'Shape_Leng': 'hidden field', 'BRC_Timing': 'hidden field', 'SOW_Total_Asset_Cost_Base_Year': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_OAOperationalAirspace_35.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LOCATION': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GPBGasPipelineBuffer_36.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'STATUS': 'hidden field', 'D_GRANTED': 'hidden field', 'PRINC_HLDR': 'hidden field', 'STAGE': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'PERMIT_USE': 'hidden field', 'PERMIT_TYPE': 'hidden field', });
lyr_TRSATransportRouteSeparationArea_38.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KRA_NO': 'hidden field', 'KRA_NAME': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LACSLLotsAffectedbyCoastalSetbackLine_39.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MEIBMajorElectricityInfrastructureBuffer_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'POWERLINK': 'hidden field', 'BUFF_DIST': 'hidden field', 'ERGON': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MESBMajorElectricitySubstationBuffer_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SITE_NAME': 'hidden field', 'SITE_STATU': 'hidden field', 'BUFF_DIST': 'hidden field', 'ASSET_TYPE': 'hidden field', 'OP_NUMBER': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MTMiningTenements_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'DIVISION': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'PERMITID': 'hidden field', 'DISPLAYNAME': 'hidden field', 'PERMITNAME': 'hidden field', 'PERMITTYPEID': 'hidden field', 'PERMITTYPE': 'hidden field', 'PERMITTYPEABBREVIATION': 'hidden field', 'PERMITNUMBER': 'hidden field', 'PERMITSTATUSTYPEID': 'hidden field', 'PERMITSTATUS': 'hidden field', 'PERMITSTATE': 'hidden field', 'PERMITMINERALS': 'hidden field', 'PERMITPURPOSE': 'hidden field', 'LODGEDATE': 'hidden field', 'APPROVEDATE': 'hidden field', 'EXPIRYDATE': 'hidden field', 'NONCURRENTDATE': 'hidden field', 'AUTHORISEDHOLDERID': 'hidden field', 'AUTHORISEDHOLDERNAME': 'hidden field', 'NATIVETITLECATEGORY': 'hidden field', 'SHAPEAREA': 'hidden field', 'SHAPEAREAHECTARES': 'hidden field', 'AREA_SUBBLOCKS': 'hidden field', });
lyr_RCRailCorridor_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Area': 'hidden field', 'AREA_UNIT': 'hidden field', 'Category': 'hidden field', 'QR_INTERES': 'hidden field', 'Date_Stamp': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RSAResourceSeparationArea_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KRA_NO': 'hidden field', 'KRA_NAME': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LHAPLocalHeritageAdjoiningProperties_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Previous_Council_Name': 'hidden field', 'LOT': 'hidden field', 'PLAN_': 'hidden field', 'Parcel_Number': 'hidden field', 'Registration_Date': 'hidden field', 'DERM_LANDUSE': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Description': 'hidden field', 'Table7_No': 'hidden field', });
lyr_LHPLocalHeritagePlaces_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'hidden field', 'Site_Name': 'hidden field', 'Address': 'hidden field', 'SURV_IND': 'hidden field', 'PARCEL_TYP': 'hidden field', 'COVER_TYP': 'hidden field', 'LOT': 'hidden field', 'PLAN_': 'hidden field', 'LOTPLAN': 'hidden field', 'SEG_NUM': 'hidden field', 'PAR_NUM': 'hidden field', 'SEGPAR': 'hidden field', 'PAR_IND': 'hidden field', 'LOT_AREA': 'hidden field', 'EXCL_AREA': 'hidden field', 'LOT_VOLUME': 'hidden field', 'TENURE': 'hidden field', 'PRC': 'hidden field', 'PARISH': 'hidden field', 'COUNTY': 'hidden field', 'LAC': 'hidden field', 'SHIRE_NAME': 'hidden field', 'FEAT_NAME': 'hidden field', 'ALIAS_NAME': 'hidden field', 'LOC': 'hidden field', 'LOCALITY': 'hidden field', 'ACC_CODE': 'hidden field', 'CA_AREA_SQ': 'hidden field', 'Suburb': 'hidden field', 'Descriptio': 'hidden field', 'Council_Re': 'hidden field', 'Ref_No': 'hidden field', 'Table7_No': 'hidden field', 'LAYER_NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HPHeritagePlaces_47.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLACE_ID': 'hidden field', 'ACCURACY': 'hidden field', 'PLACENAME': 'hidden field', 'STATUS': 'hidden field', 'ENTRYDATE': 'hidden field', 'AREA_SQM': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GPGasPipeline_48.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'PERMITID': 'hidden field', 'PERMITNAME': 'hidden field', 'PERMITTYPEID': 'hidden field', 'PERMITTYPE': 'hidden field', 'PERMITTYPEABBREVIATION': 'hidden field', 'PERMITNUMBER': 'hidden field', 'PERMITSTATUSTYPEID': 'hidden field', 'PERMITSTATUS': 'hidden field', 'PERMITSTATE': 'hidden field', 'PERMITMINERALS': 'hidden field', 'PERMITPURPOSE': 'hidden field', 'LODGEDATE': 'hidden field', 'APPROVEDATE': 'hidden field', 'EXPIRYDATE': 'hidden field', 'NONCURRENTDATE': 'hidden field', 'AUTHORISEDHOLDERID': 'hidden field', 'AUTHORISEDHOLDERNAME': 'hidden field', 'NATIVETITLECATEGORY': 'hidden field', 'DIVISION': 'hidden field', 'AREA_SUBBLOCKS': 'hidden field', 'NAME': 'hidden field', });
lyr_MEIMajorElectricityInfrastructure_49.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ROUTE_LENG': 'hidden field', 'ANNOTATION': 'hidden field', 'SW_SIZE': 'hidden field', 'TYPE': 'hidden field', 'CONSTRUCTI': 'hidden field', 'LEGACY_ID': 'hidden field', 'LEGACY_FEE': 'hidden field', 'OPERATING_': 'hidden field', 'TR_LINE_ID': 'hidden field', 'GSCH_ANNOT': 'hidden field', 'ECORP_ASSE': 'hidden field', 'SERVICE_ST': 'hidden field', 'ANNOTATI00': 'hidden field', 'REPORTING_': 'hidden field', 'TR_LINE_GC': 'hidden field', 'FEEDER_OP_': 'hidden field', 'FEEDER_O00': 'hidden field', 'DATE_ERECT': 'hidden field', 'VERIFIED': 'hidden field', 'WIND_PRESS': 'hidden field', 'ENERGISED': 'hidden field', 'MEAN_EFFEC': 'hidden field', 'SPECIAL_CO': 'hidden field', 'ZONE_SUBST': 'hidden field', 'PHASE': 'hidden field', 'FEEDER_SEC': 'hidden field', 'MAX_DESIGN': 'hidden field', 'PHASE_CODE': 'hidden field', 'LINE_LENGT': 'hidden field', 'REMARKS': 'hidden field', 'OWNER': 'hidden field', 'NO_CONDUCT': 'hidden field', 'CONSTRUC00': 'hidden field', 'DESCRIPTIO': 'hidden field', 'ANNOTATI01': 'hidden field', 'NBL': 'hidden field', 'CUTTING_AL': 'hidden field', 'GSCH_ANN00': 'hidden field', 'LGA': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_WBWaterwaysSouth_50.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_WBWaterwaysNorth_51.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_STIAStormTideInundationArea_52.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RPAResourceProcessingArea_53.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EASEMENTS_54.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'PURPOSE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SPEncumbrances_55.set('fieldLabels', {'id': 'hidden field', });
lyr_SettlementPatternInset2Childers_56.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SettlementPatternInset3GinGin_57.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_KalkieAshfieldLDA_58.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_BranyanLocalAreaPlan_59.set('fieldLabels', {'id': 'hidden field', });
lyr_HugesandSeaviewBargarraStructurePlan_60.set('fieldLabels', {'id': 'hidden field', });
lyr_CentralCoastalCorridorSouth_61.set('fieldLabels', {'id': 'hidden field', });
lyr_CentralCoastalCorridorNorth_62.set('fieldLabels', {'id': 'hidden field', });
lyr_Suburb_71.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Locality': 'hidden field', 'Post_Code': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LGA_72.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Previous_Council': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Estate_73.set('fieldLabels', {'Estate': 'hidden field', 'Status': 'hidden field', 'Developer': 'hidden field', });
lyr_MajorLandOwner_74.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PARCEL': 'no label', 'Address': 'no label', 'Zoned/Unzoned': 'no label', 'Zoning': 'no label', 'Strategy': 'no label', 'Strat Link': 'no label', 'Overlays': 'no label', 'Gross HA': 'no label', 'NDH': 'no label', 'Lot Yield @ 20dw/HA (350m2)': 'no label', 'VALUE @ 350m2': 'no label', 'Market Value (20%DM)': 'no label', 'Current RLP': 'no label', 'Current OPC': 'no label', 'Market Value (30%DM)': 'no label', 'Market Value (25%DM)': 'no label', 'Market Value (15%DM)': 'no label', 'Market Value (12%DM)': 'no label', 'Market Value (10%DM)': 'no label', 'OWNERSHIP': 'no label', 'Estate Status': 'no label', 'Developer': 'no label', 'Vendor Company': 'no label', 'Vendor Names': 'no label', 'Vendor Address': 'no label', 'Vendor Mobile': 'no label', 'Vendor Email': 'no label', 'Lead Link': 'no label', 'plan_lot': 'no label', 'derm_landuse': 'no label', 'house_no': 'no label', 'street_name': 'no label', 'street_type': 'no label', 'road_name': 'no label', 'locality': 'no label', 'legal_area': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Major Land Owner': 'no label', });
lyr_Unzoned_75.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned/Unzoned': 'hidden field', 'Zoning': 'inline label - always visible', 'Strategy': 'hidden field', 'Strat Link': 'hidden field', 'Overlays': 'inline label - visible with data', 'Gross HA': 'inline label - always visible', 'NDH': 'hidden field', 'Lot Yield @ 20dw/HA (350m2)': 'hidden field', 'VALUE @ 350m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Address': 'hidden field', 'Vendor Mobile': 'hidden field', 'Vendor Email': 'hidden field', 'Lead Link': 'hidden field', 'plan_lot': 'hidden field', 'derm_landuse': 'hidden field', 'house_no': 'hidden field', 'street_name': 'hidden field', 'street_type': 'hidden field', 'road_name': 'hidden field', 'locality': 'hidden field', 'legal_area': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Major Land Owner': 'hidden field', });
lyr_Zoned_76.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned/Unzoned': 'inline label - always visible', 'Zoning': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strat Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 20dw/HA (350m2)': 'inline label - always visible', 'VALUE @ 350m2': 'header label - always visible', 'Market Value (20%DM)': 'inline label - always visible', 'Current RLP': 'inline label - always visible', 'Current OPC': 'inline label - always visible', 'Market Value (30%DM)': 'inline label - always visible', 'Market Value (25%DM)': 'inline label - always visible', 'Market Value (15%DM)': 'inline label - always visible', 'Market Value (12%DM)': 'inline label - always visible', 'Market Value (10%DM)': 'inline label - always visible', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - always visible', 'Developer': 'inline label - always visible', 'Vendor Company': 'inline label - always visible', 'Vendor Names': 'inline label - always visible', 'Vendor Address': 'inline label - always visible', 'Vendor Mobile': 'inline label - always visible', 'Vendor Email': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'plan_lot': 'hidden field', 'derm_landuse': 'hidden field', 'house_no': 'hidden field', 'street_name': 'hidden field', 'street_type': 'hidden field', 'road_name': 'hidden field', 'locality': 'hidden field', 'legal_area': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Major Land Owner': 'hidden field', });
lyr_EstateLabel_77.set('fieldLabels', {'fid': 'hidden field', 'Estate': 'hidden field', 'Status': 'hidden field', 'Developer': 'hidden field', });
lyr_ParcelAttributesLabel_78.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'hidden field', 'Address': 'hidden field', 'full_address': 'hidden field', 'Zoned/Unzoned': 'hidden field', 'Zoning': 'hidden field', 'Strategy': 'hidden field', 'Strat Link': 'hidden field', 'Overlays': 'hidden field', 'Gross HA': 'hidden field', 'NDH': 'hidden field', 'Lot Yield @ 20dw/HA (350m2)': 'hidden field', 'VALUE @ 350m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Address': 'hidden field', 'Vendor Mobile': 'hidden field', 'Vendor Email': 'hidden field', 'Lead Link': 'hidden field', 'plan_lot': 'hidden field', 'derm_landuse': 'hidden field', 'house_no': 'hidden field', 'street_name': 'hidden field', 'street_type': 'hidden field', 'road_name': 'hidden field', 'locality': 'hidden field', 'legal_area': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Major Land Owner': 'hidden field', });
lyr_ParcelAttributesLabel_78.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});