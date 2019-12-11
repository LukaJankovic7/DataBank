import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import HeaderStyles from './styles/header.module.scss'
import { signOut } from '../state/actions/user'
import Logo from '../assets/logo.png'

const Header = ({user, signOut}) => {
    return (
        <div className={HeaderStyles.container}>
            <p><img id={HeaderStyles.logo} src={Logo} /></p>
            {
                user==='default' ? (
                    <p>Guest</p>
                ) : (
                    <p>{user}</p>
                )
            }
            <br/>
                <ul className={HeaderStyles.links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/account">Your account</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {
                    user==='default' ? (<li className={HeaderStyles.login}>
                        <Link to='/login'>Log in</Link>
                    </li>) : (
                        <li className={HeaderStyles.login} onClick={signOut}><Link to='/'>Sign out</Link></li>
                    )
                }
        </div>
    )
}

export default connect(
    ({user}) => ({ user }), 
    { signOut }
)(Header)