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

  let content;
  if(projecstState.selectedProjectId === null){
    content = <NewProject/>
  }else if(projecstState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  }else{

  }

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebar onStartAddProject = {handleStartAddProject}/>
     {content}
    </main>
  );
}

export default App;
