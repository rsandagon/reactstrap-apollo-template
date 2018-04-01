import './assets/css/main.css';
import './assets/css/sidebar/sidebar.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { CachePersistor } from "apollo-cache-persist"
import { defaults, resolvers } from './graphql/UI';


const cache = new InMemoryCache({
  logger: console.log,
  loggerEnabled: true,
});

const persistor = new CachePersistor({
  cache,
  storage: window.sessionStorage,
  debug: true,
})

const stateLink = withClientState({ resolvers, cache, defaults });

const link = ApolloLink.from([
  stateLink
]);

const client = new ApolloClient({ cache, link })

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restored: false,
    }
  }

  componentDidMount() {
    persistor.restore()
      .then(() => this.setState({ restored: true }))
  }

  render() {
    let content = null
    if (!this.state.restored) {
      content = <div>Loading</div>
    } else {
      content = (
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Route path="" component={App} />
          </BrowserRouter>
        </ApolloProvider>
      )
    }

    return content
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById("root"),
)
