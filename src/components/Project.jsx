import { useState } from 'react';
import noProjectsImg from '../assets/no-projects.png';
import ProjectFormDetail from './ProjectFormDetail';

export default function Project({ onNewProjectClick, onSubmitNewProject, showForm }) {
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
          <form
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              onSubmitNewProject(fd);
            }}
          >
            <div className="flex justify-end gap-4">
              <button onClick={() => onNewProjectClick(false)} type="button" className="px-6 py-2 rounded-md hover:text-stone-200 hover:bg-stone-800">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                Save
              </button>
            </div>
            <div className="mt-2">
              <label className="text-sm font-bold uppercase text-stone-500">Title</label>
              <input
                name="title"
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                type="text"
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-bold uppercase text-stone-500">Description</label>
              <textarea
                name="description"
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
              <input
                name="dueDate"
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                type="date"
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
}
