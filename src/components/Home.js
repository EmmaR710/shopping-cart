import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component{
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-content">
                        <p><b>{item.title}</b></p>
                        <p><b>Price: {item.price}$</b></p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
        )
        });
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
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

export default connect(mapStateToProps)(Home)
