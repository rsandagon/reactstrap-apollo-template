import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import SideBar from './container/SideBar';
import TopBar from './container/TopBar';
import GET_APP_STATE from './graphql/UI/GET_APP_STATE';
import DashboardContainer from './container/DashboardContainer';
import ChartContainer from './container/ChartContainer';
import TableContainer from './container/TableContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

      <Query query={GET_APP_STATE}>

        {({ loading, error, data: { appState: { sidenav } } }) => {
          if (loading) return <span className="text-warning">Loading</span>
          if (error) return <span className="text-danger">Error</span>
          return (
            <div className={`main fixed-nav bg-light sidenav-${sidenav}`}>
              <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top' id="mainNav">
                <a className="navbar-brand " href="/">
                  REACT BOARD
                </a>
                <button onClick={this.toggle} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${this.state.dropdownOpen ? 'show':''}`} id="navbarResponsive">
                  <SideBar />
                  <TopBar />
                </div>
              </nav>
              <div className='content-wrapper'>
                <div className="container-fluid">
                  <Switch>
                    <Route exact path="/" component={DashboardContainer} />
                    <Route exact path="/dashboard" component={DashboardContainer} />
                    <Route path="/chart" component={ChartContainer} />
                    <Route path="/table" component={TableContainer} />
                  </Switch>
                </div>
              </div>
              <a className="scroll-to-top rounded" href="#page-top">
                <i className="fa fa-angle-up"></i>
              </a>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default App;