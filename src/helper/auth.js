import axios from "axios";

// ログイン処理
export const login = async (user, setCurrentUser, e, navigate, setError) => {
  e.preventDefault();
  try {
    const getuser = await axios.post("/auth/login", user);
    setCurrentUser(getuser.data);
    console.log(getuser.data);
    navigate("/");
  } catch (err) {
    console.log(err.response.data);
    setError(err.response.data.msg);
  }
};

export const enroll = async (user, setCurrentUser, e, navigate, setError) => {
  e.preventDefault();

  try {
    if (
      !user.email.includes("@") ||
      !user.email.includes(".") ||
      user.password === ""
    ) {
      setError("メールアドレスとパスワードを正しく入力してください");
    } else {
      const newUser = await axios.post("/auth", user);
      setCurrentUser(newUser.data);
      console.log(newUser.data);
      navigate("/");
    }
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
    setError(err.response.data.msg);
  }
};

export const logout = (e, setCurrentUser, navigate) => {
  e.preventDefault();
  setCurrentUser(null);
  navigate("/");
};

export const gestLogin = async (e, setCurrentUser, navigate) => {
  e.preventDefault();
  try {
    const user = await axios.post("/auth/login", {
      email: "gest@gmail.com",
      password: "gestpassword",
    });
    setCurrentUser(user);
    console.log(user);
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
