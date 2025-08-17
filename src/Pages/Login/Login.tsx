import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  loginError,
  loginLoading,
  loginSuccess,
} from "../../Store/Auth/AuthSlice";
import { Link, useNavigate } from "react-router";

interface Value {
  Email: String;
  Password: String;
}

interface SignupResponse {
  token: string;
  message: string;
}

const SignupSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid Email").required("Mail is required"),
  Password: Yup.string()
    .min(6, "Min 6 caractor required")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { LoginLoader } = useSelector((state: any) => state.AuthReducer);
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      handleSignup(values);
    },
  });

  let handleSignup = async (values: Value) => {
    dispatch(loginLoading());
    try {
      let res = await axios.post<SignupResponse>(
        "http://localhost:3000/auth/login",
        {
          ...values,
        }
      );
      dispatch(loginSuccess({ ...res.data }));
      navigate("/");
    } catch (error) {
      dispatch(loginError());
      console.log(error);
    }
  };
  return (
    <div className="bg-[#9ecada] h-screen border flex justify-center align-center">
      <div
        className="bg-white  w-5/6 h-4/6 flex place-self-center shadow-xl rounded-2xl
"
      >
        <div className="flex flex-col w-1/2">
          <img
            src="https://www.vetavirtual.com/wp-content/uploads/2022/10/5-Ways-Virtual-Receptionist-Services-Benefit-You-and-Your-Customers.webp"
            alt=""
            className="place-self-center h-4/6 mt-10 align-middle"
          />
        </div>
        <div className="flex flex-col  w-1/2">
          <p className="place-self-center text-4xl text-[#398eb4] mt-5 ">
            Welcome
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-6 flex flex-col gap-5">
              <div className="place-self-center flex flex-col w-2/4 ">
                <label htmlFor="Email" className="text-sm">
                  Email
                </label>
                <input
                  id="Email"
                  type="email"
                  className="rounded bg-[#F6F6F6] h-8 p-2 text-sm focus:outline-none"
                  placeholder="example@mail.com"
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                />
                {formik.touched.Email && (
                  <span className="text-sm text-[red]">
                    {formik.errors.Email}
                  </span>
                )}
              </div>
              <div className="place-self-center flex flex-col w-2/4 ">
                <label htmlFor="Password" className="text-sm">
                  Password
                </label>
                <input
                  id="Password"
                  type="password"
                  className="rounded bg-[#F6F6F6] h-8 p-2 text-sm focus:outline-none"
                  placeholder=""
                  onChange={formik.handleChange}
                  value={formik.values.Password}
                />
                {formik.touched.Password && (
                  <span className="text-sm text-[red]">
                    {formik.errors.Password}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#398eb4] rounded place-self-center mt-6 h-10 w-2/4 text-white cursor-pointer"
              >
                {LoginLoader ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-white-500 border-dashed rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <span className="text-md">Log in</span>
                )}
              </button>
            </div>
          </form>
          <p className="text-sm place-self-center">
            Not Ragistered ? Please <Link to="Signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
