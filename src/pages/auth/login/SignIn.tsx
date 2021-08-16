import React from "react";
import { Formik } from "formik";
import {
  InputForm,
  normalInputStyle,
} from "../../../components/InputForm/InputForm";
import { useState } from "react";
import {
  authButtonStyle,
  ButtonForm,
} from "../../../components/ButtonForm/ButtonForm";
import {
  validateSignInObject,
  validateSignInSchema,
  LOGINIMG,
  LOGOLOGING,
  DECORIMG,
} from "../authValidateObj";
import { AuthForm } from "../../../components/AuthForm/AuthForm";

export const SignIn: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AuthForm
      outerImg={DECORIMG}
      centeredImg={LOGINIMG}
      title="WELCOME"
      logo={LOGOLOGING}
    >
      <Formik
        initialValues={validateSignInObject}
        validationSchema={validateSignInSchema}
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
              label="Tên đăng nhập"
              type="text"
              value={formik.values.username}
              name="username"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              styling={normalInputStyle}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <InputForm
              label="Mật Khẩu"
              type="password"
              value={formik.values.password}
              name="password"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              styling={normalInputStyle}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <ButtonForm
              buttonName="Đăng nhập"
              styling={authButtonStyle}
              isLoading={loading}
            />
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
