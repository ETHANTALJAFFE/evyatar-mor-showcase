import React from 'react';
import './App.css';
import CompareShowcase from "./pages/compare-showcase/compare-showcase";
import TextToPathShowcase from "./pages/text-to-path-showcase/text-to-path-showcase";

function App() {
    return (
        <div className="App">
            <div className="showcases-container">
                <TextToPathShowcase/>
            </div>
        </div>
    );
}

export default App;
