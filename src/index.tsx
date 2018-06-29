import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import ReactDOM from 'react-dom'
import GoogleFonts from 'google-fonts'
import ReactGA from 'react-ga'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import './index.css'

const App = () => (
  <Router>
    <div>
    	<Routes />
    </div>
  </Router>
)

export default hot(module)(App)

if (typeof document !== 'undefined') {
  ReactGA.initialize('UA-24389952-13')
  ReactGA.pageview(window.location.pathname)

  initOpbeat({
    orgId: 'bfc2d2b1867d4ade86c9030c6985cfa2',
    appId: '39e235ed58'
  })

  if ('serviceWorker' in navigator && window.location.protocol === 'https:') navigator.serviceWorker.register('/service-worker.js')
  else console.info(`[Offline] Don't support service work!`)

  GoogleFonts.add({
    'Roboto': 400,
    'Oswald': 600
  })

  const render = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  render(<App />, document.getElementById('root'))
}
