import React from 'react';
import './App.css';
import CompareShowcase from "./pages/compare-showcase/compare-showcase";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TextToPathShowcase from "./pages/text-to-path-showcase/text-to-path-showcase";
import GcnShowcase from "./pages/gcn/gcn";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="showcases-container">
                    <Switch>
                        <Route path="/text-on-path-showcase">
                            <TextToPathShowcase/>
                        </Route>
                        <Route path="/compare-showcase">
                            <CompareShowcase/>
                        </Route>
                        <Route path="/gcn-showcase">
                            <GcnShowcase />
                        </Route>
                        <Route path="/">
                            <TextToPathShowcase/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
