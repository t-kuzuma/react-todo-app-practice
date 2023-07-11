class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem("items")) || [],
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TodoList</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo"></label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>タスクを追加</button>
        </form>
        <TodoList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => {
      const newItems = state.items.concat(newItem);
      localStorage.setItem("items", JSON.stringify(newItems));
      return {
        items: newItems,
        text: "",
      };
    });
  }

  handleDelete(id) {
    this.setState((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(newItems));
      return { items: newItems };
    });
  }

  handleUpdate(id, text) {
    this.setState((state) => {
      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, text: text } : item
      );
      localStorage.setItem("items", JSON.stringify(newItems));
      return { items: newItems };
    });
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        ))}
      </ul>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false, text: this.props.item.text };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  render() {
    if (this.state.isEdit) {
      return (
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSave}>保存</button>
          <button onClick={this.handleCancel}>キャンセル</button>
          <button onClick={() => this.props.handleDelete(this.props.item.id)}>
            削除
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <li>{this.props.item.text}</li>
          <button onClick={this.handleEdit}>編集</button>
          <button onClick={() => this.props.handleDelete(this.props.item.id)}>
            削除
          </button>
        </div>
      );
    }
  }

  handleEdit() {
    this.setState({ text: this.props.item.text, isEdit: true });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSave() {
    this.props.handleUpdate(this.props.item.id, this.state.text);
    this.setState({ isEdit: false });
  }

  handleCancel() {
    this.setState({ isEdit: false });
  }
}

const todoApp = ReactDOM.createRoot(document.getElementById("todo-app"));
todoApp.render(<TodoApp />);
