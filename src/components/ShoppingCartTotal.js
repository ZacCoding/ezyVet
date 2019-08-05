import React from "react";
import { connect } from "react-redux";
import { getCartProductList } from "../redux/selectors";
import { getProducts } from "../redux/selectors";

const ShoppingCartTotal = ({cart}) => (
    this.total = 0,
    getProducts.forEach(({name, price}) => {
        this.count = 0
        cart.forEach(productName => {
            if(productName === name) {
                ++this.count
            }
        });
        if(this.count > 0) {
            this.total += price * this.count
        }
    }),
    <div>
        <h3>Your cart total is: ${this.total.toFixed(2)}</h3>
    </div>
);

const mapStateToProps = state => {
    const cart = getCartProductList(state)
    return { cart };
}

export default connect(mapStateToProps)(ShoppingCartTotal);