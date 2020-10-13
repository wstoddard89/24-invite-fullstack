import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
    invites: [],
  },
  reducers: {
    display:  (state, action) => {
      state.invites = action.payload
    }
  },
});

export const { display } = inviteSlice.actions;


export const getUser = () => (dispatch) => {
  axios
    .get("https://randomuser.me/api/")
    .then((r) => dispatch(display(r.data.results)))
}


export const selectInvite = state => state.invites.invites;

export default inviteSlice.reducer;
