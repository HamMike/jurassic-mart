import React from 'react';

const Cart = (props) => {
	// getting price of items from cartItems
	let itemPrices = props.cartItems.map((item, index) => {
		return item.price
	})
	// summing the totals of the itemPrices
	let total = itemPrices.reduce((sum, price) => {
		return sum + price
	})
	let cartItems = props.cartItems.map((item, index) => {
		return (
			<div key={index} className='col s4 m4 l4'>
		            <div class="card small">
		              <div class="card-image">
		                <img src={item.image} />
		                <span class="card-title">{item.name}</span>
		              </div>
		              <div class="card-content">
		                <h6> Product Description: </h6>
		                <p>{item.desc}</p>
		                <p>Price: {item.price} pretty rocks</p>
		              </div>
		            </div>
			</div>
		)
	})
	return(
		<div>
			<div className='row cart'>
				<div className='col s6 m6 l6'><div className='row'>{cartItems}</div></div>
				<div className='col s6 m6 l6 total'>
					<img className='responsive-img dino' src='https://vignette.wikia.nocookie.net/jurassicfightclub/images/c/cd/Stegosaurus.png/revision/latest?cb=20121003014145' />
					<h1>Total:</h1>
					<p>{total} pretty rocks</p>
					<a href='/checkout'>Checkout Now</a> 
				</div>

			</div>

		</div>
	)
}

export default Cart;