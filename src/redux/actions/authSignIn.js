import axios from "axios";
import { signIn, showErrorMessagesSignIn } from "../authSlice";
import ConsoleHelper from "../../Components/consolelogger";


export const signInUser = function (user) {
  return function (dispatch) {
    return axios
      .post("http://localhost:4000/login", {
        email: `${user.email}`,
        password: `${user.password}`,
      })
      .then(
        (response) => {
          ConsoleHelper(response);
          localStorage.setItem("jwt", JSON.stringify(response.data));
          document.querySelector(".emailError").innerHTML = "";

          document.querySelector(".passwordError").innerHTML = "";
          window.location.href = "/";

          dispatch(signIn(user));
          return Promise.resolve();
        },
        (error) => {
          dispatch(showErrorMessagesSignIn(error.response.data));
          return Promise.reject(error.response.data);
        }
      );
  };
};
