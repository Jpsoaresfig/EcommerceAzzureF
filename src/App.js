import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/homepage/home.jsx";
import Login from "./Pages/login/login.jsx";
import Register from "./Pages/register/register.jsx";
import ProtectedRoute from "./Components/protectedRoute/ProtectedRoute.jsx";
import AllProductsPage from "./Pages/AllproductsPage/AllproductsPage.jsx";
import ScreenBuy from "./Pages/ScreenBuy/ScreenBuy.jsx";
import About from "./Pages/about/about.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all-products"
          element={
            <ProtectedRoute>
              <AllProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compra/:id"
          element={
            <ProtectedRoute>
              <ScreenBuy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
            <About />
            </ProtectedRoute>
          }
          />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
