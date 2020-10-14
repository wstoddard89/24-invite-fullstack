import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import invitesReducer from '../features/invite/inviteSlice'
export default configureStore({
  reducer: {
    invites: invitesReducer,
  },
});
