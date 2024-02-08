'use client'
import propTypes from 'prop-types'
import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export const SplineComponent = ({ style, scene, ...props }) => {
  return (
    <div>
      <Suspense fallback={<div />}>
        <Spline scene={scene} style={{ ...style }} {...props} />
      </Suspense>
    </div>
  )
}

SplineComponent.propTypes = {
  style: propTypes.object,
  scene: propTypes.string,
}
