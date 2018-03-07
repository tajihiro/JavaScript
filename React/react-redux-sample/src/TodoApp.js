import {connect} from 'react-redux';
import TodoApp from './containers/TodoApp';
import {inputTask, addTask } from './actions/tasks';

function mapStateToProps({ task, tasks}) {
    return{
        task,
        tasks
    };
}

function mapDispatchToProos(dispatch) {
    return{
        addTask(task){
            dispatch(addTask(task));
        },
        inputTask(task){
            dispatch(inputTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProos)(TodoApp);