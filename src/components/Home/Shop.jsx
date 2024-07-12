import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../Context/myContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import './shop.css'; // Import custom CSS for Shop component
import ImageSlider from "./imageSlider";

export const Shop = () => {
    const { products, setViewItem, cart, setCart, wish, setWish, login } = useContext(myContext);
    const nav = useNavigate();


    const [currentCategory, setCurrentCategory] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            changeCategory();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const changeCategory = () => {
        const categories = [...new Set(products.map(product => product.category))];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        setCurrentCategory(randomCategory);
    };

    const category = products.filter(data => data.category == currentCategory)



    const getLimitedProducts = () => {
        const limitedProducts = {};
        products.forEach(product => {
            if (!limitedProducts[product.category]) {
                limitedProducts[product.category] = [];
            }
            if (limitedProducts[product.category].length < 4) {
                limitedProducts[product.category].push(product);
            }
        });
        return limitedProducts;
    };

    const limitedProducts = getLimitedProducts();

    const handleWish = (item) => {
        if (!wish.find(data => data === item)) {
            setWish([...wish, item]); // Add item to wishlist
        } else {
            setWish(wish.filter(data => data !== item)); // Remove item from wishlist
        }
    };

    const handleAddToCart = (item) => {
        if (!cart.find(data => data.id === item.id)) {
            setCart([...cart, item]); // Add item to cart
        } else {
            window.alert("Item already in cart");
        }
    };

    return (
        <div className="main-shop">
            <Navbar />

            <div className="img-slider">
                <ImageSlider />
            </div>

            <div className="main-shop_body">
                <div className='shop-overview'>
                    <h3>Our Top Categories</h3>
                </div>
                <div className="category-icons">
                    <div className="category-icon" onClick={() => console.log('Electronics clicked')}>
                        <img src='https://thumbs.dreamstime.com/b/laptop-computer-travel-37983668.jpg' alt="Electronics" />
                        <span>Laptop</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Dress clicked')}>
                        <img src='https://5.imimg.com/data5/SELLER/Default/2023/7/323058541/KK/YI/CZ/78606999/il-794xn-4985464208-lkxy-500x500.jpg' alt="Dress" />
                        <span>Dress</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Shoes clicked')}>
                        <img src='https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true' alt="Shoes" />
                        <span>Shoes</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Mobile clicked')}>
                        <img src='https://img.etimg.com/photo/msid-98815516,imgsize-24654/LavaZ3.jpg' alt="Mobile" />
                        <span>Mobile</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Jewelry clicked')}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyi1dZtmdDdwkJEpxnE6X4DI8lHyawPAiwVg&s' alt="Jewelry" />
                        <span>Jewelry</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Watch clicked')}>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' alt="Watch" />
                        <span>Watch</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Sports clicked')}>
                        <img src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg' alt="Sports" />
                        <span>Sports</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Toys clicked')}>
                        <img src='https://etimg.etb2bimg.com/thumb/msid-97555670,imgsize-148476,width-1200,height=765,overlay-etretail/toys-kids-and-baby/toys/govt-hikes-import-duty-on-toys-to-70.jpg' alt="Toys" />
                        <span>Toys</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Accessories clicked')}>
                        <img src='https://www.superprof.co.in/blog/wp-content/uploads/2018/07/photography-accessories.jpg' alt="Accessories" />
                        <span>Accessories</span>
                    </div>
                    <div className="category-icon" onClick={() => console.log('Furniture clicked')}>
                        <img src='https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg' alt="Furniture" />
                        <span>Furniture</span>
                    </div>
                </div>

                <div className='shop-overview'>
                    <h3>Popular Products</h3>
                </div>

                <div className="product-row-container">
                    <div className="product-row">
                        {Object.keys(limitedProducts).map(category => (
                            limitedProducts[category].map(product => (
                                <div key={product.id} className="product-item">
                                    <div className="item-img">
                                        <div className="wishlist-heart"
                                            onClick={() => login.Email != null ? handleWish(product) : nav("/login")}
                                        >
                                            <FontAwesomeIcon
                                                icon={wish.find(data => data === product) ? faHeartSolid : faHeartRegular}
                                                className="heart"
                                            />
                                        </div>
                                        <img
                                            onClick={() => {
                                                setViewItem(product);
                                                nav("/viewitem");
                                            }}
                                            className="product-image"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="item-details">
                                        <h4 className="product-name" onClick={() => {
                                            setViewItem(product);
                                            nav("/viewitem");
                                        }}>{product.name}</h4>
                                        <p className="product-description">{product.description}</p>
                                        <p className="product-price">₹{product.price}</p>
                                        <div className="product-actions">
                                            {login.length != 0 ? cart.find(data => data.id === product.id) ?
                                                <button onClick={() => nav("/cart")} className="btn-view btn-cart">Go to Cart</button>
                                                :
                                                login.Email != null ?
                                                    <button onClick={() => handleAddToCart(product)} className="btn-view btn-cart">Add to Cart</button>
                                                    : <button onClick={() => nav("/login")} className="btn-view btn-cart">Add to Cart</button>

                                                : <button onClick={() => nav("/login")} className="btn-view btn-cart">Add to Cart</button>}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                </div>

                <div className="shop-sale">
                    <div className="sale-banner">
                        <img src="https://previews.123rf.com/images/oleola/oleola1704/oleola170400072/76717203-seasonal-sale-banner-sale-and-discounts-web-banner-or-poster-for-e-commerce-on-line-shop-store.jpg" alt="Sale Banner" />
                    </div>
                    <div className="sale-items">
                        <div className="sale-item sale-item-big">
                            <img src="https://hips.hearstapps.com/hmg-prod/images/online-buying-and-delivery-concept-royalty-free-image-1675370119.jpg?crop=0.563xw:1.00xh;0.216xw,0&resize=640:*" alt="Sale Item 1" />
                            <span>Buy Now to Get Exciting Offers</span>
                        </div>

                        <div className="sale-item sale-item-small">
                            <img src="https://s.alicdn.com/@sc04/kf/H61f6f20d7b4d4d018666e6b905d2b60ad.jpg_300x300.jpg" alt="Sale Item 2" />
                            <span>Biggest Discount Ever</span>
                        </div>

                        <div className="sale-item sale-item-small">
                            <img src='https://5.imimg.com/data5/SELLER/Default/2023/3/MH/PP/DW/46233486/traditional-jaipuri-bed-sheets-500x500.jpeg' alt="Sale Item 3" />
                            <span>Get one Free</span>
                        </div>

                        <div className="sale-item sale-item-big">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaH1ciYznD1X79eLYzOx1Hum-O0S_jlMeFA&s" alt="Sale Item 1" />
                            <span>Buy Now to Get Exciting Offers</span>
                        </div>

                        <div className="sale-item sale-item-big">
                            <img src="https://i.pinimg.com/736x/9e/33/de/9e33dea7073f0524c93596e848810218.jpg" alt="Sale Item 2" />
                            <span>Biggest Discount Ever</span>
                        </div>

                        <div className="sale-item sale-item-big">
                            <img src='https://5.imimg.com/data5/NY/HD/MY-2552723/pvc-furniture-sheet-500x500.jpeg' alt="Sale Item 3" />
                            <span>Get one Free</span>
                        </div>

                    </div>
                </div>


                <div className="shop-overview">
                    <h3>Trending Items</h3>
                </div>
                <div className="product-list">
                    {category.length == 0 ? <div className="loading-container">
                        <div className="loading-bar-container">
                            <div className="loading-bar" style={{ width: "50%" }}></div>
                        </div>
                        <p>Loading...</p>
                    </div> : category.map(item => (
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







                <div className='shop-overview'>
                    <h3>Available Services</h3>
                </div>
                <div className="shop-services">
                    <div className="service-card">
                        <img src='https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-fast-delivery-icon-for-your-project-png-image_1561663.jpg' alt="" />
                        <div>
                            <h4>Free Delivery</h4>
                            <p>For all orders over 1000</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="https://static.thenounproject.com/png/2370787-200.png" alt="" />
                        <div>
                            <h4>Return Policy</h4>
                            <p>If goods have problems</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/004/823/984/small_2x/secure-payment-line-style-icon-vector.jpg' alt="" />
                        <div>
                            <h4>Secure Payment</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="https://t4.ftcdn.net/jpg/02/87/15/11/360_F_287151103_hzE8IPheRu6ogA4dujugMoh7J9nqBkji.jpg" alt="" />
                        <div>
                            <h4>24/7 Support</h4>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='footer-shop'>
                <Footer />
            </div>

        </div>
    );
};

// export default Shop;













