import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = ({ auth, loginUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <p className="error">{auth?.errors?.error}</p>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Email" /> <br />
          <p className="error">{errors["email"]?.message}</p>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          <p className="error">{errors["password"]?.message}</p>
          <button>Login</button>
          <p>
            Don't have an account ?{" "}
            <span>
              {" "}
              <Link to="/register">Register</Link>{" "}
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
