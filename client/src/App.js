import React from "react"
import logo from "./logo.svg"
import Invite from "./features/invite/Invite"
import IsGoing from "./features/invite/IsGoing"
import NotGoing from "./features/invite/NotGoing"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Invite />
        </Route>
        <Route path="/isgoing">
          <IsGoing />
        </Route>
        <Route path="/notgoing">
          <NotGoing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
