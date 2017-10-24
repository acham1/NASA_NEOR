class NeorApp extends React.Component {
  render() {
    return ([
      <div class="row justify-content-sm-center">
        <div class="col text-center mt-5">
          <h1>Near-Earth Object Radar</h1>
        </div>
      </div>,
      <div class="row mt-3">
        <div class="col-sm-8 col-md-6 mx-auto col-lg-4 order-lg-2 mt-3">
          <Filters />
        </div>
        <div class="col-sm-12 col-lg-8 order-lg-1 mx-auto mt-3">
          <List />
        </div>
      </div>
    ]);
  }
}