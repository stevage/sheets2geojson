## sheets2geojson

Purpose: fetches a single published Google Sheet and converts it to a GeoJSON of points.

To prepare the Google Sheet:

1. Format it with a Latitude and Longitude column, plus any other columns
2. Under File, select "Publish to Web", then publish as CSV.
3. Copy the URL, and keep just the ID part (no slashes, just letters and numbers)

To call:

```js
import { sheets2geojson } from 'sheets2geojson';
const geojson = await sheets2geojson(id, ?{ latitudeColumn: 'lat', longitudeColumn: 'lng' });
```
