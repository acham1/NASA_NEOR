class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      objects: props.objects,
      min_speed: 0,
      hazardous_only: false,
      update_list: props.update_list
    }
  }

  handleSliderMoved = () => {
    let min = document.getElementById("slider").value;
    let objects = this.state.objects;
    for (let i = 0; i < objects.length; i++) {
      objects[i].speed_ok = objects[i].speed >= min;
    }
    this.setState({min_speed: min});
    this.state.update_list();
  }

  handleCheckboxToggled = () => {
    let limit = document.getElementById("check").checked;
    let objects = this.state.objects;
    for (let i = 0; i < objects.length; i++) {
      objects[i].hazard_ok = objects[i].hazardous || !limit;
    }
    this.setState({hazardous_only:!this.state.hazardous_only});
    this.state.update_list();
  }

  render() {
    return (
      <div class="card">
        <div class="card-header">
          Filter By:
        </div>
        <div class="card-body">
          Minimum speed: <code>{this.numberWithCommas(this.state.min_speed)}</code> mph
          <input onChange={this.handleSliderMoved} type="range" id="slider" step="1000" min="0" max="60000" value={this.state.min_speed} style={{width: "100%"}}/> <br/>
          <hr/>
          <div class="form-check">
            <label class="form-check-label">
              <input onChange={this.handleCheckboxToggled} type="checkbox" class="form-check-input" id="check" checked={this.state.hazardous_only}/> Hazardous objects only
            </label>
          </div>
          <hr/>
          <code>{this.countValid()}</code> of {this.state.objects.length} objects shown.
        </div>
      </div>
  )}

  numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  countValid = () => {
    let count = this.state.objects.filter((x) => {return x.speed_ok && x.hazard_ok}).length;
    return count;
  }

}