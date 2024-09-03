mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [78.05, 15.83], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
});
console.log(coordinates);

const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates) //listings.geometry.coordinates
        .addTo(map);