import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'

const SurveyNew = () => <h2>SuveryNew</h2>

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired
}

export default connect(null, actions)(App)
