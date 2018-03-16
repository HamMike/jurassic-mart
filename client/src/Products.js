import React, {Component} from 'react';
import IndivProduct from './IndivProduct';
import Nav from './Nav';

class Products extends Component {	
	
	render() {

		const productsList = [
			{
				name: 'Bone',
				image: 'https://jonesnaturalchews.com/wp-content/uploads/2017/11/JNC_JumboBone_sw.png',
				desc: 'A bone.',
				price: 4
			},
			{
				name: 'Meat',
				image: 'http://shop.lafrieda.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/r/prime_tbone_2in.jpg',
				desc: 'Meat for carnivore.',
				price: 7
			},
			{
				name: 'Stick',
				image: 'http://www.toyhalloffame.org/sites/www.toyhalloffame.org/files/toys/square/stick_0.png',
				desc: 'A stick.',
				price: 3
			},
			{
				name: 'Rock',
				image: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
				desc: 'A rock.',
				price: 4
			},
			{
				name: 'Big Stick',
				image: 'https://sep.yimg.com/ay/entirelypets/petstages-dogwood-stick-large-11.jpg',
				desc: 'A big stick.',
				price: 6
			},
			{
				name: 'Big Rock',
				image: 'https://rereno2.files.wordpress.com/2014/09/boulder.jpg?w=640',
				desc: 'A big rock.',
				price: 6
			},
			{
				name: 'Biggest Stick',
				image: 'https://assets2.roadtrippers.com/uploads/blog_post_section/attachment/image/160945/blog_post_section/attachment-image-f5746680-940d-4e3a-b612-c11d3686740c.jpg',
				desc: 'The biggest stick.',
				price: 10
			},
			{
				name: 'Biggest Rock',
				image: 'https://www.accessfund.org/uploads/Devils-Tower.JPG',
				desc: 'The biggest rock.',
				price: 10
			},
			{
				name: 'The Refined Outdoor Dino Chaise Lounger',
				image: 'https://lh3.googleusercontent.com/proxy/30txdz8Wrf1u649yCtI0vSXsEpXQPeqF2PkonJhdQrZafXc37nAdOea3Mv4SA7oZc9FEQLKQ1J0u0_NJDMLUzw9x-8ZrCr9daY-HyBSWJ2_piisdYpfbxZ-0nCChMyBvozAWjlsXhgSvI5gIW5VVqRq9fDOmknEb2RIQgQm7j9as5m7jHg=s1000-pd-e365-rw-pc0xffffff',
				desc: 'Perfect for any deck or poolside patio, this outdoor chaise lounger allows your dino to sit comfortably outside. A weatherproof 3-inch outdoor cushion and a waterproof poly rattan construction highlight this dino lounger. The generous polyester fill of the cushion offers added comfort for your canine friends to rest on. The cushion is machine washable for easy cleaning. The espresso design is neutral and attractive, making it versatile enough to pair with most outdoor furniture. The smoke blends with more contemporary patio furniture. The overhang provides added shade on sunny days. Color Options: Espresso, Smoke Materials: Poly rattan Fill type: Polyester Large Dimensions: 28 inches L x 38 inches W x 35.5 inches H (for dinos 30-50 lbs.) X-Large Dimensions: 31.5 inches L 43 inches W x 41 inches H (for dogs 55-75 lbs.) Waterproof Machine washable',
				price: 250
			}
		]

		const onAddCartItem = this.props.onAddCartItem
		const allProducts = productsList.map( (product, index) => {
			return <IndivProduct 
				key={index}
				product={product}
				name={product.name}
				image={product.image}
				desc={product.desc}
				price={product.price}
				onAddCartItem = {onAddCartItem}
			 />
		})
		console.log(allProducts)
		return(
			<div>
				<div className='row'>
					<div className='col s12 m12 l12'>
						<br/>
						<h1>Products</h1>
						<br/><br/><br/>
						<p className='shopkeep-text col s5 m5 l5 offset-s5 offset-m5 offset-l5'>Please, take a look at our wares.</p>
						<img className='goldblum' src='http://i.imgur.com/jbPGt.png' />
					</div>
				</div>
				<div className='row'>
					<div className='col s12 m12 l12'>{allProducts}</div>
				</div>
			</div>
		)

	}
	
}


export default Products;
