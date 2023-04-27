import React from 'react'
import PropTypes from 'prop-types'
import { AdopcePostTemplate } from '../../templates/adopce-post'

const AdopcePostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <AdopcePostTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      intro={data.intro || { blurbs: [] }}
      mainpitch={data.mainpitch || {}}
      heading={data.heading}
      subheading={data.subheading}


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
