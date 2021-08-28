import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { route } from "../../../../common/config/routes/routesName";
import {
  authButtonStyle,
  ButtonForm,
} from "../../../../components/ButtonForm/ButtonForm";
import {
  InputForm,
  normalInputStyle,
} from "../../../../components/InputForm/InputForm";
import { authServices } from "../../../../services/authServices";
import {
  iNewPWCheck,
  validatePWObj,
  validatePWSchema,
} from "../../authValidateObj";
import { iMatchProps } from "../../registration/Phase2/SignUpSuccess";
import "./PWRecoreNEWPW.scss";

export const PWRecoverNewPW: React.FunctionComponent<iMatchProps> = ({
  match,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const [err, setErr] = useState<string>("");
  const token = match.params.token;

  const handleSubmitNewPassword = async (Props: iNewPWCheck) => {
    try {
      setLoading(true);
      const passwordSend = {
        password: Props.password,
      };
      const data = await authServices.pwrecovery_confirm(passwordSend, token);
      history.push(route.PWRECOVER_SUCCESS);
    } catch (error) {
      setErr(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
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
            const inputData: iNewPWCheck = {
              password: values.password.trim(),
              passwordConfirm: values.passwordConfirm.trim(),
            };
            handleSubmitNewPassword(inputData);
            console.log("ok");
            setSubmitting(false);
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
              <ButtonForm
                isLoading={loading}
                buttonName="Xác nhận"
                styling={authButtonStyle}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
