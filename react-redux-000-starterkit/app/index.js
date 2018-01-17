import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import HelloWorld from './components/HelloWorld';
import reducer from './reducers'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <HelloWorld
    text={store.getState()}
    onAnotherText={()=> store.dispatch({ type: 'ONANOTHERTEXT'})}
    onText={() => store.dispatch({ type: 'ONTEXT' })}
  />,
  rootEl
)

render()
store.subscribe(render)