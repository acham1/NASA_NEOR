class Filters extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      min_speed: 0,
      hazardous_only: false,
      update_list: props.update_list
    }
  }

  // set the "speed_ok" field in each near-earth object and tell parent to update state
  // i.e. 'speed_ok' := passes speed filter
  handleSliderMoved = () => {
    // minimum passable speed
    let min = document.getElementById("slider").value;
    let objects = this.props.objects;
    for (let i = 0; i < objects.length; i++) {
      objects[i].speed_ok = objects[i].speed >= min;
    }
    this.setState({min_speed: min}, () => {
      this.state.update_list({})
    });
  }

  // set the "hazard_ok" field in each near-earth object and tell parent to update state
  // i.e. 'hazard_ok' := passes hazard filter, or hazard filter is not on
  handleCheckboxToggled = () => {
    // check if objects should be limited to hazardous ones
    let limit = document.getElementById("check").checked;
    let objects = this.props.objects;
    for (let i = 0; i < objects.length; i++) {
      objects[i].hazard_ok = objects[i].hazardous || !limit;
    }
    this.setState({hazardous_only:limit}, () => {
      this.state.update_list({hazardous_only: limit})
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Filter By:
        </div>
        <div className="card-body">
          Minimum speed: <code>{this.numberWithCommas(this.state.min_speed)}</code> mph
          <input onChange={this.handleSliderMoved} type="range" id="slider" step="1000" min="0" max="60000" value={this.state.min_speed} style={{width: "100%"}}/> <br/>
          <hr/>
          <div className="form-check">
            <label className="form-check-label">
              <input onChange={this.handleCheckboxToggled} type="checkbox" className="form-check-input" id="check" checked={this.state.hazardous_only}/> Hazardous objects only
            </label>
          </div>
          <hr/>
          <code>{this.countValid()}</code> of {this.props.objects.length} objects shown.
        </div>
      </div>
  )}

  // return a formatted string, showing number with commas
  // x: integer
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // count the number of valid objects (passing filters) in table
  countValid = () => {
    let count = this.props.objects.filter((x) => {return x.speed_ok && x.hazard_ok}).length;
    return count;
  }

}