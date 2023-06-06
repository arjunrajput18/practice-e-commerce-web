import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import Mockman from "mockman-js";
import { Productlisting } from "./Pages/Productlisting/Productlisting";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Cart } from "./Pages/Cart/Cart";
import { Profile } from "./Pages/Profile/Profile";
import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<Productlisting />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
