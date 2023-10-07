import React , { useEffect } from 'react'
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../features/auth/authSlice";
import Spinner from './Spinner';

let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });
const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(signup(values));
      },
    });
    const authState = useSelector((state) => state);
  
    const { user, isError, isSuccess, isLoading, message } = authState.auth;
  
    useEffect(() => {
      if (isSuccess) {
        navigate("admin");
      } else {
        navigate("");
      }
    }, [user, isError, isSuccess, isLoading]);
    return (
        <>
            {!isLoading && (
        <Spinner />
      )}
      <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
        <div className="my-5 signup bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center title">Sign Up</h3>
          <p className="text-center">Sign up to your account to continue.</p>
          <div className="error text-center">
            {message.message == "Rejected" ? "You are not an Admin" : ""}
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="First Name"
              id="firstname"
              name="firstname"
              onChng={formik.handleChange("firstname")}
              onBlr={formik.handleBlur("firstname")}
              val={formik.values.firstname}
            />
            <CustomInput
              type="text"
              label="Last Name"
              id="lastname"
              name="lastname"
              onChng={formik.handleChange("lastname")}
              onBlr={formik.handleBlur("lastname")}
              val={formik.values.lastname}
            />
            <CustomInput
              type="text"
              label="Email Address"
              id="email"
              name="email"
              onChng={formik.handleChange("email")}
              onBlr={formik.handleBlur("email")}
              val={formik.values.email}
            />
            <div className="error mt-2">
              {formik.touched.email && formik.errors.email}
            </div>
            <CustomInput
              type="password"
              label="Password"
              id="pass"
              name="password"
              onChng={formik.handleChange("password")}
              onBlr={formik.handleBlur("password")}
              val={formik.values.password}
            />
            <div className="error mt-2">
              {formik.touched.password && formik.errors.password}
            </div>
            <CustomInput
              type="tel"
              label="Mobile"
              id="mobile"
              name="mobile"
              onChng={formik.handleChange("mobile")}
              onBlr={formik.handleBlur("mobile")}
              val={formik.values.mobile}
            /><CustomInput
              type="text"
              label="Address"
              id="address"
              name="address"
              onChng={formik.handleChange("address")}
              onBlr={formik.handleBlur("address")}
              val={formik.values.address}
            />
            <div className="mb-3 text-end">
            <Link to="/" className="">
              Already have an account?
            </Link>
          </div>
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </>
    )
}

export default Signup
