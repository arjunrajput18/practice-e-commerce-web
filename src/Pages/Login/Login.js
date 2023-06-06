import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Sign Up</h1>

      <div style={{margin:"1rem"}}>
        <input placeholder="username" />
      </div>
      <div>
        <input placeholder="password"/>
      </div>
      <button>login</button>
      <button>login Guest</button>
 <NavLink></NavLink>
    </div>
  );
};
