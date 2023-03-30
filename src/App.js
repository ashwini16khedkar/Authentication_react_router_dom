import { About } from "./Components/About";
import { Home } from "./Components/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import { NoMatch } from "./Components/NoMatch";
import { Products } from "./Components/Products";
import { Profile } from "./Components/Profile";
import { AuthProvider } from "./Components/Auth";
import { Login } from "./Components/Login";
import { RequireAuth } from "./Components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
