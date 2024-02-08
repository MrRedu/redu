'use client'
import Image from 'next/image'
import propTypes from 'prop-types'
import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export const SplineComponent = ({ style, scene, ...props }) => {
  return (
    <div>
      <Suspense
        fallback={
          <Image src={'/avatar.png'} width={200} height={200} alt="loading" />
        }
      >
        <Spline scene={scene} style={{ ...style }} {...props} />
      </Suspense>
    </div>
  )
}

SplineComponent.propTypes = {
  style: propTypes.object,
  scene: propTypes.string,
}
