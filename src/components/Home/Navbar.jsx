import React, { useState, useContext, useEffect } from 'react';
import './Navbar.css'; // Import your CSS file
import { myContext } from '../Context/myContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const { setsearch, products, login, setlogin, cart, setCart, setViewItem, setWish } = useContext(myContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]); // State for search results
    const [cartCount, setCartCount] = useState(0); // State for cart count
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
    const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu visibility

    const cat = [...new Set(products.map(item => item.category))];
    const nav = useNavigate();

    useEffect(() => {
        setCartCount(cart.length)
    }, [cart]);

    function handleChange(category) {
        nav(`/products/${category}`);
        setShowMobileMenu(false); // Close mobile menu on category click
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredProducts = products.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        setSearchResults(filteredProducts); // Update search results state
        setsearch(filteredProducts);
    }

    function handleItemClick(item) {
        setViewItem(item);
        nav("/viewitem");
        setSearchQuery(''); // Clear search query
        setSearchResults([]); // Clear search results
        setShowMobileMenu(false); // Close mobile menu on item click
    }

    function handleLogout() {
        if (window.confirm("Are you sure you want to log out?")) {
            setlogin([]);
            setCart([]);
            setWish([])
            nav("/");
            setShowMobileMenu(false); // Close mobile menu on logout
        }
    }

    function handleCart() {
        window.alert("Log In!...");
    }

    return (
        <div className="main-container">
            <div className="navbar">
                <div className='logo'>
                    <img src="https://gumlet-images.assettype.com/afaqs%2F2022-08%2F69acc390-3578-4527-8355-9f443f4749e3%2FEkar.jpg?rect=0%2C0%2C1600%2C900&w=1200" width={80} alt="" />
                </div>
                <div className='search-container'>
                    <input className='nav-search' type="text" value={searchQuery} onChange={handleSearch} placeholder='Search Products' />
                    {searchQuery && (
                        <div className='search-results'>
                            {searchResults.map(item => (
                                <div key={item.id} className='search-item' onClick={() => handleItemClick(item)}>
                                    <img src={item.image} alt={item.name} className='search-item-image' />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={`menu-nav ${showMobileMenu ? 'active' : ''}`}>
                    <div>
                        <h4 className='menu-list' onClick={() => nav("/")}>Home</h4>
                    </div>
                    <div className={`dropdown ${showDropdown ? 'show' : ''}`} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                        <h4 className='menu-list'>Categories</h4>
                        <div className="dropdown-content">
                            {cat.map(item =>
                                <a key={item} onClick={() => handleChange(item)}>{item.toUpperCase()}</a>
                            )}
                        </div>
                    </div>
                    <div>
                        <h4 className='menu-list' onClick={() => nav("/wishlist")}>WishList</h4>
                    </div>
                </div>
                <div>
                    {login.Email == null ?
                        <button className='btn-nav login-btn' onClick={() => nav("/login")}>Log In</button> :
                        <button onClick={handleLogout} className='btn-nav'>{login.FirstName}</button>
                    }
                </div>
                <div className="cart-container">
                    {login.Email == null ?
                        <button onClick={handleCart} className='btn-nav cart-icon'>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </button> :
                        <button onClick={() => nav("/cart")} className='btn-nav cart-icon'>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            <span className="cart-counter">{cartCount}</span>
                        </button>
                    }
                </div>
                <button className='hamburger-menu' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} size="lg" />
                </button>
            </div>
        </div>
    );
};
