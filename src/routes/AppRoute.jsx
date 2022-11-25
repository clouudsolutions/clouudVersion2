import * as React from 'react'
import {Routes,Route} from 'react-router'
import HomePage from '../pages/HomePage'
class AppRoute extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </React.Fragment>
    )
  }
}

export default AppRoute
