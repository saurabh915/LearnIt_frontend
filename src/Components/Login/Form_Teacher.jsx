import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Form.css';
import { addUser } from "../../service/studentapi";

function Form() {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathWithoutSlash = currentPath.substring(1);
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");  // To store the error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(credentials));
        navigate("/");
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password) {
            setError("Please fill out both email and password!");
            return;
        }
        let data = "something";
        const a = await addUser(data);
        alert(a.msg);
        if (a.success) {   // Assuming there's a success field in the response. Adjust as needed.
            navigate("/welcome");
        }
    };

    return (
        <>
            <span>{pathWithoutSlash} Login</span>
            {error && <div className="error-message">{error}</div>}  {/* Display the error */}
            <div className='form'>
                <form onSubmit={handleClick}>
                    <div className="mb-3 row">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={onChange} name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;
