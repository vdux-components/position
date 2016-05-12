/**
 * Imports
 */

import element from 'vdux/element'
import position from '@f/position-element'

/**
 * Position
 */

function render ({children}) {
  if (children.length > 1) throw new Error('Position component accepts only 1 child')
  return children[0]
}

function afterRender ({props}, node) {
  const {placement, near, space = 0, disable = false} = props

  if (!disable) {
    position(node, placement, {
      near: near ? document.getElementById(near) : node.parentNode,
      space
    })
  }
}

/**
 * Exports
 */

export default {
  render,
  afterRender
}
