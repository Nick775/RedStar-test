import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');

  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', []);
  return [];
};

const initialValue = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        console.log(todoListArr)
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateOneTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');

      if (todoList) {
        const todoListArr = JSON.parse(todoList);

        todoListArr.find(todo => {
          if(todo.id === action.payload.id) {
            todo.status = action.payload.status
          }
        })
      
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
          
        state.todoList = [...todoListArr];
      }
    },
    updateAllTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');

      if (todoList) {
        const todoListArr = JSON.parse(todoList);

        todoListArr.forEach((todo) => {  
          todo.status = action.payload.status;
        });
        
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
          
        state.todoList = [...todoListArr];
      }
    }
  },
});

export const { addTodo, updateAllTodo, updateOneTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
