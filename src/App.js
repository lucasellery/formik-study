import "./styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "./schema";

export default function App() {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        validateOnMount
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          email: ""
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="name" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />{" "}
              {errors.email && touched.email && <span>{errors.email}</span>}
            </div>

            <button type="submit" disabled={!isValid}>
              Send
            </button>
          </Form>
        )}
      />
    </div>
  );
}
