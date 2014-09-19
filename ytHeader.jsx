/**
 * @jsx React.DOM
 */

var React = require('react');

var ytHeader = React.createClass({

  render: function() {
    return (
      <header>
        <h1>TODOs</h1>
        <input type="text" ref="inputss" onKeyDown={this.props.keydown}/>
        <button onClick={this.props.addTodo}>enter</button>
      </header>
    );
  }

});

module.exports = ytHeader;