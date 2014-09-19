var React = require('react');
var DE = require('./DemonEdge.jsx');

var MyView = React.createClass({
  render: function(){
    return (
      <div>
        Example
        <DE />
      </div>
    );
  }
});
module.exports = MyView;