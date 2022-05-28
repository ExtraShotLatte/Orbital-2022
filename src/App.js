import "./App.css";
import { useAuth } from "./hooks/useAuth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/resetPassword/ResetPasswordPage";
import UserProfile from "./pages/profile/UserProfile";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={user ? <LoginPage /> : <SignUpPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
