import React, { useContext } from "react";
import { myContext } from "../Context/myContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import "./ViewItems.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const ViewItems = () => {
    const { viewitem, wish, setWish, cart, setCart, login, products, setViewItem } = useContext(myContext);
    const nav = useNavigate();

    const handleWish = (item) => {
        if (!wish.find(data => data === item)) {
            setWish([...wish, item]);
        } else {
            setWish(wish.filter(data => data !== item));
        }
    };

    const handleCart = (prd) => {
        if (cart.find(data => data.id === prd.id)) {
            window.alert("Item already in cart");
        } else {
            setCart([...cart, prd]);
        }
    };

    const productsSimilar = products.filter(data => data.category === viewitem.category);
    console.log("products similar", productsSimilar);

    return (
        <div className="viewitem-main-view">
            <Navbar className="viewitem-nav" />
            <div className="viewitem-content">
                <div className="viewitem-items-container">

                    <div className="viewitem-card" key={viewitem.id}>
                        <div className="viewitem-img">
                            <img className="viewitem-image" src={viewitem.image} alt="" />
                            <div className="viewitem-wishlist-heart"
                                onClick={() => login.Email ? handleWish(viewitem) : nav("/login")}
                            >
                                <FontAwesomeIcon
                                    icon={wish.find(data => data === viewitem) ? faHeartSolid : faHeartRegular}
                                    className="viewitem-heart"
                                />
                            </div>
                        </div>
                        <div className="viewitem-details" >
                            <div className="viewitem-header">
                                <h4 className="viewitem-name">{viewitem.name}</h4>
                            </div>
                            <p className="viewitem-description">{viewitem.description}</p>
                            <p className="viewitem-price">₹{viewitem.price}</p>
                            <div className="viewitem-buttons">
                                {cart.find(data => data.id === viewitem.id) ?
                                    <button onClick={() => nav("/cart")} className="viewitem-btn btn-cart">Go to Cart</button>
                                    :
                                    login.Email ?
                                        <button onClick={() => handleCart(viewitem)} className="viewitem-btn btn-cart">Add to Cart</button>
                                        :
                                        <button onClick={() => nav("/login")} className="viewitem-btn btn-cart">Add to Cart</button>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="viewitem-similar-items">
                <h3>View Similar Items</h3>

                <div className="viewitem-similar-items-container">
                    {productsSimilar.map(product => (
                        <div key={product.id} className="viewitem-product-card" onClick={() => { setViewItem(product) }}>
                            <div className="viewitem-product-img">
                                <img className="viewitem-product-image" src={product.image} alt={product.name} />
                                <div className="viewitem-wishlist-heart"
                                    onClick={() => login.Email ? handleWish(product) : nav("/login")}
                                >
                                    <FontAwesomeIcon
                                        icon={wish.find(data => data === product) ? faHeartSolid : faHeartRegular}
                                        className="viewitem-heart"
                                    />
                                </div>
                            </div>
                            <div className="viewitem-product-details">
                                <h4 className="viewitem-product-name">{product.name}</h4>
                                <p className="viewitem-product-description">{product.description}</p>
                                <p className="viewitem-product-price">₹{product.price}</p>
                                <div className="viewitem-product-actions">
                                    {cart.find(data => data.id === product.id) ?
                                        <button onClick={() => nav("/cart")} className="viewitem-btn btn-cart">Go to Cart</button>
                                        :
                                        login.Email ?
                                            <button onClick={() => handleCart(product)} className="viewitem-btn btn-cart">Add to Cart</button>
                                            :
                                            <button onClick={() => nav("/login")} className="viewitem-btn btn-cart">Add to Cart</button>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          
        </div>
    );
};
