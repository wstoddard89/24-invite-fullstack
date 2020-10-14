import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getUser,
  selectInvitee,
  display,
  selectGoing,
  userGoing,
} from "../invite/inviteSlice.js"

export default function IsGoing() {
  const goingPerson = useSelector(selectGoing)
  const dispatch = useDispatch()
  const invitee = useSelector(selectInvitee)

  useEffect(() => {
    dispatch(userGoing())
  }, [])
  return (
    <div className="container">
      {goingPerson.map((item) => (
        <div className="userContainer">
        <div className="randomUser">
          <div
            className="userImage"
            style={{ backgroundImage: `url(${item.picture})` }}
          ></div>
          <div className="userInfo">
            <div className="userName">
              <span>Name:</span> {item.first} {item.last}
            </div>
            <div className="userEmail">
              <span>Email:</span> {item.email}
            </div>
            <div className="userPhone">
              <span>Phone:</span> {item.phone}
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}
