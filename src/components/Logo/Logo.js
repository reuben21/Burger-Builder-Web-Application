import React from "react";
import burgerLogo from '../../components/Assets/Images/burger-logo.png.png'
import classes from './Logo.module.css'
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;