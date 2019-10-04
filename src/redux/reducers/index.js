import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import chartData from './testbarchart';

export default combineReducers({ todos, visibilityFilter, chartData });
