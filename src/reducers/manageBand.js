let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newBand = {id: ++id, ...action.band}
      return { bands: state.bands.concat(newBand) }
    case "DELETE_BAND":
      const newBandsList = state.bands.filter(band => band.id !== action.id)
      return { bands: newBandsList }
    default:
      return state;
  }
};
