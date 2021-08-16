import { Formik } from "formik";
import React from "react";
import {
  authButtonStyle,
  ButtonForm,
} from "../../../../components/ButtonForm/ButtonForm";
import {
  InputForm,
  normalInputStyle,
} from "../../../../components/InputForm/InputForm";
import { validatePWObj, validatePWSchema } from "../../authValidateObj";
import "./PWRecoreNEWPW.scss";

export const PWRecoverNewPW: React.FunctionComponent = () => {
  return (
    <div className="form-container ">
      <div>
        <img className="background-img" src="/img/lightHouse.svg" alt="" />
        <img className="sun-img" src="/img/sun.svg" alt="" />
      </div>

      <div className="form-pwrecover">
        <Formik
          initialValues={validatePWObj}
          validationSchema={validatePWSchema}
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
              <h1>PASSWORD RECOVER </h1>
              <InputForm
                label="Mật khẩu"
                type="password"
                value={formik.values.password}
                name="password"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                styling={normalInputStyle}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                variant="outlined"
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
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm
                }
                variant="outlined"
              />
              <ButtonForm buttonName="Xác nhận" styling={authButtonStyle} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
