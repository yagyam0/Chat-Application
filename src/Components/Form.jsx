import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../Schemas/signupSchema";
import { loginSchema } from "../Schemas/loginSchema";
import Button from "./Button";
import Input from "./Input";

const signUpInitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

const Form = ({ type }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues:
        type === "SignUp" ? signUpInitialValues : loginInitialValues,
      validationSchema: type === "SignUp" ? signupSchema : loginSchema,
      onSubmit: (values, action) => {
        console.log("data", values);
        action.resetForm();
      },
    });

  return (
    <div className="container center-container">
      <form className="form-wrap" onSubmit={handleSubmit}>
        <p className="form-label"> {type} </p>
        {type === "SignUp" && (
          <div className="input-block">
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={values.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="form-errors"> {errors.name} </p>
            )}
          </div>
        )}
        <div className="input-block">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="form-errors"> {errors.email} </p>
          )}
        </div>
        <div className="input-block d-flex flex-column">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="form-errors"> {errors.password} </p>
          )}
        </div>
        {type === "SignUp" && (
          <div className="input-block">
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="form-errors"> {errors.confirmPassword} </p>
            )}
          </div>
        )}
        {type === "SignUp" && (
          <div className="modal-buttons d-flex justify-content-between align-items-center">
            <span>
              Already have an account?{" "}
              <a href="/#" className="sign-in">
                {" "}
                Sign In Now{" "}
              </a>
            </span>
            <Button type="submit" label="Register" />
          </div>
        )}
        <div className="forgot-txt">
            <span> Forgot password? </span>
        </div>
        {type === 'Login' && <Button type='Submit' label='Login' />}
      </form>
    </div>
  );
};

export default Form;
