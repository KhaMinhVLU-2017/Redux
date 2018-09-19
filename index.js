var {createStore} = require('redux')
/**
 * Default State is First State
 */
const defaultState = {
  name: null,
  age: null
}
/**
 *  Reducer Manager Action
 */
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'RENAME':
      return { name: action.name }
    case 'REAGE':
      return { age: action.age }
    default:
      return state
  }
}
/**
 * Save State inside Store. You can save any state into Store for easy use
 */
const store = createStore(reducer)

console.log('Before Dispatch name: ' + store.getState().name)
/*
* Dispatch get Object have type for behavior
*/
store.dispatch({type: 'RENAME', name: 'JudasFate'})

console.log('After Dispatch name: ' + store.getState().name)

/**
 * Action
 */
const changeName = (rename) => {
  return {
    type: 'RENAME',
    name: rename
  }
}
store.dispatch(changeName('Lu Quang Truong'))

console.log('Dispath with function return object: ' + store.getState().name)
