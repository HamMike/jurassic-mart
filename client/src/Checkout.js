import React from 'react';

const Checkout = () => {
	return(
		<div className='row login'>
			   <form className="col s12 m12 l8 offset-l2">
			      <div className="row">
			        <div className="input-field col s6">
			          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
			          <label for="first_name">First Name</label>
			        </div>
			        <div className="input-field col s6">
			          <input id="last_name" type="text" className="validate"/>
			          <label for="last_name">Last Name</label>
			        </div>
			        </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="email" type="email" className="validate"/>
			          <label for="email">Email</label>
			        </div>
			      </div>
			      <div className='row'>
			      	<a className='waves-effect waves-light btn orange darken-1 z-depth-5' href='/'>Checkout and Submit</a> 
			      </div>
		      </form> 
		</div>
	)
}

export default Checkout;
