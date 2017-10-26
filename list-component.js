class List extends React.Component {

  render() {
    return (
      <table className="table table-responsive table-sm table-hover" style={{display:"table"}}>
        <thead className="thead-inverse">
          <tr>
            <th>Approach Date</th>
            <th>Hazardous?</th>
            <th>Speed (mph)</th>
            <th>Max. Diameter (feet)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.objects.map(x => {return this.makeRow(x);})}
        </tbody>
      </table>
  )}

  // return a formatted string, showing number with commas
  // x: integer
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // return a <tr> element in the row
  // x: near-earth object
  makeRow = (x) => {
    // highlight row if object is hazardous and hazard filters are off
    let cls = x.hazardous && !this.props.hazardous_only ? "table-danger" : "";
    // display only if object passes filters
    let style = {display: x.speed_ok && x.hazard_ok ? "table-row" : "none"};
    return <tr className={cls} style={style}>
              <td> {x.approach_date} </td> 
              <td> {x.hazardous ? "Yes" : "No"} </td>
              <td> {this.numberWithCommas(x.speed)} </td>
              <td> {this.numberWithCommas(x.max_diameter)} </td>
            </tr>
  }

}