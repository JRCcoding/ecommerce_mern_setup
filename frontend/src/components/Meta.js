import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Stony Hill Essentials, LLC',
  description:
    'We create products that empower people to be confident in their own skin. Because being beautiful should be effortless. A natural feeling of freedom.',
  keywords:
    'skincare, skin products, products, skin, care, soap, cleanliness, lashes',
}

export default Meta
