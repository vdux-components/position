
# position

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Positioning component. Use this to position elements in complex ways relative to other elements (e.g. tooltips).

## Installation

    $ npm install vdux-position

## Usage

You can use Position to display things like tooltips that need to be positioned relative to some other element. E.g.

```javascript
import Hover from 'vdux-hover'
import Position from 'vdux-position'

function Tooltip ({path, props, children}) {
  const {placement, message} = props

  return (
    <span id={path}>
      <Hover>
        {children}
        {
          hover => hover && (
            <Position placement={placement} near={path}>
              <div class='tooltip'>{message}</div>
            </Position>
          )
        }
      </Hover>
    </span>
  )
}
```

## API - props

  * `placement` - `top/left/bottom/right`. Where to put the element relative to the `near` element.
  * `near` - The string ID of the element you want to position `<Postion/>`s child near. If unspecified, the nearest positioned element will be used.
  * `children` - You may only pass one child to position. Its child will be rendered around the `near` element.

## License

MIT
