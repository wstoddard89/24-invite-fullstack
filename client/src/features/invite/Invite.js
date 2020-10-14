import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
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

  const [going, setGoing] = useState(0)
  const [notGoing, setNotGoing] = useState(0)

  const invitee = useSelector(selectInvitee)
  const attendingUser = useSelector(selectGoing)
  const notAttendingUser = useSelector(selectNotGoing)

  useEffect(() => {
    
    dispatch(userGoing())
    dispatch(userNotGoing())
    dispatch(getUser(invitee))
  }, [])

  function handleRejectBtn(e) {
    e.preventdefault()
    setNotGoing(notGoing + 1)
    dispatch(notAttending(invitee))
     dispatch(userNotGoing())
      dispatch(display(invitee))
  }
  function handleAcceptBtn(e) {
    e.preventdefault()
    setGoing(going + 1)
    dispatch(isAttending(invitee))
    dispatch(userGoing())
      dispatch(display(invitee))
  }

  return (
    <div className="container">
      <div className="userContainer">
      <div className="topLabel">
        <Link to={"./isgoing"}>
        <span>Going: {going}
          {/* {isAttending.length} */}
          </span>
        </Link>
        <Link to={"./notgoing"}>
        <span>Not Going: {notGoing}
          {/* {notAttending.length} */}
          </span>
          </Link>
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
         <form><button onClick={handleRejectBtn} className="notGoingBtn">Reject</button></form>
          
          <form><button onClick={handleAcceptBtn} className="goingBtn">Accept</button></form>
          
        </div>
        </div>
      </div>
    </div>
  )
}
