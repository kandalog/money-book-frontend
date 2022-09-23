import axios from "axios";

// ログイン処理
export const login = async (user, setCurrentUser, e, navigate, setError) => {
  e.preventDefault();
  try {
    const getUser = await axios.post(
      "https://money-book-backend.herokuapp.com/api/auth/login",
      user
    );
    setCurrentUser(getUser.data);
    navigate("/money");
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
      // 下記の1文で追加
      const newUser = await axios.post(
        "https://money-book-backend.herokuapp.com/api/auth",
        user
      );
      setCurrentUser(newUser.data);
      console.log(newUser.data);
      navigate("/money");
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
  const user = {
    email: "gest@gmail.com",
    password: "gestpassword",
  };
  try {
    const gest = await axios.post(
      "https://money-book-backend.herokuapp.com/api/auth/login",
      user
    );
    setCurrentUser(gest.data);
    console.log(gest.data);
    navigate("/money");
  } catch (err) {
    console.log(err);
  }
};
