import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));
/**
 * load module dynamical
 */
function loadModuleApp() {
  var Root;
  import('./Root').then(function(appModule) {
    Root = appModule.default;
    ReactDOM.render(<Root />, document.getElementById('root'));
  });
  //.then(function(itemsModule) {
  //let pandaMenu = new Menu({
  //title: 'Меню панды 3',
  //items: itemsModule.menuItems,
  //});
  ////ReactDOM.render(<App />, document.getElementById('root'));
  //document.body.appendChild(pandaMenu.container);
  //});
}

// TODO: call on init (it temporary)
loadModuleApp()

export {loadModuleApp};
