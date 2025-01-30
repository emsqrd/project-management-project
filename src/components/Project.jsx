export default function Project({ project, onDeleteProject }) {
  return (
    <>
      <div className="flex justify-end gap-4">
        <button type="button" onClick={() => onDeleteProject(project.id)} className="px-6 py-2 rounded-md hover:text-stone-200 hover:bg-stone-800">
          Delete
        </button>
      </div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
      <p className="mb-4 text-stone-400">{project.dueDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      <hr className="h-1 my-8 bg-gray-200 border-0 text-stone-400" />
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button>Add Task</button>
      </div>
    </>
  );
}
