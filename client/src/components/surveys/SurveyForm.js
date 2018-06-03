// Show a form for a user to add input
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

class SurveyForm extends Component {
  render () {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          <Field
            type='text'
            name='surveyTitle'
            component='input'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

SurveyForm.propTypes = {
  handleSubmit: PropTypes.func // This function is provided by redux-form
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)
