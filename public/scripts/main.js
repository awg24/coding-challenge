var React = require("react");
var ReactDOM = require("react-dom");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;

var Main = require("./components/Main");
var NotFound = require("./components/NotFound");
var Movie = require("./components/Movie");

var Test = require("./components/Test");

var container = document.getElementById("app");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        	<IndexRoute component={Movie} />
        	<Route path="/test" component={Test}  />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>,
    container
);