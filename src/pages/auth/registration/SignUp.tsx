import React from "react";
import "./SignUp.scss";
import { Formik } from "formik";
import {
  InputForm,
  normalInputStyle,
} from "../../../components/InputForm/InputForm";
import {
  authButtonStyle,
  ButtonForm,
} from "../../../components/ButtonForm/ButtonForm";
import {
  DECORIMG,
  SIGNUPIMG,
  validateSignUpObject,
  validateSignUpSchema,
  LOGOLOGING,
} from "../authValidateObj";
import { AuthForm } from "../../../components/AuthForm/AuthForm";

export const SignUp: React.FunctionComponent = () => {
  return (
    <AuthForm
      outerImg={DECORIMG}
      centeredImg={SIGNUPIMG}
      title="JOIN IN"
      logo={LOGOLOGING}
    >
      <Formik
        initialValues={validateSignUpObject}
        validationSchema={validateSignUpSchema}
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
            <InputForm
              label="Xác nhận mật khẩu"
              type="password"
              value={formik.values.passwordConfirm}
              name="passwordConfirm"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              styling={normalInputStyle}
              error={
                formik.touched.passwordConfirm &&
                Boolean(formik.errors.passwordConfirm)
              }
              helperText={
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
              }
            />
            <ButtonForm buttonName="Đăng ký" styling={authButtonStyle} />
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
