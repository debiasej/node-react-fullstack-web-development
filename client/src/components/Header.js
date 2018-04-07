import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href='/auth/google'>Login With Google</a></li>
      default:
        return <li><a href='/api/logout'>Logout</a></li>
    }
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo'>Email Surveys</a>
          <ul className='right'>
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  auth: PropTypes.object
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
