import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { route } from "../../../common/config/routes/routesName";
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
  authReplyMessageModalStyle,
  ModalHelper,
} from "../../../components/ModalForm/ModalHelper";
import { AuthNotification } from "../../../components/NotificationForm/Notification";
import { authServices } from "../../../services/authServices";
import { iPWRecover_P1 } from "../../../services/authTypes";
import {
  DECORIMG,
  LOGOLOGING,
  PWRECOVERIMG,
  validateEmailObj,
  validateEmailSchema,
} from "../authValidateObj";
import "./PWRecover.scss";

export const PWRecover: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const hanldeSubmitPWRecoverForm = async (Props: iPWRecover_P1) => {
    const infoObj = {
      username: Props.username,
      email: Props.email,
    };
    try {
      setLoading(true);
      const data = await authServices.pwrecovery_unconfirm(infoObj);
      console.log(data);
      setSuccessMessage(data.message);
      setModalOpen(true);
    } catch (error) {
      setErr(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      outerImg={DECORIMG}
      centeredImg={PWRECOVERIMG}
      title="PASSWORD RECOVER"
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
        initialValues={validateEmailObj}
        validationSchema={validateEmailSchema}
        onSubmit={(values, { setSubmitting }) => {
          const inputData: iPWRecover_P1 = {
            username: values.username.trim(),
            email: values.email.trim(),
          };
          hanldeSubmitPWRecoverForm(inputData);
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

            <ButtonForm
              isLoading={loading}
              buttonName="Gửi xác nhận"
              styling={authButtonStyle}
            />
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
