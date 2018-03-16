import React from 'react';

const IndivProduct = (props) => {

  return (
		<div class="col s4 m4 l4">
      <div class="card medium">
        <div class="card-image">
          <img src={props.image} />
          <span class="card-title">{props.name}</span>
        </div>
        <div class="card-content">
          <h6> Product Description: </h6>
          <p>{props.desc}</p>
          <p>Price: ${props.price}</p>
        </div>
        <div class="card-action">
          <input type='submit' value='Add To Cart' onClick={() => props.onAddCartItem(props.product)}/>
        </div>
      </div>
    </div>
	)
}

export default IndivProduct;
