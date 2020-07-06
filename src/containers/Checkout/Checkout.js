import React,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients={};
        for (let param of query.entries()){
            ingredients[param[0]]=+param[1]
        }
        this.setState({ingredients:ingredients})
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
