import { Formik } from "formik";
import React from "react";
import { AuthForm } from "../../../components/AuthForm/AuthForm";
import {
  authButtonStyle,
  ButtonForm,
} from "../../../components/ButtonForm/ButtonForm";
import {
  InputForm,
  normalInputStyle,
} from "../../../components/InputForm/InputForm";
import {
  DECORIMG,
  LOGOLOGING,
  PWRECOVERIMG,
  validateEmailObj,
  validateEmailSchema,
} from "../authValidateObj";
import "./PWRecover.scss";

export const PWRecover: React.FunctionComponent = () => {
  return (
    <AuthForm
      outerImg={DECORIMG}
      centeredImg={PWRECOVERIMG}
      title="PASSWORD RECOVER"
      logo={LOGOLOGING}
    >
      <Formik
        initialValues={validateEmailObj}
        validationSchema={validateEmailSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputForm
              label="Email"
              type="email"
              value={formik.values.email}
              name="email"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              styling={normalInputStyle}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <ButtonForm buttonName="Gửi xác nhận" styling={authButtonStyle} />
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
