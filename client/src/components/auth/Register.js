import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Register = ({ auth, registerUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <p className="error"> {auth.user?.error} </p>
        <h3>Register</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} type="text" placeholder="Name" /> <br />
          <p className="error"> {errors["name"]?.message} </p>
          <input {...register("email")} placeholder="Email" /> <br />
          <p className="error">{errors["email"]?.message}</p>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          <p className="error">{errors["password"]?.message}</p>
          <button>Register</button>
          <p>
            Already have an account ?{" "}
            <span>
              {" "}
              <Link to="/">Login</Link>{" "}
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

export default connect(mapStateToProps, { registerUser })(Register);
