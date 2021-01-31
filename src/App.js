import Home from "./pages/Home"
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import React from "react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
