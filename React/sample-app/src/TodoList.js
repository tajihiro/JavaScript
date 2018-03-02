import React, {Component} from 'react';
import InputItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props);
        console.log('TodoList.constructor');

        //EventHandler登録
        this.clickHandler = this.clickHandler.bind(this);
    };

    clickHandler(e){
        console.log(e.target.innerHTML);
        // var m = ["a","b","c"];
        // m.map(function(val, idx, ary) {console.log(idx + ":" + val + "=[" + ary + "]")});
        // m.reduce(function(pre, cur) {console.log(pre + " -> " + cur ); return pre + cur});

    };
    render(){
        const list = this.props.tasks.map(todo => {
            return <InputItem {...todo} key={todo.id}/> ;
        });
        return(
            <div>
                <ul onClick={this.clickHandler}>
                    {list}
                </ul>
            </div>
        );
    };

    componentWillMount(){
        console.log('TodoList.componentWillMount');
    }
    componentDidMount(){
        console.log('TodoList.componentDidMount');
    }
    componentWillReceiveProps(){
        console.log('TodoList.componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('TodoList.componentWillUnmount');
    }

}
export  default TodoList;