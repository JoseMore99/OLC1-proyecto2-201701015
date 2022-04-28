
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import GraphvizPage from "./ast";

export function AppR() {


  return (
    <Router>
            <div>
                <Routes> 
                <Route  exact
                    path="/" >
                        <App/>
                        </Route>
                    <Route 
                         
                        path="/ast" >
                           <GraphvizPage/>
                    </Route>
                    
                   
                </Routes>
            </div>
        </Router>
    
  );
}

export default App;

