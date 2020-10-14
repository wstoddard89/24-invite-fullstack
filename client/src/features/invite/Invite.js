import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUser,
         selectInvitee,
         selectGoing,
         selectNotGoing,
         userGoing,
         userNotGoing,
         display,
         isAttending,
         notAttending, } from "../invite/inviteSlice.js"

export default function Invite() {

  const dispatch = useDispatch()

  const invitee = useSelector(selectInvitee)
  const attendingUser = useSelector(selectGoing)
  const notAttendingUser = useSelector(selectNotGoing)

  useEffect(() => {
    dispatch(userGoing())
    dispatch(userNotGoing())
    dispatch(getUser(invitee))
  }, [])

  function handleRejectBtn(e) {
    e.preventDefault()
    dispatch(notAttending(invitee))
     dispatch(userNotGoing())
      dispatch(display(invitee))
  }
  function handleAcceptBtn(e) {
    e.preventDefault()
    dispatch(isAttending(invitee))
    dispatch(userGoing())
      dispatch(display(invitee))
  }

  // useEffect(() => {
  //   dispatch(userGoing())
  // }, [])

  // useEffect(() => {
  //   dispatch(userNotGoing())
  // }, [])

  return (
    <div className="container">
      <div className="userContainer">
      <div className="topLabel">
        <span>Going:
          {/* {isGoing.length} */}
          </span>
        <span>Not Going:
          {/* {notGoing.length} */}
          </span>
      </div>
      <div className="randomUser">
        <div
          className="userImage"
          style={{ backgroundImage: `url(${invitee.picture})` }}
        ></div>
        <div className="userInfo">
          <div className="userName">
            <span>Name:</span> {invitee.first} {invitee.last}
          </div>
          <div className="userEmail">
            <span>Email:</span> {invitee.email}
          </div>
          <div className="userPhone">
            <span>Phone:</span> {invitee.phone}
          </div>
        </div>
        <div className="inviteBtns">
          <button onClick={handleRejectBtn} className="notGoingBtn">Reject</button>
          
          <button onClick={handleAcceptBtn} className="goingBtn">Accept</button>
          
        </div>
        </div>
      </div>
    </div>
  )
}
