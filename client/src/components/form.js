function form() {
    const 
    
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
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
  );
}
