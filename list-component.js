class List extends React.Component {

  render() {
    return ([
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
          <tr>
            <td>2017-10-20</td>
            <td>No</td>
            <td>15,267</td>
            <td>250</td>
          </tr>
        </tbody>
      </table>
  ])}
}