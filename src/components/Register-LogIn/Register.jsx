import React, { useContext, useState } from 'react';
import './Register.css';
import { myContext } from '../Context/myContext';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const { registerDetails, setRegisterDetails } = useContext(myContext);
    const nav = useNavigate();

    // State variables for form fields and errors
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    // State variables for error messages
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [dobError, setDobError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleValidation = () => {
        let isValid = true;

        // Validate each field
        if (firstName.trim() === '') {
            setFirstNameError('First Name is required.');
            isValid = false;
        } else {
            setFirstNameError('');
        }

        if (lastName.trim() === '') {
            setLastNameError('Last Name is required.');
            isValid = false;
        } else {
            setLastNameError('');
        }

        if (age.trim() === '' || age.length > 2) {
            setAgeError('Valid Age is required (1-100).');
            isValid = false;
        } else {
            setAgeError('');
        }

        if (dob.trim() === '') {
            setDobError('Date of Birth is required.');
            isValid = false;
        } else {
            setDobError('');
        }

        if (email.trim() === '' || !emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }
        else if (registerDetails.find(data => data.Email == email)) {
            setEmailError('Email is already registered')
            isValid = false;

        }
        else {
            setEmailError('');
        }

        if (phone.trim() === '' || phone.length != 10) {
            setPhoneError('Valid Phone number is required (10 digits).');
            isValid = false;
        }
        else if (registerDetails.find(data => data.Phone == phone)) {
            setPhoneError('Mobile number already registered')
            isValid = false;

        }
        else {
            setPhoneError('');
        }

        if (password.trim() === '') {
            setPasswordError('Password is required.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        // If all fields are valid, submit the form
        if (isValid) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        const RegisterData = {
            FirstName: firstName,
            LastName: lastName,
            Age: age,
            Dob: dob,
            Email: email,
            Phone: phone,
            Password: password
        };

        if (registerDetails.find(data => data.email === email)) {
            window.alert("User already exists!");
        } else {
            setRegisterDetails([...registerDetails, RegisterData]);
            alert(`Thank You for registering, Mr./Ms. ${firstName}`);
            nav("/login");
        }
    };

    return (
        <div className="main">
            <div className="regi-left">
                <div className='input-field'>
                    <label className='label'>First Name</label>
                    <input className='input' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                    {firstNameError && <p className="error-message">{firstNameError}</p>}
                </div>
                <div className='input-field'>
                    <label className='label'>Last Name</label>
                    <input className='input' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                    {lastNameError && <p className="error-message">{lastNameError}</p>}
                </div>
                <div className='input-field'>
                    <label className='label'>Age</label>
                    <input className='input' type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    {ageError && <p className="error-message">{ageError}</p>}
                </div>
                <div className='input-field'>
                    <label className='label'>Date of Birth</label>
                    <input className='input' type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" />
                    {dobError && <p className="error-message">{dobError}</p>}
                </div>
                <div className='input-field'>
                    <label className='label'>Email</label>
                    <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className='input-field'>
                    <label className='label'>Phone</label>
                    <input className='input' type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                    {phoneError && <p className="error-message">{phoneError}</p>}
                </div>
                <div className='input-field'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <div>
                    <input className='inp-sub' type="submit" value="Register Now" onClick={handleValidation} />
                </div>
            </div>
        </div>
    );
};

// export default Register;
