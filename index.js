const d3 = require('d3-fetch');

export async function sheets2geojson(sheetsId,  options = {}) {
    options.longitudeColumn = options.longitudeColumn || 'Longitude';
    options.latitudeColumn = options.latitudeColumn || 'Latitude';


    const csvSource = `https://docs.google.com/spreadsheets/d/e/${sheetsId}/pub?gid=0&single=true&output=csv`;

    function toPoints(rows) {
        return {
            type: 'FeatureCollection',
            features: rows.map((row, id) => ({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [+row[options.longitudeColumn], +row[options.latitudeColumn]],
                },
                properties: {
                    id,
                    ...row
                }
            }))
        }
    }

    return toPoints(await d3.csv(csvSource));
}