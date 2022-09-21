import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserProvider";
import { Home } from "./pages/Home";
import { Money } from "./pages/Money";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={currentUser ? <Money /> : <Home />} />
        <Route path="/Money" element={currentUser ? <Money /> : <SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
