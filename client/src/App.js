import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import HomePage from './components/Home/HomePage';

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
            <Route exact path="/" component={HomePage} />
          </ApolloProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
