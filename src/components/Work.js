import react from "react"
import prop1 from "../assets/project1.png"
import { NavLink } from "react-router-dom"
import WorkCard from "./WorkCard"

const work =()=>{
  return(
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCard.map((val,ind)=>{
          return(
            <WorkCard />
          )
        })}
      </div>
    </div>
  )
}