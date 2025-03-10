import { createElement } from 'react'
import { renderToPipeableStream } from 'react-server-dom-webpack/server'
import path from 'node:path'

import Counter from './counter.mjs'

const App = () => createElement('div', null, 
    createElement('h1', null, 'Hello React 19!'),
    createElement(Counter)
)

const manifest = {
    [path.resolve('./counter.mjs')]: {
        id: '<id>',
        chunks: ['<chunk>'],
        name: 'default',
        async: true
    }
}
renderToPipeableStream(createElement(App), manifest).pipe(process.stdout)