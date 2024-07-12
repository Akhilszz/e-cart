import { useContext, useState } from 'react';
import './Addproducts.css'; // Make sure to import your CSS file
import { myContext } from '../Context/myContext';
import { AdminNav } from './Admin-nav';
import { Link } from 'react-router-dom';

export const Addproducts = () => {
    const { products, setProducts, edit, setEdit } = useContext(myContext);

    const [pname, setName] = useState(edit.name);
    const [cat, setCat] = useState(edit.category);
    const [img, setImg] = useState(edit.image);
    const [price, setPrice] = useState(edit.price);
    const [des, setDes] = useState(edit.description);

    const [errors, setErrors] = useState({});


    const validate = () => {
        const newErrors = {};
        if (!pname) newErrors.pname = "Product name is required";
        if (!cat) newErrors.cat = "Category is required";
        if (!img) newErrors.img = "Image URL is required";
        if (!price || price <= 0) newErrors.price = "Valid price is required";
        if (!des) newErrors.des = "Description is required";
        return newErrors;
    };

    const handleSub = () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // Create a new product object
        const newProduct = {
            name: pname,
            image: img,
            category: cat,
            price: parseInt(price),
            description: des
        };

        // Update state with the new product

        setEdit([])

        setProducts([...products, newProduct]);




        // Clear input fields after submission
        setName('');
        setCat('');
        setImg('');
        setPrice(0);
        setDes('');
        setErrors({});

        window.alert("Product added successfully");
    };

    return (
        <div className="add-products-container">
            <AdminNav />
            <div className="pr-add">
                {/* <h2>Add New Product</h2> */}
                <div className="add-products-form">
                    <div className="input-field">
                        <label className="label">Product Name</label>
                        <input
                            className="input"
                            type="text"
                            value={pname}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Product Name"
                        />
                        {errors.pname && <span className="error">{errors.pname}</span>}
                    </div>
                    <div className="input-field">
                        <label className="label">Category</label>
                        <input
                            className="input"
                            type="text"
                            value={cat}
                            onChange={(e) => setCat(e.target.value)}
                            placeholder="Category"
                        />
                        {errors.cat && <span className="error">{errors.cat}</span>}
                    </div>
                    <div className="input-field">
                        <label className="label">Image Url</label>
                        <input
                            className="input"
                            type="url"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            placeholder="Image Url"
                        />
                        {errors.img && <span className="error">{errors.img}</span>}
                    </div>
                    <div className="input-field">
                        <label className="label">Price</label>
                        <input
                            className="input"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                            placeholder="Price"
                        />
                        {errors.price && <span className="error">{errors.price}</span>}
                    </div>
                    <div className="input-field">
                        <label className="label">Description</label>
                        <input
                            className="input"
                            type="text"
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            placeholder="Description"
                        />
                        {errors.des && <span className="error">{errors.des}</span>}
                    </div>
                    <div>
                        {
                            edit.length == 0 ?
                                <button className="submit-button" onClick={handleSub}>Submit</button>
                                :
                                <button className="submit-button" onClick={handleSub}>Save</button>
                        }
                    </div>
                    <div className="home-link">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
