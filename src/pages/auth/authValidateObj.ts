import * as Yup from "yup";

export const DECORIMG = "/img/wave.svg"


//Sign - In
export const validateSignInObject = {
    username: "",
    password: "",
};

export const LOGINIMG = "/img/login.svg"
export const LOGOLOGING = "/img/profile.svg"

export const validateSignInSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Tên tài khoản phải tối thiểu 6 ký tự")
      .max(15, "Tên tài khoản không được quá 15 ký tự")
      .required("Tên đăng nhập không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
      .max(20, "Mật khẩu không được quá 20 ký tự")
      .required("Mật khẩu không được để trống"),
});

//Sign - Up
export const validateSignUpObject = {
    username: "",
    email:"",
    password: "",
    passwordConfirm: ""
};

export const SIGNUPIMG = "/img/test.svg"

export const validateSignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Tên tài khoản phải tối thiểu 6 ký tự")
      .max(15, "Tên tài khoản không được quá 15 ký tự")
      .required("Tên đăng nhập không được để trống"),
    email: Yup.string()
      .email("Không đúng định dạng email ")
      .required("Email không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
      .max(20, "Mật khẩu không được quá 20 ký tự")
      .required("Mật khẩu không được để trống"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không đúng")
      .required("Mật khẩu xác nhận không được để trống")
});

//PW - Recover 
export const PWRECOVERIMG = "/img/pwRecover.svg"

export const validateEmailObj = {
  email: ""
}

export const validateEmailSchema = Yup.object().shape({
  email: Yup.string()
  .email("Không đúng định dạng email ")
  .required("Email không được để trống"),
})

export const validatePWObj = {
  password: "",
  passwordConfirm: ""
}

export const validatePWSchema = Yup.object().shape({
  password: Yup.string()
      .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
      .max(20, "Mật khẩu không được quá 20 ký tự")
      .required("Mật khẩu không được để trống"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không đúng")
      .required("Mật khẩu xác nhận không được để trống")
})



