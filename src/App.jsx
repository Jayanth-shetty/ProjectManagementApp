import ProjectSideBar from "./Components/ProjectSideBar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";
import SelectedProjects from "./Components/SelectedProjects";
function App() {
  const [isNewP, setNewP] = useState({
    selectedProjectId: undefined,
    Projects: [],
    Tasks: [],
  });
  function handelAddTask(text) {
    setNewP((prevState) => {
      const taskId=Math.random();
      const newTask = {
        text:text,
        projectId:isNewP.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        Tasks: [...prevState.Tasks, newTask],
      };
    });
  }

  function handelDeleteTask(id) {
    setNewP((prevState) => {
      return {
        ...prevState,
        Tasks: prevState.Tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function SelectProjectSidebar(id) {
    setNewP((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handelStartAddProject() {
    setNewP((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handelAddProjectsSave(projectData) {
    setNewP((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        Projects: [...prevState.Projects, newProject],
      };
    });
  }
  function deleteProjects() {
    setNewP((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        Projects: prevState.Projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  function onhandelCancel() {
    setNewP((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  console.log(isNewP);

  const SelectedProjectSe = isNewP.Projects.find(
    (project) => project.id === isNewP.selectedProjectId
  );
  let content = (
    <SelectedProjects
      btnCaption="close"
      project={SelectedProjectSe}
      onHandelClose={onhandelCancel}
      onDelete={deleteProjects}
      onAddTask={handelAddTask}
      onDeleteTask={handelDeleteTask}
      tasks={isNewP.Tasks}
    />
  );

  if (isNewP.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handelAddProjectsSave} handelcancel={onhandelCancel} />
    );
  } else if (isNewP.selectedProjectId === undefined) {
    content = <NoProjectSelected onhandelCreate={handelStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onhandelCreate={handelStartAddProject}
        Projects={isNewP.Projects}
        onSelectP={SelectProjectSidebar}
        selectedProjectId={SelectedProjectSe}
      />
      {content}
    </main>
  );
}

export default App;
