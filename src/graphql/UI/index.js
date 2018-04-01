import GET_APP_STATE from './GET_APP_STATE';

const defaults = {
  appState: {
      __typename: "AppState",
      sidenav: "full",          //  full, toggled
      country: "Singapore",     //  countries 
      theme: "light"            //  light, dark
  }
}

const resolvers = {
  Mutation: {
    updateAppState: (_, { index, value }, { cache }) => {
      const query = GET_APP_STATE
      const previous = cache.readQuery({ query })
      const data = {
        appState: {
          ...previous.appState,
          [index]: value
        }
      }
      cache.writeQuery({ query, data })
      return data.appState
    },
    resetAppState: (_, d, { cache }) => {
      cache.writeData({ data: defaults })
    }
  },
}

export {resolvers, defaults}