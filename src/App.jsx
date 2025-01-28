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
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'New Project',
      description: 'My new project',
      dueDate: new Date('2025-01-02'),
    },
    {
      id: 2,
      title: 'New Project 2',
      description: 'My new project 2',
      dueDate: new Date('2025-01-02'),
    },
  ]);

  const newProjectForm = useRef();

  function handleNewProjectClick() {
    setShowForm(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onNewProjectClick={handleNewProjectClick} projects={projects} />
      <Project onNewProjectClick={handleNewProjectClick} showForm={showForm} />
    </main>
  );
}

export default App;
