import './App.css';

import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Header from './components/share/Header';
import ChartsPage from './pages/system/report/Chart';



const OverviewPage = lazy(() => import('./pages/system/overview/Overvew'));
const ReportPage = lazy(() => import('./pages/system/report/Report'));




const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>

       <Header/>
       
      <Switch>
        {/* <Route exact path='/' component={HomePage}/> */}
        <Route exact path='/about' component={OverviewPage}/>
        <Route exact path='/my-system/overview' component={OverviewPage}/>
        <Route exact path='/my-system/report' component={ReportPage}/>
      </Switch>
      </Suspense>
    </Router>
  );
}


export default App;
