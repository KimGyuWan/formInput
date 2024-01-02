import React, { useRef } from 'react';
import './App.css';

function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className='form_member'>
      <form action="#none">
        <h2>User Login</h2>
        <ul>
          <li>
            <label htmlFor="email">
              Eamil
            </label>
            <input ref={emailRef} type="text" id='email' required />
          </li>
          <li>
            <label htmlFor="password">
              Password
            </label>
            <input ref={passwordRef} type="text" id='password' required />
          </li>
        </ul>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
