import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  REPLICATE_CHART,
  LOAD_CHART
} from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const replicateChart = orangeData => ({
  type: REPLICATE_CHART,
  payload: { orangeData }
});

export const loadChart = orangeData => ({
  type: LOAD_CHART
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
