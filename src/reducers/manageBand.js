let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const newBand = {...action.band, id:id}
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      return { bands:state.bands.filter(b => b.id !== action.id)}
    default:
      return state;
  }
};
