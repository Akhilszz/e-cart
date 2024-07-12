import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { myContext } from '../Context/myContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import './Product.css'; // Import custom CSS for ProductCategory component

function ProductCategory() {
    const { products, setViewItem, cart, setCart, wish, setWish, login } = useContext(myContext);
    const { category } = useParams();
    const nav = useNavigate();

    const productList = products.filter(item => item.category === category);

    const handleWish = (item) => {
        if (!wish.find(data => data === item)) {
            setWish([...wish, item]); // Add item to wishlist
        } else {
            setWish(wish.filter(data => data !== item)); // Remove item from wishlist
        }
    };

    const handleAddToCart = (item) => {
        if (!cart.find(data => data.id === item.id)) {
            setCart([...cart, item]);
        } else {
            window.alert("Item already in cart");
        }
    };

    return (
        <div className="main-product-category">
            <Navbar />
            <h1 className="category-title">{category.toUpperCase()}</h1>
            <div className="product-list">
                {productList.map(item => (
                    <div key={item.id} className="product-card">
                        <div className="item-img">
                            <div className="wishlist-heart"
                                onClick={() => login.Email ? handleWish(item) : nav("/login")}
                            >
                                <FontAwesomeIcon
                                    icon={wish.find(data => data === item) ? faHeartSolid : faHeartRegular}
                                    className="heart"
                                />
                            </div>
                            <img
                                onClick={() => {
                                    setViewItem(item);
                                    nav("/viewitem");
                                }}
                                className="product-image"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                        <div className="item-details">
                            <h4 className="product-name" onClick={() => {
                                setViewItem(item);
                                nav("/viewitem");
                            }}>{item.name}</h4>
                            <p className="product-description">{item.description}</p>
                            <p className="product-price">₹{item.price}</p>
                            <div className="product-actions">
                                {cart.find(data => data.id === item.id) ?
                                    <button onClick={() => nav("/cart")} className="btn-view btn-cart">Go to Cart</button>
                                    :
                                    login.Email ?
                                        <button onClick={() => handleAddToCart(item)} className="btn-view btn-cart">Add to Cart</button>
                                        :
                                        <button onClick={() => nav("/login")} className="btn-view btn-cart">Add to Cart</button>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ProductCategory;
