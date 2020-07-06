import React,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 1,
            cheese: 0,
            meat: 1
        },

    }
    checoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    checoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancelled={this.checoutCancelHandler}
                checkoutContinue={this.checoutContinueHandler}/>
            </div>
        );

    }
}

export default Checkout;
