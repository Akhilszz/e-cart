import React, { useContext } from 'react';
import { myContext } from '../Context/myContext';
import { AdminNav } from './Admin-nav';
import './viewuser.css'

export const ViewUser = () => {
    const { registerDetails, setRegisterDetails } = useContext(myContext);

    const handleBan = (item) => {

        if (registerDetails.find(data => data.banned == true)) {

            const updatedUsers = registerDetails.map(user =>
                user.Email === item.Email ? { ...user, banned: false } : user
            );
            setRegisterDetails(updatedUsers);
        }
        else {

            const updatedUsers = registerDetails.map(user =>
                user.Email === item.Email ? { ...user, banned: true } : user
            );
            setRegisterDetails(updatedUsers);
        }

    };
    console.log("afterban", registerDetails);

    return (
        <div className="main-view-user">
            <AdminNav />
            <div className="user-view">
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registerDetails.map((item, index) => (
                            <tr key={index}>
                                <td>{item.FirstName}</td>
                                <td>{item.Age}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Dob}</td>
                                <td>{item.Email}</td>
                                <td>
                                    {item.banned ? (
                                        <button className="unban-btn" onClick={() => handleBan(item)}>
                                            Unban User
                                        </button>
                                    ) : (
                                        <button className="ban-btn" onClick={() => handleBan(item)}>
                                            Ban User
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
