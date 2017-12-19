import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ description }) => (
    <div>
        <h1>{ description }</h1>
    </div>
)

Error.prototype = {
  description: PropTypes.string.isRequired
}

export default Error
