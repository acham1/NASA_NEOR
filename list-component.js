class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      objects: props.objects,
      hazardous_only: props.hazardous_only
    }
  }

  render() {
    console.log("list " + this.state.hazardous_only);
    return (
      <table class="table table-responsive table-sm table-hover" style={{display:"table"}}>
        <thead class="thead-inverse">
          <tr>
            <th>Approach Date</th>
            <th>Hazardous?</th>
            <th>Speed (mph)</th>
            <th>Max. Diameter (feet)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.objects.map(x => {return <tr class={x.hazardous && !this.props.hazardous_only ? "table-danger" : ""} style={{display: x.speed_ok && x.hazard_ok ? "table-row" : "none"}}>
              <td> {x.approach_date} </td> 
              <td> {x.hazardous ? "Yes" : "No"} </td>
              <td> {this.numberWithCommas(x.speed)} </td>
              <td> {this.numberWithCommas(x.max_diameter)} </td>
            </tr>
          })}
        </tbody>
      </table>
  )}

  numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}