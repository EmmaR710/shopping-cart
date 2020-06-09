import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class Home extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    };

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-body">
                        <p><b>{item.title}</b></p>
                        <p>Price: {item.price}</p>
                        <button className="btn btn-primary" onClick={()=>{this.handleClick(item.id)}}>Add to cart</button>
                    </div>
                </div>
        )
        });
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="items-list" style={{display: "flex"}}>
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
};
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)
