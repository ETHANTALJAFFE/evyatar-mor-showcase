import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompareShowcase from "./pages/compare-showcase/compare-showcase";
import TextToPathShowcase from "./pages/text-to-path-showcase/text-to-path-showcase";

function App() {
    return (
        <div className="App">
            <div className="showcases-container">
                <TextToPathShowcase/>
                <CompareShowcase/>
            </div>
        </div>
    );
}

export default App;
