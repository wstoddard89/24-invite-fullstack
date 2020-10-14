import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUser,
         selectInvitee,
         display,
         selectNotGoing,
         userNotGoing,
          } from "../invite/inviteSlice.js"

export default function NotGoing() {
  const personNotGoing = useSelector(selectNotGoing)
  const dispatch = useDispatch()
  const invitee = useSelector(selectInvitee)
  
  useEffect(() => {
    dispatch(userNotGoing())
  }, [])
  return (
    <div className="container">
      {personNotGoing.map((item) => (
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
