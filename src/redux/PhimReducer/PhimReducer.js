// rxr

const stateDefaut = {
  mangPhim: []
}

export const PhimReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "LAY_DS_PHIM":
      state.mangPhim = action.mangPhim;
      return { ...state }
    default:
      return state
  }
}
