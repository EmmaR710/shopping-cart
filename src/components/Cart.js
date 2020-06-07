import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity } from './actions/cartActions';

class Cart extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
    };

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    };

    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    };

    render(){
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(
                        <li className="card" key={item.id}>
                            <div className="card-content">
                                <span className="title">{item.title}</span>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="btn btn-info" onClick={()=>{this.handleAddQuantity(item.id)}}>Increase quantity</i></Link>
                                    <Link to="/cart"><i className="btn btn-info" onClick={()=>{this.handleSubtractQuantity(item.id)}}>Decrease quantity</i></Link>
                                </div>
                                <button className="btn btn-danger" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </div>

                        </li>
                    )
                })
            ):
            (
                <p>Nothing.</p>
            );
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <h5>Total: {this.props.total}</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
};
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
