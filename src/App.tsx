import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import ForgotPassword from "./components/forgotPassword/forgotPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
