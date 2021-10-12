import "./Menu.css";
import React,{lazy,Suspense} from "react";
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';

/*import Home from '../Home/index';
import About from '../About/index';
import Contact from '../Contact/index';*/

const Home=lazy(()=>import('../Home/index'));
const About=lazy(()=>import('../About/index'));
const Contact=lazy(()=>import('../Contact/index'));


function template() {
  const {menuItem,isMobileView,isShowMobileMenu}=this.state;
  return (
        <div>
         
          <ul style={{left:isShowMobileMenu ? 0 : -170}} onClick={this.fnMenuClick} className={isMobileView && 'mobile-view-ul'}>
        
           <li  className={menuItem == 'home' && 'menu-active'}><a id='home' href="#/home">Home</a></li>
           <li className={menuItem == 'about' && 'menu-active'}><a  id='about' href="#/about">About</a></li>
           <li  className={menuItem == 'contact' && 'menu-active'}><a id='contact' href="#/contact">Contact</a> </li>
      </ul>
       {isMobileView && <input onClick={this.fnMenuBtnClick.bind(this)} className="mobile-menu-btn" type='button' value="menu" /> }
       <Suspense fallback="Loading...">
       <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/home" component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} /> 
          <Redirect to='/home' />
          </Switch>
      </HashRouter>
      </Suspense>
      </div>
   
  );
};

export default template;
