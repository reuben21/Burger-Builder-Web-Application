import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.module.css';
import Layout from './components/Layout/Layout';
import Orders from "./containers/Orders/Orders";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
    state = {
        show: true
    };


    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }

}

export default App;
