import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const ISLOGIN = gql`
  query signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      isMatch
    }
  }
`;

function LoginForm(props) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [LoginInfo, setLoginInfo] = useState('');

  const setUsername = (evt) => {
    setusername(evt.target.value);
  };
  const setPassword = (evt) => {
    setpassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoginInfo({
      username,
      password,
    });
    setusername('');
    setpassword('');
  };

  const [runQuery, { loading, error, data }] = useLazyQuery(ISLOGIN, {
    variables: {
      username: LoginInfo.username,
      password: LoginInfo.password,
    },
  });

  useEffect(() => {
    if (Object.keys(LoginInfo).length === 0) return;
    console.log('loginInfo', LoginInfo);
    runQuery();
  }, [LoginInfo]);

  if (data) console.log('dataa', data);

  return (
    <div>
      <div>
        {data ? (
          data.signIn.isMatch ? (
            <p>Login Successful</p>
          ) : (
            <p>Login Failed</p>
          )
        ) : (
          <p>Please Login</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            label="Username"
            value={username}
            placeholder="Enter Username"
            onChange={setUsername}
          ></input>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={setPassword}
          ></input>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
