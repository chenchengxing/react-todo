/**
 * @jsx React.DOM
 */
// var React = require('react');

// var view = require('./view.jsx'); // need to specify the jsx extension
// React.renderComponent(<view />, document.getElementById('content'));


var React = require('react');

var app = require('./app.jsx'); // need to specify the jsx extension
React.renderComponent(<app />, document.getElementById('content'));