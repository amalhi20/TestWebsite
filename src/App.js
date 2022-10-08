import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import Test1 from './components/pages/Test1'
import Test2 from './components/pages/Test2'


import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>    
   
        <Layout>
          <Routes>            
            <Route path={'/Test1'} exact element={<Test1/>}></Route>
            <Route path={'/Test2'} exact element={<Test2/>}></Route>
            <Route path={'/'} exact element={<Home/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
