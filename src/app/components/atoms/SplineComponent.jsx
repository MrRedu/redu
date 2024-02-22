'use client'
import Image from 'next/image'
import propTypes from 'prop-types'
import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

const SuspenseComponent = () => {
  return (
    <div>
      <Image
        src={'/avatar-1-1.webp'}
        width={350}
        height={350}
        alt="Developer Eduardo R."
      />
    </div>
  )
}

export const SplineComponent = ({ style, scene, ...props }) => {
  return (
    <div>
      <Suspense fallback={<SuspenseComponent />}>
        <Spline scene={scene} style={{ ...style }} {...props} />
      </Suspense>
    </div>
  )
}

SplineComponent.propTypes = {
  style: propTypes.object,
  scene: propTypes.string,
}
