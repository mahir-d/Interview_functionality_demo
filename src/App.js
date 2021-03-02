import './App.css';
import React from 'react';
import Feedback from './Components/Feedback';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Interview from './Components/Interview'
function App() {
    return (
        <Router>
             <div className="App">
                {/* <Interview></Interview> */}



                <Switch>
                    <Route path="/" component={Interview}>

                    </Route>
                    <Route exact path="/feedback" component={Feedback}>
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
