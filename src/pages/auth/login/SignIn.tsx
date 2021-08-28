import React from "react";
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
  validateSignInObject,
  validateSignInSchema,
  LOGINIMG,
  LOGOLOGING,
  DECORIMG,
} from "../authValidateObj";
import { AuthForm } from "../../../components/AuthForm/AuthForm";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../reduxToolKit-Saga/hooks";
import { iLoginParams } from "../../../services/authTypes";
import { login } from "../../../reduxToolKit-Saga/Auth/AuthSlice";
import { useState } from "react";
import { RootState } from "../../../reduxToolKit-Saga/store";

export const SignIn: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [firstCheckout, setFirstCheckout] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const errMessage: string = useAppSelector(
    (state: RootState) => state.auth.loggingMessage
  );

  console.log(" errMessage", errMessage);

  const handleLoginSubmit = (props: iLoginParams): void => {
    setFirstCheckout(true);
    try {
      setLoading(true);
      dispatch(login(props));
    } catch (error) {
      setErr("Đã có lỗi xảy ra xin vui lòng thử lại sau");
    } finally {
      setLoading(false);
    }
  };

  function handleError() {
    if (errMessage !== "") {
      return errMessage;
    } else if (err) {
      return err;
    }
    return undefined;
  }

  return (
    <AuthForm
      outerImg={DECORIMG}
      centeredImg={LOGINIMG}
      title="WELCOME"
      logo={LOGOLOGING}
      err={firstCheckout ? handleError() : undefined}
    >
      <Formik
        initialValues={validateSignInObject}
        validationSchema={validateSignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          const inputData: iLoginParams = {
            username: values.username,
            password: values.password,
          };
          handleLoginSubmit(inputData);
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
              isLoading={loading}
              buttonName="Đăng nhập"
              styling={authButtonStyle}
            />
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
