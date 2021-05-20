import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes';
const initialState = [
  { _id: 1, title: 'test', details: 'test', category: 'todos' },
];

const noteReducer = (notes = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...notes, action.payload];
    case UPDATE:
      return notes.map((note) =>
        note.id === action.payload.id ? action.payload.data : note
      );
    case DELETE:
      return notes.filter((note) => note.id !== action.payload);
    default:
      return notes;
  }
};
export default noteReducer;
