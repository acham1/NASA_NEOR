class Filters extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="card">
        <div class="card-header">
          Filter By:
        </div>
        <div class="card-body">
          Minimum speed: <code>{this.numberWithCommas(60000)}</code> mph
          <input type="range" id="slider" step="1000" min="0" max="60000" style={{width: "100%"}}/> <br/>
          <hr/>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" id="check"/> Hazardous objects only
            </label>
          </div>
          <hr/>
          <code>87</code> of 87 objects shown.
        </div>
      </div>
  )}

  numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}