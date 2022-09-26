import axios from "axios";
import { signUp, showErrorMessagesSignUp } from "../authSlice";
import ConsoleHelper from "../../Components/consolelogger";

export const register = function (newUser) {
  return function (dispatch) {
    return axios
      .post("http://localhost:4000/signup", {
        username: `${newUser.username}`,
        email: `${newUser.email}`,
        password: `${newUser.password}`,
        phone: newUser.phone,
        college: `${newUser.college}`,
        ID: newUser.ID,
        mem: newUser.mem,
        memNo: newUser.memNo,
      })
      .then(
        (response) => {
          ConsoleHelper(response);
          // localStorage.setItem("user",JSON.stringify(response.data.user));
          // localStorage.setItem("jwt",JSON.stringify(response.data.token));
          // localStorage.setItem("jwt", JSON.stringify(response.data));
          dispatch(signUp(newUser));
          return Promise.resolve();
        },
        (error) => {
          ConsoleHelper(error);
          dispatch(showErrorMessagesSignUp(error.response.data.errorMessage));
          return Promise.reject(error.response.data.errorMessage);
        }
      );
  };
};
