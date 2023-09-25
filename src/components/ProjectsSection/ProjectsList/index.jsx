import { projects } from "../../../data/projects.js"
import gitLogo from "../../../assets/github-icon.png"

export const ProjectsList = () => {
  return (
    projects.map((project) => {
      return(
      <li key={project.name}>
        <div>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <button>Saiba mais</button>
        </div>
        <img src={gitLogo} alt="logo do git hub" />
      </li>
      )
    })
  )
}