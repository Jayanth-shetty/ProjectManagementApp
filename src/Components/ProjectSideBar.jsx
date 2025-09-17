import Button from "./Button";
import NoProjectSelected from "./NoProjectSelected";
export default function ProjectSideBar({
  onhandelCreate,
  Projects,
  onSelectP,
  SelectedProjectId
}) {
  return (
    <aside className="w-1/3 px8 py-16 bg-stone-900 text-cyan-300 md:w-72 rounded-r-xl">
      <h2 className="mb-8 -bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onhandelCreate}>+ Add Project</Button>
      <ul className="mt-8 ml-2">
        {Projects.map((project) => {
          let cssClasses="w-full text-left px-2 py-1 rounded-sm  my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if(project.id===SelectedProjectId){
            cssClasses += " bg-stone-800 text-stone-200"
          }
          else{
            cssClasses += " text-stone-400"
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={()=>onSelectP(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
