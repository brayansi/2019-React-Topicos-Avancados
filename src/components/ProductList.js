import React, { Component } from "react";
import { Channel } from "../services/EventService";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FormattedNumber } from "react-intl";

class ProductList extends Component {
    static defaultProps = {
        products: []
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    remove(product) {
        Channel.emit("product:remove", product.id);
    }

    render() {
        const { products } = this.props;
        return (
            <ul className="product-list">
                <TransitionGroup>
                    {products.map(product => (
                        <CSSTransition key={product.id} timeout={300} classNames="product">
                            <li className="product-list-item">
                                <button onClick={this.remove.bind(this, product)}> X </button>
                                <img src={product.image} />
                                <div>{product.description}</div>
                                <div>
                                    <FormattedNumber
                                        value={product.price}
                                        minimumFractionDigits={2}
                                        maximumFractionDigits={2}
                                    />
                                </div>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        );
    }
}

export default ProductList;
