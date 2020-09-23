import React from "react";
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavgiationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux1'
const sideDrawer = (props) => {
    let attachedClasses=[classes.SideDrawer,classes.Close]
    if (props.open){
        attachedClasses =[classes.SideDrawer,classes.Open]
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>

            <nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>

        </div>
        </Aux>
    );
};

export default sideDrawer;
