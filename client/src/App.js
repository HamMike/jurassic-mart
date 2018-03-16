import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Nav from './Nav';
import Signup from './Signup.js';
import Login from './Login.js';
import UserProfile from './UserProfile.js';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';


class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			token: '',
			user: {},
			cartItems: []
		}

		//binding
		this.liftTokenToState = this.liftTokenToState.bind(this)
		this.logout = this.logout.bind(this)
		this.addCartItem = this.addCartItem.bind(this)

	}

	liftTokenToState(data) {
		this.setState({
			token: data.token,
			user: data.user
		})
	}

	logout() {
		console.log('log out')
		localStorage.removeItem('mernToken')
		this.setState({token: '', user: {}})
	}

	addCartItem(item) {
		//get the item and add to the state array
		// cartItems: [...cartItems, item]
		this.setState({
			cartItems: [...this.state.cartItems, item]
		})
	}


	componentDidMount() {
		//immediately sets token to mernToken if there is one there
		var token = localStorage.getItem('mernToken')
		//checks to see if something got fucked with the token
		//and if it did, it resets the state.token to blank
		//if it's a valid thing, it'll create it. and reset the localStorage
		if (token === 'undefined' || token === null || token === '' || token === undefined ){
			localStorage.removeItem('mernToken')
			this.setState({
				token: '',
				user: {}
			})
		} else {
			//reauthenticate this token
			axios.post('/auth/me/from/token', {
				token: token
			}).then( result => {
				localStorage.setItem('mernToken', result.data.token)
				this.setState({
					token: result.data.token,
					user: result.data.user
				})
			}).catch(err => console.log(err))
		}
	}

	render() {
		// const inCart = this.state.cartItems.map( (product, index) => {
		// 	return <Cart
		// 		key={index}
		// 		name={product.name}
		// 		image={product.image}
		// 		desc={product.desc}
		// 		price={product.price}
		// 	 />
		// })

		return(
			<Router>
				<div>
					<Nav />
				    <Route exact path='/' component={Home} />
				    <Route exact path='/Products' component={() => <Products onAddCartItem={this.addCartItem}/> } />
				    <Route exact path='/Login' component={() => <Login />} />
				    <Route exact path='/Signup' component={Signup} />
				    <Route exact path='/Cart' component={() => <Cart cartItems={this.state.cartItems} /> } />
				</div>
			</Router>
		)


		// let theUser = this.state.user
		// //if the type of theUser is an object and there's a length,
		// //then the user is logged in and can see the user profile + logout link.
		// //otherwise it shows the log in / sign up link

		// if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
		// 	return (
		// 		<div>
		// 			<UserProfile user={this.state.user} logout={this.logout} />
		// 		</div>
		// 	)
		// } else {
		// 	return (
		// 	  <div className="App">
		// 	  	<Signup liftToken={this.liftTokenToState}/>
		// 	  	<Login liftToken={this.liftTokenToState}/>
		// 	  </div>
		// 	)
		// }
	}
}

export default App;
