import React, { useContext } from "react";
import { myContext } from "../Context/myContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FaTrash } from 'react-icons/fa';
import './Cart.css'

export const Cart = () => {
    const { cart, setCart, login } = useContext(myContext);

    console.log("cart:", cart);

    function handleRemove(item) {
        if (window.confirm("Are you sure you want to remove this item?")) {
            setCart(cart.filter(data => data.id !== item.id));
        }
    }

    function handleIncrease(itemId) {
        const updatedCart = cart.map(item =>
            item.id === itemId ? { ...item, quantity: parseInt(item.quantity || 1) + 1 } : item
        );
        setCart([...updatedCart]);
    }

    function handleDecrease(itemId) {
        const updatedCart = cart.map(item =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: parseInt(item.quantity) - 1 } : item
        );
        setCart([...updatedCart]);
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + (parseInt(item.price) * parseInt(item.quantity || 1));
        }, 0);
    };

    const totalAmount = calculateTotal();

    return (
        <div className="new-main-cart">
            <Navbar />
            <div className="new-cart-content">
                <div className="new-cart-items">
                    {login.length !== 0 ? cart.map(item => (
                        <div className="new-cart-item" key={item.id}>
                            <div className="new-cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="new-cart-item-details">
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <div className="new-quantity-control">
                                    <button onClick={() => handleDecrease(item.id)} className="new-quantity-btn">-</button>
                                    <div className="new-quantity-display">{item.quantity}</div>
                                    <button onClick={() => handleIncrease(item.id)} className="new-quantity-btn">+</button>
                                </div>
                            </div>
                            <div className="new-item-price">
                                ₹{parseInt(item.price) * parseInt(item.quantity || 1)}
                                <button onClick={() => handleRemove(item)} className="new-remove-btn">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    )) : ''}
                </div>
                <div className="new-total-amount-card">
                    <h3>Total Amount: ₹{totalAmount}</h3>
                </div>
            </div>
        </div>
    );
};
