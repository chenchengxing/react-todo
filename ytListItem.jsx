/**
 * @jsx React.DOM
 */

var React = require('react');

var ytListItem = React.createClass({

  render: function() {
    // var list = this.props.list;
    // var self = this;
    return (
      <li>
        {this.props.name}
        <a onClick={this.props.itemClick} className="btn-done">mark as DONE</a>
      </li>
    );
  }

});

module.exports = ytListItem;