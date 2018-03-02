import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      console.log('App.constructor');
      this.state = {
          tasks: [
          ],
          uniqueId: 1,
      };
      //
      this.addTodo = this.addTodo.bind(this);
      this.resetTodo = this.resetTodo.bind(this);

  };

  addTodo(title){
      console.log('addTodo');
      const {tasks,
             uniqueId,
      } = this.state;
      tasks.push({
          title,
          id: uniqueId,
      });
      this.setState({
          tasks,
          uniqueId: uniqueId + 1,
      });
  };

  resetTodo(){
      console.log('resetTodo');
      this.setState({
          tasks: []
      });
  }

  render() {
    return (
        <div>
            <h3>TODO アプリ</h3>
            <TodoInput addTodo={this.addTodo}/>
            <TodoList tasks={this.state.tasks}/>
            <button onClick={this.resetTodo}>リセット</button>
        </div>
    );
  }
}

export default App;
