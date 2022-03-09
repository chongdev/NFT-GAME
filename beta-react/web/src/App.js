// import React from "react"
import { Route, Switch } from 'react-router-dom';

import MainHeader from './components/MainHeader';

import Home from './pages/Home'
import Airdrop from './pages/Airdrop'
import Marketplace from './pages/Marketplace'
import Inventory from './pages/Inventory'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/actions/counter';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return <div className='page-body'>
    <MainHeader />

    <div>
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/airdrop'><Airdrop /></Route>
        <Route path='/marketplace'><Marketplace /></Route>
        <Route path='/inventory'><Inventory /></Route>

      </Switch>

      <div>Counter : {counter}</div>
      <button onClick={()=>dispatch(increment)}>+</button>

      { isLogged ? 
      <button onClick={()=>dispatch(increment)}>logout</button>:<button>login</button> }
    </div>

  </div>
}

export default App