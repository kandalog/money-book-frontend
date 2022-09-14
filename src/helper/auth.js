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

export const logout = () => {};
