import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';

/**
 * load module dynamical
 */
function loadModuleApp() {
  var App;
  import('./App').then(function(appModule) {
    App = appModule.default;
    ReactDOM.render(< App />, document.getElementById('root'));
    //return import('./fixtures');
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

export {loadModuleApp};
