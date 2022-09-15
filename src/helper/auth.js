import axios from "axios";

export const login = async (user, setCurrentUser, e, navigate) => {
  e.preventDefault();
  try {
    const getuser = await axios.post("/auth/login", user);
    setCurrentUser(getuser.data);
    console.log(getuser.data);
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const enroll = () => {};

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
