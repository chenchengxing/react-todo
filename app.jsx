/**
 * @jsx React.DOM
 */

var React = require('react');
var ytHeader = require('./ytHeader.jsx');
var ytListItem = require('./ytListItem.jsx');
var ytFooter = require('./ytFooter.jsx');

var app = React.createClass({
  /* 点击了添加todo */
  addTodo: function () {
    // console.log('add', this.refs.headerRef.refs.inputss.getDOMNode().value);
    //这里通过ref取input的值，不知道有没有更好的办法
    var inputValue = this.refs.headerRef.refs.inputss.getDOMNode().value.trim();
    if (!inputValue.length) {
      return;
    }
    //清空input,只能这样？
    this.refs.headerRef.refs.inputss.getDOMNode().value = '';
    var list = this.state.list;
    list.push({name: inputValue});
    //虽然拿到了list的引用，但是改变list的值并没有更新dom，我们调用setState方法来更新
    this.setState({
      list: list
    });
  },
  /* 回车:) */
  kdHandler: function (event) {
    if (event.which !== 13) {
      return;
    }
    this.addTodo();
  },
  getInitialState: function() {
    return {
      list: [],
      completeList: []
    };
  },
  itemClick: function (item) {
    item.isCompleted = true;
    this.forceUpdate();//我。。。$digest...
    // console.log(item);
    // 实在不知道怎么获取list里面的数据啊，求指导。。
    // var itemName = event.target.parentNode.firstChild.textContent;
    // var itemName = item.name;
    // var list = this.state.list;
    // var matchItem;
    // for (var i = 0; i < list.length; i++) {
    //   if (list[i].name === itemName) {
    //     matchItem = list.pop(i);
    //     break;
    //   }
    // }
    // this.setState({
    //   list: list,
    //   completeList: this.state.completeList.push(matchItem)
    // })
  },
  render: function() {
    var self = this;
    var list = this.state.list;

    var todoItems = list.filter(function (item) {
      return !item.isCompleted;
    }, this);

    todoItems = todoItems.map(function (item) {
      return <ytListItem name={item.name} itemClick={self.itemClick.bind(this, item)}></ytListItem>
    }, this);

    var footer;
    if (todoItems.length) {
      footer = <ytFooter leftCount={todoItems.length}></ytFooter>
    } else {
      footer = null;
    }
    return (
      <div>
        <ytHeader addTodo={this.addTodo} ref="headerRef" keydown={this.kdHandler} />
        <ul>
          {
            todoItems
          }
        </ul>
        {footer}
      </div>
    );
  }

});

module.exports = app;