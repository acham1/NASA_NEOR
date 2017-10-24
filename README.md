1. [10 pts] Show a list of all expected NEOs over the next 7 days.
2. [4 pts] Let the user select "Hazardous Only" checkbox to filter the list
3. [4 pts] Let the user filter by minimum incoming speed (0 - 60,000 mph in increments of 1000).  The default setting should be 0.
3. [2 pts] Highlight hazardous objects in the list when the "Hazardous Only" checkbox is not selected.  (When the "Hazardous Only" checkbox is selected, do not highlight them, since all rows already indicate hazardous objects.)

Important Notes/Requirements:

* Your grade is partly based on your code clarity and demonstrated proficiency in your chosen framework.
* Our specific API is [documented here](https://api.nasa.gov/api.html#NeoWS).
* You may use plain JavaScript, jQuery, or React.
* Be sure to use the proper date in your API query, not the hardcoded URL given above.


### API Key
`https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-12&api_key=RrWh8UT2EHEqbsU26dlFOT2oo7nCnI3NcBgbRCIv`

### Setup

```
python -m SimpleHTTPServer
```