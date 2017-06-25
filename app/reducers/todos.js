
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case "TOGGLE_TODO":
      if(state.id !== action.id){
        return state
      }
      return Object.assign({}, state, {completed: !state.completed})
    default:
      return state
  }
}

//待办项列表
const todos = (state={}, action) => {
  switch (action.type) {
    case "ADD_TODO":  //将旧数组里todo对象连接起来，返回一个新数组
      return [
        ...state,
        todo(undefined, action)
      ]
    case "TOGGLE_TODO":
      //将state通过map遍历出每一个待办项对象
      return state.map(t => todo(t, action))
    default:
      return state
  }

}


export default todos
