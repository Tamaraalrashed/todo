import React from 'react';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

const API = 'https://auth-server-401.herokuapp.com';
const SECRET = 'supersecret';
class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            token: null,
            login: this.login,
            logout: this.logout,
            user: {}
        }
    }

    componentDidMount() {
        const token = cookie.load('auth');
        this.validateToken(token);
    }

    login = async (username, password) => {
        try {
        
            const response = await superagent.post(`${API}/signin`)
                .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);

            this.validateToken(response.body.token);
            //do login stuff
            // this.setLoginState(true, 'somevalues', {username})
        } catch (error) {
            console.error('Failed to signin', error.message);
        }
    }

    validateToken = (token) => {
        try {
           
            const user = jwt.decode(token);
         
            this.setLoginState(!!user, token, user);
        } catch (error) {
            console.error('User is not verified', error.message);
            this.setLoginState(false, null, {})
        }
    }


    logout = () => {
        this.setLoginState(false, null, {})
    }

    setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({ token, loggedIn, user });
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

export default LoginProvider;