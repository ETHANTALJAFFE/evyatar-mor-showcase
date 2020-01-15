import React from 'react';
import './App.css';
import CompareShowcase from "./pages/compare-showcase/compare-showcase";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TextOnPathShowcase from "./pages/text-on-path-showcase/text-on-path-showcase";
import GcnShowcase from "./pages/gcn/gcn";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="showcases-container">
                    <Switch>
                        <Route path="/text-on-path-showcase">
                            <TextOnPathShowcase/>
                        </Route>
                        <Route path="/compare-showcase">
                            <CompareShowcase/>
                        </Route>
                        <Route path="/gcn-showcase">
                            <GcnShowcase />
                        </Route>
                        <Route path="/">
                            <TextOnPathShowcase/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
