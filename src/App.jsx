import teacherpic from "./assets/Frame 13.png"
import studentpic from "./assets/Frame 14.png"
import teacher from "./assets/teacher.jpeg"
import student from "./assets/student.jpeg"
import email from "./assets/Group 8.png"
import eyeoff from "./assets/eye-off.png"
import { useState } from "react"
import "./App.css"
export default function App() {
  const [teacherShow,setTeacherShow]=useState(true)
  
  
  return (
    <>
    <div className="container">
      <div className="main-pic">
        
        <img src={teacherShow? teacher :student} alt="teacher"  /></div>
      <div className="content">
        <div className="button">
      <button className="btn" onClick={()=>setTeacherShow(false)}>
        <img src={studentpic} alt="student" style={teacherShow ? {  filter: "grayscale(100%)"}:{filter: "grayscale(0%)"}} />
      </button>
      <button className="btn" onClick={()=>setTeacherShow(true)}>
        <img src={teacherpic} alt="teacher" style={teacherShow ? {  filter: "grayscale(0%)"}:{filter: "grayscale(100%)"}} />
      </button>
      </div>
      <div className="head">
<h1>{teacherShow?"Teacher":"Student"} Platform</h1>
<p className="text">Login to you account to continue</p>
</div>
<form>
  <div className="email">
  <input type="email"  placeholder="Email" />
  <img src={email} alt="email-icon" className="email-icon" />
  </div>
  <div className="password">
  <input type="password" placeholder="Password"/>
  <img src={eyeoff} alt="eyeoff-icon" className="eyeoff-icon" />
  </div>

    <p>I forget my password! </p>
    <button type="submit" className="login-btn">Login</button>
</form>
<p className="new-account">I don’t have an account!</p>
      </div>
      </div>
    </>
  )
}
