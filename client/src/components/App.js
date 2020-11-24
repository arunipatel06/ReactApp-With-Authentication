import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import LoginForm from './LoginForm';
import CreateUser from './CreateUser';
import HomePage from '../HomePage';

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
            <Route exact path="/form" component={LoginForm} />
            <Route exact path="/adduser" component={CreateUser} />
            <Route exact path="/homepage" component={HomePage} />
          </ApolloProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
