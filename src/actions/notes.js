import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes';

import * as api from '../api/index';

export const fetchNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateNote = (note, id) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    dispatch({ type: UPDATE, payload: { id, note } });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteNote(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
