var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lineas_1 = new ol.format.GeoJSON();
var features_Lineas_1 = format_Lineas_1.readFeatures(json_Lineas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_1.addFeatures(features_Lineas_1);
var lyr_Lineas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_1, 
                style: style_Lineas_1,
                popuplayertitle: 'Lineas',
                interactive: true,
                title: '<img src="styles/legend/Lineas_1.png" /> Lineas'
            });
var format_Capellania_2 = new ol.format.GeoJSON();
var features_Capellania_2 = format_Capellania_2.readFeatures(json_Capellania_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capellania_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capellania_2.addFeatures(features_Capellania_2);
var lyr_Capellania_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capellania_2, 
                style: style_Capellania_2,
                popuplayertitle: 'Capellania',
                interactive: true,
                title: '<img src="styles/legend/Capellania_2.png" /> Capellania'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lineas_1.setVisible(true);lyr_Capellania_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lineas_1,lyr_Capellania_2];
lyr_Lineas_1.set('fieldAliases', {'id': 'id', });
lyr_Capellania_2.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Lineas_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Capellania_2.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Lineas_1.set('fieldLabels', {'id': 'no label', });
lyr_Capellania_2.set('fieldLabels', {'id': 'no label', 'Área': 'inline label - visible with data', });
lyr_Capellania_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});