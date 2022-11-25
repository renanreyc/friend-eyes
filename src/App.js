
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";
import Header from "./components/header/Header.component";
import Welcome from "./pages/Welcome";
import Meet from "./pages/Meet";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { userReducer } from "./store/reducer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

export const store = createStore(userReducer);

function App(props) {
  return (
    <>
    
    <div>
      <Router>
          <Header />
        <div className="App">
         <Routes>
          <Route path="/" element={ 
            <Provider store={store}>
              <Meet props={props}/>
            </Provider>
          } />
          
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
    
        </Routes> 
        </div>

      </Router>
    </div>
    </>

  );
}

export default (App);

