import React from 'react'
import PropTypes from 'prop-types'

const MyButton = props => (
  <button>Hello {props.name}! ok</button>
)

MyButton.defaultProps = {
  name: 'Button'
}

MyButton.propTypes = {
  name: PropTypes.string
}

export default MyButton;
