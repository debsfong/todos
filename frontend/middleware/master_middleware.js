import { applyMiddleware } from 'redux';
import todoMiddleware from './todo_middleware.js';

const masterMiddleware = applyMiddleware(todoMiddleware);

export default masterMiddleware;
