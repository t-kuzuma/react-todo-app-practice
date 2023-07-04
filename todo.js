var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.state = {
      items: JSON.parse(localStorage.getItem("items")) || [],
      text: ""
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handleUpdate = _this.handleUpdate.bind(_this);
    return _this;
  }

  _createClass(TodoApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "TodoList"
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("label", { htmlFor: "new-todo" }),
          React.createElement("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
          }),
          React.createElement(
            "button",
            null,
            "\u30BF\u30B9\u30AF\u3092\u8FFD\u52A0"
          )
        ),
        React.createElement(TodoList, {
          items: this.state.items,
          handleDelete: this.handleDelete,
          handleUpdate: this.handleUpdate
        })
      );
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(function (state) {
        var newItems = state.items.concat(newItem);
        localStorage.setItem("items", JSON.stringify(newItems));
        return {
          items: newItems,
          text: ""
        };
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(id) {
      this.setState(function (state) {
        var newItems = state.items.filter(function (item) {
          return item.id !== id;
        });
        localStorage.setItem("items", JSON.stringify(newItems));
        return { items: newItems };
      });
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(id, text) {
      this.setState(function (state) {
        var newItems = state.items.map(function (item) {
          return item.id === id ? Object.assign({}, item, { text: text }) : item;
        });
        localStorage.setItem("items", JSON.stringify(newItems));
        return { items: newItems };
      });
    }
  }]);

  return TodoApp;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "ul",
        null,
        this.props.items.map(function (item) {
          return React.createElement(Todo, {
            item: item,
            key: item.id,
            handleDelete: _this3.props.handleDelete,
            handleUpdate: _this3.props.handleUpdate
          });
        })
      );
    }
  }]);

  return TodoList;
}(React.Component);

var Todo = function (_React$Component3) {
  _inherits(Todo, _React$Component3);

  function Todo(props) {
    _classCallCheck(this, Todo);

    var _this4 = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

    _this4.state = { isEdit: false, text: _this4.props.item.text };
    _this4.handleEdit = _this4.handleEdit.bind(_this4);
    _this4.handleChange = _this4.handleChange.bind(_this4);
    _this4.handleSave = _this4.handleSave.bind(_this4);
    return _this4;
  }

  _createClass(Todo, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.isEdit) {
        return React.createElement(
          "div",
          null,
          React.createElement("input", {
            type: "text",
            value: this.state.text,
            onChange: this.handleChange
          }),
          React.createElement(
            "button",
            { onClick: this.handleSave },
            "\u4FDD\u5B58"
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this5.props.handleDelete(_this5.props.item.id);
              } },
            "\u524A\u9664"
          )
        );
      } else {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "li",
            null,
            this.props.item.text
          ),
          React.createElement(
            "button",
            { onClick: this.handleEdit },
            "\u7DE8\u96C6"
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this5.props.handleDelete(_this5.props.item.id);
              } },
            "\u524A\u9664"
          )
        );
      }
    }
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      this.setState({ isEdit: true });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.props.handleUpdate(this.props.item.id, this.state.text);
      this.setState({ isEdit: false });
    }
  }]);

  return Todo;
}(React.Component);

var todo_app = ReactDOM.createRoot(document.getElementById("todo_app"));
todo_app.render(React.createElement(TodoApp, null));