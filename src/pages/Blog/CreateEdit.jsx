import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container } from "react-bootstrap";
import * as Yup from "yup";
import { useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/slices/blogSlice";

const SchemaBlog = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

const CreateEdit = () => {
  const match = useMatch("blogs/:blogId/edit");
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.blog.detail);

  const [form, setForm] = useState({
    image: "",
    title: "",
    content: "",
  });

  const onSubmit = (values) => {
    console.log("click Submit form", values);
  };

  useEffect(() => {
    if (!match) return;
    const { params } = match;
    dispatch(getDetail({ id: params.blogId }));
  }, []);
  useEffect(() => {
    if (detail.id) {
      setForm(detail);
    }
  }, [detail]);
  return (
    <Container>
      <Formik
        enableReinitialize
        initialValues={form}
        onSubmit={onSubmit}
        validationSchema={SchemaBlog}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field
                id="title"
                name="title"
                className={`form-control ${errors.title && touched.title ? " is-invalid" : ""}`}
                type="text"
              />
              <ErrorMessage name="title" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Field
                id="content"
                name="content"
                className={`form-control ${errors.content && touched.content ? " is-invalid" : ""}`}
                type="text"
              />
              <ErrorMessage name="content" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group mt-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default CreateEdit;
