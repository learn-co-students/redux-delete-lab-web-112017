let id = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const newBand = Object.assign({},action.band, {id:id})
      return { bands: state.bands.concat(newBand)}
    case 'DELETE_BAND':
      console.log(action)
      let newBands = state.bands.filter(band => band.id !== action.id )
      console.log(newBands)
      return {bands: newBands}
    default:
      return state;
  }
};
