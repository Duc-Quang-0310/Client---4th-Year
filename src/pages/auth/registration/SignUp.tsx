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
  iSignUpObject,
} from "../authValidateObj";
import { AuthForm } from "../../../components/AuthForm/AuthForm";
import { useState } from "react";
import { authServices } from "../../../services/authServices";
import {
  authReplyMessageModalStyle,
  ModalHelper,
} from "../../../components/ModalForm/ModalHelper";
import { route } from "../../../common/config/routes/routesName";
import { AuthNotification } from "../../../components/NotificationForm/Notification";

//

export const SignUp: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const hanldeSubmitSignUpForm = async (Props: iSignUpObject) => {
    const infoObj = {
      username: Props.username,
      email: Props.email.toLowerCase(),
      password: Props.password,
    };
    try {
      setLoading(true);
      const data = await authServices.register_unconfirm(infoObj);
      setSuccessMessage(data.message);
      setModalOpen(true);
      console.log(data);
    } catch (error) {
      setErr(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(loading);

  return (
    <AuthForm
      outerImg={DECORIMG}
      centeredImg={SIGNUPIMG}
      title="JOIN IN"
      logo={LOGOLOGING}
      err={err}
    >
      {modalOpen && (
        <ModalHelper openCheck={modalOpen} styling={authReplyMessageModalStyle}>
          <AuthNotification
            message={successMessage}
            imgLink="/img/mailSend.svg"
            redirectTitle="Về đăng nhập"
            redirectToAdress={route.SIGNIN}
          />
        </ModalHelper>
      )}

      <Formik
        initialValues={validateSignUpObject}
        validationSchema={validateSignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          const inputData: iSignUpObject = {
            username: values.username.trim(),
            email: values.email.trim(),
            password: values.password.trim(),
            passwordConfirm: values.passwordConfirm.trim(),
          };
          hanldeSubmitSignUpForm(inputData);
          setSubmitting(false);
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
            <ButtonForm
              isLoading={loading}
              buttonName="Đăng ký"
              styling={authButtonStyle}
            />
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
