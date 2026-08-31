import { useTranslation } from "react-i18next"
import SkillsGrid from "./SkillsGrid"
import { FaLinux, FaApple, FaWindows, FaGitAlt, FaTools } from 'react-icons/fa'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GiProgression } from 'react-icons/gi'
import { MdOutlineDesignServices } from 'react-icons/md'

const iconMap = {
  Linux: <FaLinux size={30} color="#FCC624" />,
  Mac: <FaApple size={30} color="#000" />,
  Windows: <FaWindows size={30} color="#0078D6" />,
  "Git/Gitlab/Gitea": <FaGitAlt size={30} color="#F1502F" />,
  "CI/CD": <CiDeliveryTruck size={30} color="#3B82F6" />,
  "Méthode Agile (Scrum & TDD)": <GiProgression size={30} color="#22C55E" />,
  "Kanban (Jira, Trello)": <FaTools size={30} color="#F59E0B" />,
  "UML/PlantUML": <MdOutlineDesignServices size={30} color="#8B5CF6" />,
  "Patron de conception": <MdOutlineDesignServices size={30} color="#A855F7" />,
}

export default function OtherSkillBox({ skill }) {
  return (
    <div className="w-28 h-28 rounded-lg shadow-md flex flex-col items-center justify-center dark:text-black dark:bg-white bg-gray-800 text-white text-center gap-2 transition-transform transform hover:scale-105
     box-shadow hover:shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-gray-300/50 hover:rotate-2">
              <div>{iconMap[skill] || <MdOutlineDesignServices size={30} />}</div>
      <div className="text-xs font-semibold">{skill}</div>
    </div>
  )
}