import { createElement } from 'react'
import { renderToPipeableStream } from 'react-server-dom-webpack/server'

const App = () => createElement('h1', null, 'Hello React 19!')
renderToPipeableStream(createElement(App)).pipe(process.stdout)