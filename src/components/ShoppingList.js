import { getProducts } from "../redux/selectors";
import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";

class ShoppingList extends React.Component {
    render() {
      return (
        getProducts.map(({name, price}, index) => {
            return <div key={index}>
                <span>
                <p>{name} - ${price.toFixed(2)}
                    <button className="add-item" onClick={() => this.props.addToCart(name)}>
                        Add To Cart
                    </button>
                </p>
                </span>
            </div>
        })
      );
    }
}

export default connect(null,{addToCart})(ShoppingList);