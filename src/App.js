import * as React from 'react'
import AppRoute from './routes/AppRoute';
import {BrowserRouter} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <AppRoute></AppRoute>
            </BrowserRouter>
         
        </React.Fragment>
 
    )
  }
}

export default App
