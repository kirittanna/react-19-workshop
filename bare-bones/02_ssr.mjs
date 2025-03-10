import { createElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'

const App = () => createElement('h1', null, 'Hello React 19!')
renderToPipeableStream(createElement(App)).pipe(process.stdout)