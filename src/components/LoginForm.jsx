import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function LoginForm({ onLogin }) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <>
    <div className="login-container">

    <h1>Log In</h1>

    <form
      onSubmit={(e) => {
        onLogin(e, {
          email: emailValue,
          password: passwordValue,
        });
      }}
    >
      <div class="form-field">
      <label htmlFor="email"></label>
      <input
        name="email"
        id="email"
        type="text"
        placeholder="Email"
        required
        onChange={(e) => setEmailValue(e.target.value)}
      />
      </div>

      <div class="form-field">
      <label htmlFor="password"></label>
      <input
        name="password"
        id="password"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      </div>

      <div class="form-field">
      <Button variant="danger" type="submit">Log In</Button>
      </div>

    </form>
    </div>
    </>
  );
}
