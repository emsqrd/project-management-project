import { useState } from 'react';
import noProjectsImg from '../assets/no-projects.png';
import ProjectFormDetail from './ProjectFormDetail';

export default function Project({ onNewProjectClick, showForm }) {
  const noProject = (
    <div className="text-center">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImg} alt="image of a clipboard and pen" />
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={onNewProjectClick}
      >
        Create New Project
      </button>
    </div>
  );
  return (
    <>
      <div className="w-[35rem] mt-16">
        {!showForm && noProject}
        {showForm && (
          <form className="mt-4">
            <div className="flex justify-end gap-4">
              <button className="px-6 py-2 rounded-md hover:text-stone-200 hover:bg-stone-800">Cancel</button>
              <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </div>

            <ProjectFormDetail label="Title" inputType="text" />
            <ProjectFormDetail label="Description" inputType="text" />
            <ProjectFormDetail label="Due Date" inputType="date" />
          </form>
        )}
      </div>
    </>
  );
}
