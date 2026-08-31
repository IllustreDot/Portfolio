export default function SkillBox({ iconClass, name }) {
  return (
    <div className="w-32 h-32 rounded-lg shadow-md flex flex-col items-center justify-center dark:text-black dark:bg-white bg-gray-800 text-white text-center gap-2 transition-transform transform hover:scale-105
     box-shadow hover:shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-gray-300/50 hover:rotate-2">
      <i className={`${iconClass} text-5xl text-inherit`}></i>
      <span className="text-base">{name}</span>
    </div>
  )
}
