import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Error from '../../components/warning/Error'

class ErrorDescription extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired
  }

  render() {
    const { description } = this.props
    return (
      <Error description = {'404'} />
    )
  }
}

export default ErrorDescription
