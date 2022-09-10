import React, { useState } from 'react';


const UserForm = (props) => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    // const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(null);
    // const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    // const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }


    const validateName = () => { 
    if (formState.username.length < 3){
        setUsernameError('Username Must be longer than 3 characters.')
    } else{
        setUsernameError(null);
    }
    }

    const validateEmail = () => { 
        if (formState.email.length < 5){
            setEmailError('Email Must be longer than 5 characters.')
        } else{
            setEmailError(null);
        }
        }

    const validatePassword = () => { 
        if (formState.password.length < 5){
            setPasswordError('Password Must be longer than 8 characters.')
        } else{
            setPasswordError(null);
        }
        }
        const validateConfirmPassword = () => { 
            if (formState.password.length < 5){
                setConfirmPasswordError('Password Must be longer than 8 characters.')
            } else{
                setConfirmPasswordError(null);
            }
            }

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { username, email, password, confirmPassword };
    //     console.log("Welcome", newUser);
    // };

    // const formMessage = () => {
    //     if (username < 3) {
    //         return "Username must be greater than 2 characters";
    //     } 
    // };
    // const formMessageEmail = () => {
    //     if (email < 5) {
    //         return "Email must be greater than 5 characters";
    //     } 
    // };
    // const formMessagePassword = () => {
    //     if (password < 8) {
    //         return "Password must be greater than 8 characters";
    //     } 
    // };
    // const formMessageConfirmPassword = () => {
    //     if (confirmPassword < 8) {
    //         return "Password must be greater than 8 characters";
    //     } 
    // };
    const formMessageConfirmPasswordMatch = () => {
        if (formState.password !== formState.confirmPassword ) {
            return "Password must match";
        } 
    };

    // const ValidateEmail = (inputText) => {
    //     const mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    //     if(inputText.value.match(mailformat))
    //     {
    //         alert("Valid email Address!");
    //         document.form1.text1.focus();
    //         return true
    //     }
    //     else
    //     {

    //         alert("You have entered an invalid email adress!")
    //         document.form1.text1.focus();
    //         return (false);
    //     }
    // }


    // const initialState = {
    //     username: {
    //         value: '',
    //         error: null
    //     }
    // };


    return (
        <>
            <div className='container p-5'>
                <form>
                {/* onSubmit={createUser} */}
                    <div>
                        <label>Username: </label>
                        <input className='form-control' type="text" name='username' id='username' onChange={(e) => handleChange(e)} value={formState.username} onBlur={validateName} />
                        {
                            usernameError && 
                            <span className="text-danger">{ usernameError }</span>
                        }
                    </div>
                    <div>
                        <label for="email">Email Address: </label>
                        <input id='email' name='email' className='form-control' type="email" onChange={(e) => handleChange(e)} value={formState.email} onBlur={validateEmail} />
                        {/* <p className='text-danger'>{formMessageEmail()}</p>   */}
                        {
                            emailError && 
                            <span className="text-danger">{ emailError }</span>
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input className='form-control' name='password' id='password' type="password" onChange={(e) => handleChange(e)} value={formState.password} onBlur={validatePassword} />
                        {/* <p className='text-danger'>{formMessagePassword()}</p>   */}
                        {
                            passwordError && 
                            <span className="text-danger">{ passwordError }</span>
                        }

                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input className='form-control' name='confirmPassword' id='confirmPassword' type="password" onChange={(e) => handleChange(e)} value={formState.confirmPassword} onBlur={validateConfirmPassword} />
                        {
                            confirmPasswordError && 
                            <span className="text-danger">{ confirmPasswordError }</span>
                        }
                        <p className='text-danger'>{formMessageConfirmPasswordMatch()}</p>  
                    </div>
                    <div className="d-flex">
                        <input className='btn btn-primary' type="submit" value="Create User" />
                    </div>
                </form>

                <div className='card border border-dark d-flex justify-content-center align-items-center'>
                    <h5 className='card-header bg-dark text-white'>Your Form Data</h5>
                    <div className="card-body">
                        <div>Username: {formState.username}</div>
                        <div>Email: {formState.email}</div>
                        <div>Password: {formState.password}</div>
                        <div>Confirm Password: {formState.confirmPassword}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserForm;
