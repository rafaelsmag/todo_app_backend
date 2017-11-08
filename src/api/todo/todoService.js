import TodoModel from './todo';

TodoModel.methods(['get', 'put', 'post', 'delete']);
TodoModel.updateOptions({ new: true, runValidators: true });

export default TodoModel;
