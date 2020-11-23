import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADDUSER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      accountId
    }
  }
`;

function CreateUser(props) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [addUserInfo, setUserInfo] = useState('');

  const setUsername = (evt) => {
    setusername(evt.target.value);
  };
  const setPassword = (evt) => {
    setpassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUserInfo({
      username,
      password,
    });
    setusername('');
    setpassword('');
  };

  const [runQuery, { loading, error, data }] = useMutation(ADDUSER, {
    variables: {
      username: addUserInfo.username,
      password: addUserInfo.password,
    },
  });

  useEffect(() => {
    if (Object.keys(addUserInfo).length === 0) return;
    console.log('addUserInfo', addUserInfo);
    runQuery();
  }, [addUserInfo]);

  if (data) console.log('dataa', data);

  return (
    <div>
      <div>
        {data ? (
          data.createUser.accountId ? (
            <p>Sign Up Successful</p>
          ) : (
            <p>Sign Up Failed</p>
          )
        ) : (
          <p>Please Sign Up</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username "
            onChange={setUsername}
          ></input>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={setPassword}
          ></input>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
