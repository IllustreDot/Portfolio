import SkillBox from './SkillBox'

export default function SkillsGrid({ skills }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {skills.map(skill => (
        <SkillBox key={skill.name} name={skill.name} iconClass={skill.iconClass} />
      ))}
    </div>
  )
}
