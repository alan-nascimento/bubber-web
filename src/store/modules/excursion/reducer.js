import produce from 'immer';

const INITIAL_STATE = {
  excursion: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@excursion/CREATE_EXCURSION_REQUEST':
      return produce(state, draft => {
        draft.excursion = action.payload;
      });
    default:
      return state;
  }
}
