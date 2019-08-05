import React from "react";
import { connect } from "react-redux";
import { getCartProductList } from "../redux/selectors";
import { removeFromCart } from "../redux/actions";
import { getProducts } from "../redux/selectors";

const ShoppingCart = ({cart, removeFromCart}) => (
    getProducts.map(({name, price}, index) => {
        this.count = 0
        cart.forEach(productName => {
            if(productName === name) {
                ++this.count
            }
        });
        if(this.count > 0) {
            return <div key={index}>
                    <p>Product name: {name} - Price: ${price.toFixed(2)} - Quantity: {this.count} - Total: ${calculateTotal(price, this.count)} 
                        <button className="add-item" onClick={() => removeFromCart(name)}>
                            Remove From Cart
                        </button>
                    </p>
                </div>
        }
    })
);

const calculateTotal = (price, quantity) => {
    this.total = (price * quantity).toFixed(2)
    return this.total
}

const mapStateToProps = state => {
    const cart = getCartProductList(state)
    return { cart };
}

export default connect(mapStateToProps, {removeFromCart} )(ShoppingCart);