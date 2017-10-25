class NeorApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      objects: [], 
      loaded: false
    }
    this.fetch_neor_objects()
  }

  fetch_neor_objects = () => {
    const key = "RrWh8UT2EHEqbsU26dlFOT2oo7nCnI3NcBgbRCIv";
    const neor_search_url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + this.getDateParam() + "&api_key=" + key;
    fetch(neor_search_url).then(this.parseResponse).then(this.loadNeorData);
  }

  parseResponse = (response) => {
    return response.json();
  }

  loadNeorData = (data) => {
    let objects = []
    for (let day in data.near_earth_objects) {
      let arr = data.near_earth_objects[day];
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        let object = arr[i];
        this.state.objects.push({
          approach_date: day, 
          hazardous: object.is_potentially_hazardous_asteroid,
          speed: Math.round(parseFloat(object.close_approach_data[0].relative_velocity.miles_per_hour)),
          max_diameter: Math.round(parseFloat(object.estimated_diameter.feet.estimated_diameter_max))
        });
      }
    }
    this.state.objects.sort((a,b) => {
        let x = a.approach_date;
        let y = b.approach_date;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    })
    this.setState({
      objects: this.state.objects,
      loaded: true
    });
    console.log(this.state)
  }

  getDateParam() {
    // Based on: https://stackoverflow.com/a/4929629
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if(dd<10) { dd = '0'+dd;} 
    if(mm<10) { mm = '0'+mm;} 
    return yyyy + "-" + mm + "-" + dd;
  }

  render() {
    return ([
      <div class="row justify-content-sm-center">
        <div class="col text-center mt-5">
          <h1>Near-Earth Object Radar</h1>
        </div>
      </div>,
      <div class="row mt-3">
        <div class="col-sm-8 col-md-6 mx-auto col-lg-4 order-lg-2 mt-3">
          <Filters objects={this.state.objects}/>
        </div>
        <div class="col-lg-8 order-lg-1 mx-auto mt-3" style={{"text-align":"center"}}>
          <List objects={this.state.objects}/>
          <kbd> {!this.state.loaded ? "Please wait. Fetching NEOR data from NASA ... " : "Fetched NEOR data!"} </kbd>
        </div>
      </div>
    ]);
  }
}