import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

// This component wraps the Stripe Checkout
class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        name='Email Surveys'
        description='$5 for 5 email credits'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>Add credits</button>
      </StripeCheckout>
    )
  }
}

Payments.propTypes = {
  handleToken: PropTypes.func
}

export default connect(null, actions)(Payments)
