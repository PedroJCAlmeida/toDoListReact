import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projecstState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

 

  let content;

  if(projecstState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }else if(projecstState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebar onStartAddProject = {handleStartAddProject} projects={projecstState.projects}/>
     {content}
    </main>
  );
}

export default App;
