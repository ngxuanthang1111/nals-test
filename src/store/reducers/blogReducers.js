export default {
  setSearch: (state, action) => {
    state.query.search = action.payload;
  },
  setOrder: (state, action) => {
    state.query.order = action.payload;
  },
  selectPage: (state, action) => {
    state.pagination.page = action.payload;
  },
  nextPage: (state, action) => {
    state.pagination.page += 1;
  },
  prevPage: (state, action) => {
    state.pagination.page -= 1;
  },
};
