import React from 'react'
import PropTypes from 'prop-types'
import { AdopcePostTemplate } from '../../templates/adopce-post'

const AdopcePostPreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <AdopcePostTemplate
      image={getAsset(data.image)}
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      intro={data.intro || { blurbs: [] }}
      heading={data.heading}
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
