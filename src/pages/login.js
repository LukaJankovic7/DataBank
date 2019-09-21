import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {connect} from 'react-redux'
import PageLayout from '../components/PageLayout'
import {checkUser} from '../state/actions/user'
import LoginStyles from './styles/login.module.scss'

const Login = ({checkUser, loginSuccess, user}) => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulUserAccount{
            edges{
                node{
                    username
                    password
                }
            }
        }
      }
    `)

    const checkLogin = () => {
        let login= false;
        const accountData = data.allContentfulUserAccount.edges;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        accountData.forEach( element => {
            const { node: { password: accountPassword, username: accountUsername } } = element;
            if (username === accountUsername && password === accountPassword) login= true
            else login= false 
        });
        if (login) checkUser(login, username);
    }   

    const checkKeyPress = event => {
        if(event.key==='Enter') checkLogin()
    }

    return (
        <PageLayout >
            <div className = {`wrapper ${LoginStyles.wrapper}`}>
                {
                    loginSuccess ? (
                        <p>You are succesfully logged in as {user}!</p>
                    ) : (
                        <div>
                            <h2>Log in </h2>
                            {/* { loginSuccess ? (null):(<div><p>Wrong info</p><br/></div>)} */}
                            <div className={LoginStyles.form}>
                                Username: <input placeholder="johnDoe" id="username" /><br/>
                                Password: <input type="password" id="password" onKeyPress={checkKeyPress}/><br/>    
                            </div>
                            <button onClick={checkLogin}>Log in</button>
                        </div>
                    )
                }
            </div>
        </PageLayout>
    )
}


export default connect(
    ({ loginSuccess, user}) => ({loginSuccess, user}),
    { checkUser }
)(Login)
