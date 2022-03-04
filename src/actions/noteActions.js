import { ActionTypes } from "../constants/action-types";

export const setNotes = (notes) => {
  return {
    type: ActionTypes.SET_NOTES,
    payload: notes,
  };
};

export const setFilteredNotes = (notes) => {
  return {
    type: ActionTypes.SET_FILTERED_NOTES,
    payload: notes,
  };
  
};

export const listView = (flag) => {
    return {
      type: ActionTypes.LIST_VIEW,
      payload: flag,
    };
};

export const addNewNote = (note) => {
    console.log("Note", note);
    return {
      type: ActionTypes.ADD_NEW_NOTE,
      payload: note,
    };
  };

  export const setTitle = (title) => {
    return {
      type: ActionTypes.SET_TITLE,
      payload: title,
    };
  };

  export const updateNote = (note) => {
    console.log("Updatee, note");
    return {
      type: ActionTypes.UPDATE_NOTE,
      payload: note,
    };
  };

  export const setTrashNotes = (note) => {
    return {
      type: ActionTypes.SET_TRASH_NOTES,
      payload: note,
    };
  };

  export const addTrashNote = (note) => {
    return {
      type: ActionTypes.ADD_TRASH_NOTE,
      payload: note,
    };
  };