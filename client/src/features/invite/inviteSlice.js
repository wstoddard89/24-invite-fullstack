import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    invitee: {},
    isGoing: [],
    notGoing: [],
  },
  reducers: {
    display: (state, action) => {
      state.invitee = action.payload
    },
    attending: (state, action) => {
      state.isGoing = action.payload
    },
    notAttend: (state, action) => {
      state.notGoing = action.payload
    },
  },
})

export const { display, attending, notAttend } = inviteSlice.actions

export const getUser = () => (dispatch) => {
  axios.get("/api").then((r) => dispatch(display(r.data)))
}

export const isAttending = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", {...user, going: true })
  .then((r) => dispatch(getUser(user)))
}

export const notAttending = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", {...user, going: false })
  .then((r) => dispatch(getUser(user)))
}

// export const goingUser = (user) => (dispatch) => {
//   axios.post("/api/isgoing/", user).then((r) => dispatch(isAttending(r.data)))
// }

// export const personNotGoing = (user) => (dispatch) => {
//   axios.post("/api/notgoing/", user).then((r) => dispatch(notAttending(r.data)))
// }

export const userGoing = () => (dispatch) => {
  axios.get("/api/isgoing/").then((r) => {
    dispatch(attending(r.data))
    // console.log(r.data)
  })
}

export const userNotGoing = () => (dispatch) => {
  axios.get("/api/notgoing").then((r) => {
    dispatch(notAttend(r.data))
  })
}

export const selectInvitee = (state) => state.invites.invitee
export const selectGoing = (state) => state.invites.isGoing
export const selectNotGoing = (state) => state.invites.notGoing

export default inviteSlice.reducer
