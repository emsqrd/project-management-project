import { useState } from 'react';
import noProjectsImg from '../assets/no-projects.png';
import ProjectForm from './ProjectForm';

export default function Project() {
  const [showForm, setShowForm] = useState(false);

  const noProject = (
    <div className="text-center">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImg} alt="image of a clipboard and pen" />
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={handleClick}
      >
        Create New Project
      </button>
    </div>
  );

  function handleClick() {
    setShowForm(true);
  }
  return (
    <>
      <div className="w-[35rem] mt-16">
        {!showForm && noProject}
        {showForm && <ProjectForm />}
      </div>
    </>
  );
}
