function generarLetra() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

function colorHEX() {
    var coolor = '';
    for (var i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return '#' + coolor;
}
L.mapbox.accessToken = 'pk.eyJ1IjoiZGFuaWVsaXNsYXMzIiwiYSI6ImNrOTU4ZG03djBsMWYzbnFoMGxvaWNicWcifQ.6RYPn_Wv4g1zBpKNm9Xd5w';
let url = 'http://localhost:4000/api/business';
const index = 1
const ejemplo = [-74.0066, 40.7135]
const ejemplo2 = [-80.1066, 35.7135]
const geojson = []

function makePoint(color, cordenadas, map) {
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat(cordenadas)
        .addTo(map)
}

fetch(url)
    .then(res => res.json())
    .then((data) => {
        data.office.forEach(office => {
            geojson.push({
                name: office.name,
                coordinates: [office.lng, office.lat],
                principal: null
            })
        })
    })
    .catch(err => { throw err });

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsaXNsYXMzIiwiYSI6ImNrOTU4ZG03djBsMWYzbnFoMGxvaWNicWcifQ.6RYPn_Wv4g1zBpKNm9Xd5w';

setTimeout(() => {

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: ejemplo,
        zoom: 14,
        pitch: 45,
        bearing: -10,
        antialias: true,

    })
    function buildings3d() {
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }

        map.addLayer(
            {
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );

    }
    map.on('load', buildings3d);
    geojson.forEach(office => {
        console.log('EMFNG')
        makePoint(colorHEX(), office.coordinates, map)
    })   

}, 5000)