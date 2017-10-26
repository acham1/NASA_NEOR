class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      objects: props.objects
    }
  }

  render() {
    return (
      <table class="table table-responsive table-striped" style={{display:"table"}}>
        <thead class="thead-inverse">
          <tr>
            <th>Approach Date</th>
            <th>Hazardous?</th>
            <th>Speed (mph)</th>
            <th>Max. Diameter (feet)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.objects.map(x => {return <tr>
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