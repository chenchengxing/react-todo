/**
 * @jsx React.DOM
 */

var React = require('react');

var ytFooter = React.createClass({

  render: function() {
    return (
      <footer>
        <span><strong>{this.props.leftCount}</strong>todo</span>
      </footer>
    );
  }

});

module.exports = ytFooter;