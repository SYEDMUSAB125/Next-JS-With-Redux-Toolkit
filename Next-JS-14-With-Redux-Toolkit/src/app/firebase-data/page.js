"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup ,logout} from "../reduxToolkit/authSlice";


export default function App() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(
    (state) => state.authReducer
  );

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        await dispatch(signup({ email, password })).unwrap();
      } else {
        await dispatch(login({ email, password })).unwrap();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Dashboard
  if (user) {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Email: {user.email}</p>

        <button onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    );
  }

  // Login / Signup
  return (
    <div>
      <h1>{isSignup ? "Signup" : "Login"}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading
            ? "Please wait..."
            : isSignup
            ? "Create Account"
            : "Login"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        {isSignup
          ? "Already have an account?"
          : "Don't have an account?"}

        <button onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Login" : "Signup"}
        </button>
      </p>
    </div>
  );
}