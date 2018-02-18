let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const newBand = Object.assign({}, { id: id }, action.band )
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      const bands = state.bands.filter(b => b.id !== action.id);
      return { bands };
    default:
      return state;
  }
};
