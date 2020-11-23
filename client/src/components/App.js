import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
// import ExchangeRates from "./ExchangeRates";
import { ApolloClient, InMemoryCache } from '@apollo/client';

import './App.css';
import UserList from './Form_Practice/UserList';
import VehicleData from './VehicleData';
import Practice from './Practice';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Route exact path="/userlist" component={UserList} />
            {/* <Route path="/vehicle/:id" component={ExchangeRates} /> */}
            <Route path="/data/:id" component={VehicleData} />
            <Route path="/info/:id" component={Practice} />
          </ApolloProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
