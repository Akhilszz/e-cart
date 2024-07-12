import React, { useContext } from "react";
import { myContext } from "../Context/myContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "./Wishlist.css";

export const WishList = () => {
    const { wish, setWish, cart, setCart } = useContext(myContext);
    const nav = useNavigate();

    function handleRemove(item) {
        if (window.confirm("Are you Sure")) {
            setWish(wish.filter((data) => data !== item));
        }
    }

    function handleCart(item) {
        if (!cart.find((data) => data.id === item.id)) {
            setCart([...cart, item]);
        } else {
            setCart(cart.filter((data) => data !== item));
        }
    }

    return (
        <div className="main-wish">
            <Navbar />
            <div>
                <h3 className="wish-head">My Wish List</h3>
            </div>
            <div className="wishlist-container">
                {wish.map((item) => (
                    <div className="wishlist-item" key={item.id}>
                        <div className="wishlist-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="wishlist-details">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p>₹{item.price}</p>
                            <div className="wishlist-buttons">
                                {cart.includes(item) ? (
                                    <button
                                        onClick={() => nav("/cart")}
                                        className="wishlist-btn-cart"
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} color="#333" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleCart(item)}
                                        className="wishlist-btn-add"
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} color="#4caf50" />
                                    </button>
                                )}
                                <button
                                    onClick={() => handleRemove(item)}
                                    className="wishlist-btn-remove"
                                >
                                    <FontAwesomeIcon icon={faTrash} color="#f44336" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
