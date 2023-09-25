import { technologies } from "../../../data/technologies.js"

export const TechList = () => {
  return (
    technologies.map((tech) => {
      return(
      <li key={tech.name}>
        <img src={tech.img} alt={`Logo da tecnologia ${tech.name}`} />
        <span>{tech.name}</span>
      </li>
      )
    })
  )
}