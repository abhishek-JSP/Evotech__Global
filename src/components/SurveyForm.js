
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "./SurveyForm.css";

const SurveyForm = () => {
  const initialValues = {
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:3001/posts", values);
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("Error submitting form. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      
      <form className="survey-form" onSubmit={formik.handleSubmit}>
        <Header />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="error">{formik.errors.name}</span>
          )}
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <span className="error">{formik.errors.gender}</span>
          )}
        </label>

        <label>
          Nationality:
          <input
            type="text"
            name="nationality"
            value={formik.values.nationality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nationality && formik.errors.nationality && (
            <span className="error">{formik.errors.nationality}</span>
          )}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className="error">{formik.errors.phone}</span>
          )}
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.address && formik.errors.address && (
            <span className="error">{formik.errors.address}</span>
          )}
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <span className="error">{formik.errors.message}</span>
          )}
        </label>

        <button type="submit">Submit</button>
        <Footer />
      </form>
    </>
  );
};

export default SurveyForm;


