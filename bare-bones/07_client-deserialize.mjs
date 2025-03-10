import path from 'node:path'
import { createElement } from 'react'
import { renderToPipeableStream } from 'react-server-dom-webpack/server'
import { createFromNodeStream } from 'react-server-dom-webpack/client.node.unbundled'
import { PassThrough } from 'stream'

import Counter from './counter.mjs'

const App = () => createElement('div', null, 
    createElement('h1', null, 'Hello React 19!'),
    createElement(Counter)
)

const manifest = {
    [path.resolve('./counter.mjs')]: {
        id: './counter.mjs',
        chunks: ['./counter.mjs'],
        name: 'default',
        async: true
    }
}

const config = {
    './counter.mjs': { default: {} }
}

const passThrough = new PassThrough();
renderToPipeableStream(createElement(App), manifest).pipe(passThrough)
createFromNodeStream(passThrough, config).then(x => console.dir(x, { depth: 6 }))