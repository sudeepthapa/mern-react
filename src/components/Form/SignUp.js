import './styles.css';

import { useState, useEffect } from 'react';

const SignUp = (props) => {

    const [ username, setUserName ] = useState('');
    const [ password, setPassword ]= useState('');
    const [ termsCheck, setTermsCheck ]= useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {

        setUserName("Test")

    }, [username, password])

    return (
        <div className="wrapper">
            <div className="form-container">
                <form>
                    <h2>Login</h2>
                    <div className="form-control">
                        <label>Username</label>
                        <input type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <span className="error-text"> {errors.password} </span>
                    </div>
                    <div className="form-checkbox">
                        <input type="checkbox" name="termsCheck" value={termsCheck} checked={termsCheck} onChange={(e)=>setTermsCheck(e.target.checked)} />
                        <label>Accept terms and conditions.</label>
                    </div> 

                    <button type="submit" disabled={!termsCheck} className={`btn ${termsCheck ? 'btn-secondary' : 'btn-disabled'}`}>Signin</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp