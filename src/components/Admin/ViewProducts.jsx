import React, { useContext, useState } from "react";
import { AdminNav } from "./Admin-nav";
import { myContext } from "../Context/myContext";
import './viewproduct.css';
import { useNavigate } from "react-router-dom";

export const ViewProduct = () => {
    const { products, setProducts, filteredData, setfilteredData, setEdit } = useContext(myContext);
    const [searchQuery, setSearchQuery] = useState('');

    const nav = useNavigate()

    const filterItems = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredProducts = products.filter(item =>
            item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
        );
        setfilteredData(filteredProducts);
    }

    const handleDelete = (data) => {
        if (window.confirm("Are you sure?")) {
            console.log(data);
            setProducts(products.filter(item => item !== data));
            setfilteredData([]);
        }
    }

    const handleEdit = (data) => {
        setProducts(products.filter(item => item !== data));
        setfilteredData([]);
        setEdit(data)
        nav("/addproduct")
    }

    return (
        <div className="main-view">
            <AdminNav />
            <div className="productview">
                <input className="inp" type="text" value={searchQuery} onChange={filterItems} placeholder="Search items" />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length === 0 ?
                            products.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.category.toUpperCase()}</td>
                                    <td><img src={item.image} alt={item.name} width={100} height={100} /></td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <div className="action-btn ">
                                            <button className="dis-btn-dlt" onClick={() => handleDelete(item)}>Delete</button>
                                            <button className="dis-btn-edt" onClick={() => handleEdit(item)}>Edit</button>
                                        </div>

                                    </td>
                                </tr>
                            )) :
                            filteredData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.category.toUpperCase()}</td>
                                    <td><img src={item.image} alt={item.name} width={100} height={100} /></td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <div className="action-btn ">
                                            <button className="dis-btn-dlt" onClick={() => handleDelete(item)}>Delete</button>
                                            <button className="dis-btn-edt" onClick={() => handleEdit(item)}>Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// export default ViewProduct;
