import { useTranslation } from "react-i18next"
import SkillsGrid from "./SkillsGrid"
import OtherSkillBox from "./OtherSkillBox"

const Skills = () => {
  const { t } = useTranslation()

const skills = [
  { name: "HTML", iconClass: "devicon-html5-plain colored" },
  { name: "CSS", iconClass: "devicon-css3-plain colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "React", iconClass: "devicon-react-plain colored" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
  { name: "PHP (Symfony)", iconClass: "devicon-php-plain colored" },
  { name: "Vue", iconClass: "devicon-vuejs-plain colored" }, 
  { name: "Angular", iconClass: "devicon-angularjs-plain colored" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { name: "Ruby (Rails)", iconClass: "devicon-ruby-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
  { name: "LUA", iconClass: "devicon-lua-plain colored" },
  { name: "Java", iconClass: "devicon-java-plain colored" },
  { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
  { name: "C#", iconClass: "devicon-csharp-plain colored" },
  { name: "C / C++", iconClass: "devicon-cplusplus-plain colored" },
]

  const otherSkills = [
    t("about.otherSkills.Linux"),
    t("about.otherSkills.Mac"),
    t("about.otherSkills.Windows"),
    t("about.otherSkills.Git/Gitlab/Gitea"),
    t("about.otherSkills.CI/CD"),
    t("about.otherSkills.Management"),
    t("about.otherSkills.Méthode Agile (Scrum & TDD)"),
    t("about.otherSkills.Kanban (Jira, Trello)"),
    t("about.otherSkills.UML/PlantUML"),
    t("about.otherSkills.Patron de conception"),
  ]

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold">{t("about.skillsTitle")}</h3>
      <SkillsGrid skills={skills} />

      <div>
        <h3 className="text-lg font-semibold mb-4">
          {t("about.otherSkillsTitle")}
        </h3>

        <div className="flex flex-wrap gap-4">
          {otherSkills.map((skill, index) => (
            <OtherSkillBox key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
