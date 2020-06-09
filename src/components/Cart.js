import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                                    <button className="btn btn-info" onClick={()=>{this.handleAddQuantity(item.id)}}>Quantity &#9650;</button>
                                    <button className="btn btn-info" onClick={()=>{this.handleSubtractQuantity(item.id)}}>Quantity &#9660;</button>
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
                <h3 className="center">You have ordered:</h3>
                <div className="items-list" style={{display: "flex"}}>
                    {addedItems}
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
