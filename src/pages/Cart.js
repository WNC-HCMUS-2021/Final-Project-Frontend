import React from 'react';

function Cart(props) {
    const academyId = props.match.params.id;
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>Add to Cart: {academyId}</p>
        </div>
    )
}

export default Cart;
