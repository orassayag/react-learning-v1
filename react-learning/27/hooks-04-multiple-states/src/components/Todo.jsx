import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import axios from 'axios';
import List from './List';
import { useFormInput } from '../hooks/forms';

const todo = props => {
  const [inputIsValid, setInputIsValid] = useState(false);
  // const [todoName, setTodoName] = useState('');
  // const [submittedToDo, setSubmittedToDo] = useState(null);
  // const [todoList, setTodoList] = useState([]);
  //   const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });
  // const todoInputRef = useRef();
  const todoInput = useFormInput()

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET':
        return action.payload;
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);

  useEffect(() => {
    axios.get('https://test-68750.firebaseio.com/todos.json').then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({ id: key, name: todoData[key].name })
      }
      dispatch({ type: 'SET', payload: todos });
    });
    return () => {
      console.log('Cleanup')
    };
  }, []);

  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
  };

  /*   useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }); */

  /*   useEffect(() => {
      if (submittedToDo) {
        dispatch({ type: 'ADD', payload: submittedToDo });
      }
    }, [submittedToDo]); */
  /*
    const inputChangeHandler = event => {
      // setTodoState({
      //   userInput: event.target.value,
      //   todoList: todoState.todoList
      // });
      setTodoName(event.target.value);
    }; */

  const todoAddHandler = () => {


    axios
      .post('https://test-68750.firebaseio.com/todos.json', { name: todoInput.value })
      .then(res => {
        setTimeout(() => {
          const todoItem = { id: res.data.name, name: todoInput.value };
          dispatch({ type: 'ADD', payload: todoItem });
        }, 3000);
        //setTodoList(todoList.concat(todoItem));
      })
      .catch(err => {
        console.log(err);
      });

    /*     const todoName = todoInputRef.current.value */

    // setTodoState({
    //   userInput: todoState.userInput,
    //   todoList: todoState.todoList.concat(todoState.userInput)
    // });
    /*     axios
          .post('https://test-68750.firebaseio.com/todos.json', { name: todoName })
          .then(res => {
            setTimeout(() => {
              const todoItem = { id: res.data.name, name: todoName };
              dispatch({ type: 'ADD', payload: todoItem });
            }, 3000);
            //setTodoList(todoList.concat(todoItem));
          })
          .catch(err => {
            console.log(err);
          }); */
  };

  const todoRemoveHandler = (todoId) => {
    axios
      .delete(`https://test-68750.firebaseio.com/todos/${todoId}.json`)
      .then(res => {
        dispatch({ type: 'REMOVE', payload: todoId })
      })
      .catch(err => {
        console.log(err);
      });
  };

  const inputValidatorHandler = (e) => {
    if (e.target.value.trim() === '') {
      setInputIsValid(false);
    }
    else {
      setInputIsValid(true);
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={todoInput.onChange}
        value={todoInput.value}
        /*         ref={todoInputRef}
                onChange={inputValidatorHandler} */
        /*         style={{ backgroundColor: inputIsValid ? 'transparent' : 'red' } */
        style={{ backgroundColor: todoInput.validity ? 'transparent' : 'red' }}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      {useMemo(() => {
        return <List
          items={todoList}
          onClickHandler={todoRemoveHandler}
        />
      }, [todoList])}
    </React.Fragment>
  );
};

export default todo;
