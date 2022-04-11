
// const DefaultComponent = (props) => {
//     return <div>Default</div>;
// }

const stateDefault = {
    Component: <p>Default</p>,
    handleForm:()=>{

    }
}

export const ModalReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case "OPEN_MODAL":
        state.Component = action.Component;
        state.handleForm = action.handleForm;

        return {...state}

  default:
    return state
  }
}
