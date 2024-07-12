import { useState } from "react";
import { Login } from "./components/Register-LogIn/Login";
import { Register } from "./components/Register-LogIn/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { myContext } from "./components/Context/myContext";
import { Dashboard } from "./components/Admin/Dashboard";
import {  ViewProduct } from "./components/Admin/ViewProducts";
import { ProductData } from "./components/productData";
import { ViewUser } from "./components/Admin/viewuser";
import { Addproducts } from "./components/Admin/Addproducts";
import { Shop } from "./components/Home/Shop";
import ProductCategory from "./components/Home/ProductCategory";
import { ViewItems } from "./components/Home/viewItem";
import { WishList } from "./components/Home/wishList";
import { Cart } from "./components/Home/cart";


function App() {


  const [registerDetails, setRegisterDetails] = useState([])
  const [products, setProducts] = useState(ProductData)
  const [viewitem, setViewItem] = useState([])
  const [wish, setWish] = useState([])
  const [cart, setCart] = useState([])
  const [login, setlogin] = useState([])
  const [search, setsearch] = useState([])
  const [filteredData, setfilteredData] = useState([])
  const[edit,setEdit]=useState([])

  console.log("Products", products);
console.log("Login",login);
  


  const values = { edit, setEdit, filteredData, setfilteredData, search, setsearch, registerDetails, setRegisterDetails, products, setProducts, viewitem, setViewItem, wish, setWish, cart, setCart, login, setlogin }

  return (
    <div className="App">
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/viewproduct" element={<ViewProduct />}></Route>
            <Route path="/viewuser" element={<ViewUser />}></Route>
            <Route path="/addproduct" element={<Addproducts />}></Route>
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/viewitem" element={<ViewItems />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
