import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';

export default function AppRouter() {
  return <div className="router">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route component={WelcomePage} />
      {/* <Route path="/episodes" component={} /> */}
    </Switch>
  </div>

}