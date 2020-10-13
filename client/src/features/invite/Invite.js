import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
  getUser,
  selectInvite,
  display,
 } from "../invite/inviteSlice.js"



 export function Invite() {
   const dispatch = useDispatch();
   const invites = useSelector(selectInvite)
   console.log(invites)
   useEffect(() => {
    dispatch(getUser())
  }, [])
  return(
    <div>
      {invites.map((user) => (
      <div className="randomUser">
          <div className="userImage"style={{ backgroundImage: `url(${user.picture.large})` }}></div>
        <div className="userInfo">
          <div className="userName"><span>Name:</span> {user.name.first} {user.name.last}</div>
          <div className="userEmail"><span>Email:</span> {user.email}</div>
          <div className="userPhone"><span>Phone:</span> {user.phone}</div>
        </div>
        <div className="inviteBtns">
          <button className="notGoingBtn"></button>
          <button className="goingBtn"></button>
        </div>
      </div>
      ))}
    </div>
  )
 }