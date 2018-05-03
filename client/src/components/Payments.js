import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

// This component wraps the Stripe Checkout
class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        name='Email Surveys'
        description='$5 for 5 email credits'
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>Add credits</button>
      </StripeCheckout>
    )
  }
}

export default Payments
