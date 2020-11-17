import React from 'react';
import "./Login.css";
import Button from "@material-ui/core/Button"
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {

    const [{}, dispath] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(
            (result) => {
                dispath({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }
        ).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login-container">

                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg" alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>


        </div>
    )
}

export default Login
