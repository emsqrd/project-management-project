import { useState } from 'react';

import noProjectsImg from './assets/no-projects.png';

import Project from './components/Project';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectForm from './components/ProjectForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleNewProjectClick(show = true) {
    setSelectedProject(false);
    setShowForm(show);
  }

  function handleCloseProjectForm() {
    setShowForm(false);
  }

  function handleSubmitNewProject(formData) {
    const newProject = {
      id: Math.random(),
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: new Date(formData.get('dueDate')).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setShowForm(false);
  }

  function handleDeleteProject(id) {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    setSelectedProject(null);
  }

  function selectProject(id) {
    const selectedProject = projects.find((project) => project.id === id);
    setSelectedProject(selectedProject);
  }

  const noProject = (
    <div className="text-center">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImg} alt="image of a clipboard and pen" />
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={handleNewProjectClick}
      >
        Create New Project
      </button>
    </div>
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onNewProjectClick={handleNewProjectClick} projects={projects} handleSelectProjectClick={selectProject} />
      <div className="w-[35rem] mt-16">
        {!showForm && !selectedProject && noProject}
        {showForm && !selectedProject && <ProjectForm onCancelButtonClick={handleCloseProjectForm} onSubmitNewProject={handleSubmitNewProject} />}
        {selectedProject && <Project project={selectedProject} onDeleteProject={handleDeleteProject} />}
      </div>
    </main>
  );
}

export default App;
