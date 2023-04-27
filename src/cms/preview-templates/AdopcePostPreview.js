import React from 'react'
import PropTypes from 'prop-types'
import { AdopcePostTemplate } from '../../templates/adopce-post'

const AdopcePostPreview = ({ entry, widgetFor }) => {
  return (
    <AdopcePostTemplate
      title={entry.getIn(['data', 'title'])}


    />
  )
}

AdopcePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AdopcePostPreview
