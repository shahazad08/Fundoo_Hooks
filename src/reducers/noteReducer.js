import { ActionTypes } from "../constants/action-types";

const initialState = {
  notes: [],
  filteredNotes: [],
  listView: false,
  title: "Notes",
  trash: [],
};

export const noteReducer = (state = initialState, { type, payload }) => {
  console.log("type & payload", type, payload);
  switch (type) {
    case ActionTypes.SET_NOTES:
      return { ...state, notes: payload }
    case ActionTypes.SET_FILTERED_NOTES:
      return { ...state, filteredNotes: payload }
    case ActionTypes.LIST_VIEW:
      return { ...state, listView: !state.listView }
    case ActionTypes.SET_TITLE:
      return { ...state, title: payload };
    case ActionTypes.ADD_NEW_NOTE:
      return { ...state, notes: [ payload, ...state.notes] };
    case ActionTypes.UPDATE_NOTE:
      let newNote = [...state.notes];
      newNote[payload.index] = payload.data;
      return { ...state, notes: newNote }
    case ActionTypes.SET_TRASH_NOTES:
      return { ...state, trash: payload };
    case ActionTypes.ADD_TRASH_NOTE:  // No need to referesh the pagw when deleted from Dashboard to Trash
      let updatedNote = state.notes.filter((note) => note._id !== payload._id);
      let updatedTrashNote = [...state.trash,payload];
     
      return { ...state, notes: updatedNote, trash: updatedTrashNote };

    case ActionTypes.REMOVE_TRASH_NOTE:
      let updatedTrash = state.trash.filter((note) => note._id !== payload._id);
      let updatedNotes = [...state.notes,payload];
     
      return { ...state, notes: updatedNotes, trash: updatedTrash };

      case ActionTypes.DELETE_NOTE:
        let trashAfterDelete = state.trash.filter(
          (note) => note._id !== payload._id
        );
        return { ...state, trash: trashAfterDelete };


    default:
      return state;
  }
};