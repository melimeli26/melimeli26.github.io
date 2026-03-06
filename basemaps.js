// Basemap layers for your map (Geography 54, Dartmouth College)
//
// Feel free to add more basemaps, or delete any you don't like.
// Sources here: https://leaflet-extras.github.io/leaflet-providers/preview/
// 
// If you make changes, be sure to edit the var baseMaps object at the end of this document.



// Basemap #1: Open Street Map
var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Basemap #2: ESRI World Imagery
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Basemap #3: CartoDB Voyager
var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

// Basemap #4: CartoDB Positron
var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

// Blank basemap (no content - this is handy for cases where the user only wants to look at the overlays)
var Blank_Basemap = L.layerGroup();

//
// Note: you can add additional basemaps from here: 
//      https://leaflet-extras.github.io/leaflet-providers/preview/
// End of list of basemap variables and sources ...
//


// A JavaScript object listing all four basemaps, for use in Layer Control
// You can remove any that you don't want to use in your map.
// If you add links to other basemaps above, be sure to list them here as well 
var baseMaps = {
    "OSM Streets": OpenStreetMap_Mapnik,
    "ESRI Imagery": Esri_WorldImagery,
    "CartoDB Voyager": CartoDB_Voyager,
    "CartoDB Positron": CartoDB_Positron,
    "No basemap": Blank_Basemap
};