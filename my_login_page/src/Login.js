import React from 'react';
import Button from './Button';
import Input from './Input';


const Login = ()=>{
    return(
        <div className='mainDiv'>
            <div className='white'>
            <div className='welcome'>
              <h3>Welcome <br/>back!</h3>
            <div>
            <Input label='E-mail:'  placeholder='Enter your e-mail...'/>
            <Input label="Password:" placeholder="Enter your password..."/>
            </div>
            <div className="forget">
                <a href='#'>forgot password?</a>
            </div>
             <div className="login-btn">
            <Button title="Login" className="button" color="white" backgroundColor="black" padding="7px" textAlign="center" />
            </div>
            <p>or</p>
            <div className="social">
                <Button title="Facebook"/>
                <Button title="Google"/>
            </div>
            <p>Don't have an account?</p>
            <div className="create">
            <Button title ="create one"/>
            </div>
            </div>
            </div>
            
        </div>
        
    )
}



export default Login;