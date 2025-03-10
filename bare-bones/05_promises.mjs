import { createElement } from 'react'
import { renderToPipeableStream } from 'react-server-dom-webpack/server'

const App = () => ['Hello', new Promise(resolve => setTimeout(() =>resolve('World'), 2000))]
renderToPipeableStream(createElement(App)).pipe(process.stdout)