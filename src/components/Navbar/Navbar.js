import React, { Component } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { MenuItems } from './MenuItems'
import { iteratorSymbol } from 'immer/dist/internal'


const Navbar = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    let history = useHistory()

    const returnHome = () => {
        history.push("/")
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React<i className="fab fa-react1"></i></h1>
            <div className="menu-icon">

            </div>
            <ul>
                {MenuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url} >
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    ) 
}
    
    export default Navbar