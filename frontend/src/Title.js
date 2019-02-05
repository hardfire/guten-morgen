import React, { Component } from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => {
  document.title = title
  return null
}

Title.propTypes = {
  title: PropTypes.String
}

Title.defaultProps = {
  title: "WordCamp 2019"
}

export default Title
