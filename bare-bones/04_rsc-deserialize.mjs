import { createElement } from 'react'
import { renderToPipeableStream } from 'react-server-dom-webpack/server'
import { createFromNodeStream } from 'react-server-dom-webpack/client.node.unbundled'
import { PassThrough } from 'stream'

const passThrough = new PassThrough();
const App = () => createElement('h1', null, 'Hello React 19!')
renderToPipeableStream(createElement(App)).pipe(passThrough)
createFromNodeStream(passThrough, {
    moduleMap: {},
    moduleLoading: {}
}).then(console.log)