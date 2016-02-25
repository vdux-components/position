/**
 * Imports
 */

import test from 'tape'
import vdux from 'vdux/dom'
import Position from '../src'
import element from 'vdux/element'

/**
 * Tests
 */

test('should work', t => {
  t.deepEqual(check('left'), {left: -60, top: 5})
  t.deepEqual(check('right'), {left: 90, top: 5})
  t.deepEqual(check('top'), {left: 15, top: -70})
  t.deepEqual(check('bottom'), {left: 15, top: 80})

  t.end()
})

/**
 * Helpers
 */

function run (app, initialState = {}) {
  return vdux({
    app,
    reducer: state => state,
    initialState
  })
}

function check (placement) {
  document.body.style.margin = '0px'
  document.body.style.position = 'relative'

  const {stop} = run(() => (
    <div>
      <div id='test' style={{position: 'relative', width: 50, height: 50, left: 40, top: 30}}></div>
      <Position placement={placement} near='test'>
        <div id='tooltip' style={{position: 'absolute', height: 100, width: 100}}></div>
      </Position>
    </div>
  ))

  var node = document.getElementById('tooltip')
  return {
    left: Number(node.style.left.slice(0, -2)),
    top: Number(node.style.top.slice(0, -2))
  }
}
