import { useRef, useState } from 'react';
import Project from './components/Project';
import ProjectSidebar from './components/ProjectSidebar';

const project = {
  title: '',
  description: '',
  dueDate: '',
};

const projects = [];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleNewProjectClick(show = true) {
    setShowForm(show);
  }

  function handleSubmitNewProject(formData) {
    const newProject = {
      id: Math.random(),
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: new Date(formData.get('dueDate')),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setShowForm(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onNewProjectClick={handleNewProjectClick} projects={projects} />
      <Project onNewProjectClick={handleNewProjectClick} onSubmitNewProject={handleSubmitNewProject} showForm={showForm} />
    </main>
  );
}

export default App;
