var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//loadgin foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>
      <Route path = "examples" components = {Examples}/>
      <Route path = "about" component = {About}/>
      <IndexRoute component = {Weather}/>
    </Route>
  </Router>,
  document.getElementById('app') //放到 app 那個位置去
);
