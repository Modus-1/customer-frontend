// import fontAwesome from "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";

function LandingPage() {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="container bootstrap snippets bootdey">
        <div className="col-md-12">
          <h2 className="text-primary">
            <i className="fa fa-tachometer"></i>
            Home menu
          </h2>
          <hr>
            <div className="row">
              <div className="col-md-3">
                <div className="panel panel-info ">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-6">
                        <i className="fa fa-calculator fa-5x"></i>
                      </div>
                      <div className="col-xs-6 text-right">
                        <p className="announcement-heading">&nbsp;</p>
                        <p className="announcement-text">Math</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel-footer announcement-bottom">
                    <div className="row">
                      <div className="col-xs-6">View</div>
                      <div className="col-xs-6 text-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="panel panel-success ">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-6">
                        <i className="fa fa-leanpub fa-5x"></i>
                      </div>
                      <div className="col-xs-6 text-right">
                        <p className="announcement-heading">&nbsp;</p>
                        <p className="announcement-text">Language</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel-footer announcement-bottom">
                    <div className="row">
                      <div className="col-xs-6">View</div>
                      <div className="col-xs-6 text-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="panel panel-warning ">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-6">
                        <i className="fa fa-flask fa-5x"></i>
                      </div>
                      <div className="col-xs-6 text-right">
                        <p className="announcement-heading">&nbsp;</p>
                        <p className="announcement-text">Science</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer announcement-bottom">
                    <div className="row">
                      <div className="col-xs-6">View</div>
                      <div className="col-xs-6 text-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="panel panel-danger ">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-6">
                        <i className="fa fa-video-camera fa-5x"></i>
                      </div>
                      <div className="col-xs-6 text-right">
                        <p className="announcement-heading">&nbsp;</p>
                        <p className="announcement-text">Video</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer announcement-bottom">
                    <div className="row">
                      <div className="col-xs-6">View</div>
                      <div className="col-xs-6 text-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </hr>
        </div>
      </div>
      <div className="col-md-12">
        <div className="container bootstrap snippets bootdey">
          <footer className="footer">
            <hr />
            <p>&copy; Company name 2015</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
