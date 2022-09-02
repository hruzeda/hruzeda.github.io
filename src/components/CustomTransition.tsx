import * as React from 'react'
import { Transition } from 'react-transition-group'

const duration = 300
const defaultStyle = {
  opacity: 0,
  height: 0
}

const transitionStyles = {
  entering: {
    opacity: 1,
    height: 'auto',
    display: 'block',
    transition: `opacity ${duration}ms, height 0s linear ${duration}ms`
  },
  entered: {
    opacity: 1,
    height: 'auto',
    transition: `height 0s, opacity 0s`
  },
  exiting: {
    opacity: 0,
    height: 0,
    transition: `opacity ${duration}ms, height 0s linear ${duration}ms`
  },
  exited: {
    opacity: 0,
    height: 0,
    display: 'none',
    transition: `height 0s, opacity 0s`
  },
  unmounted: { opacity: 0, height: 0 }
}

type CustomTransitionProps = {
  inProp: boolean
  children: React.ReactNode | React.ReactNode[]
}

export const CustomTransition = ({
  inProp,
  children
}: CustomTransitionProps) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        className='transition-target'
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        {children}
      </div>
    )}
  </Transition>
)
