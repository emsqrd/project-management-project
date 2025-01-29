import ProjectFormDetail from './ProjectFormDetail';

export default function ProjectForm({ onCancelButtonClick, onSubmitNewProject }) {
  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        onSubmitNewProject(fd);
      }}
    >
      <div className="flex justify-end gap-4">
        <button onClick={() => onCancelButtonClick(false)} type="button" className="px-6 py-2 rounded-md hover:text-stone-200 hover:bg-stone-800">
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
  );
  // return (
  //   <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
  //     <form className="mt-4">
  //       <div className="flex items-center gap-4">
  //         <button className="w-full px-2 py-1 text-right rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">Cancel</button>
  //         <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
  //       </div>

  //       <ProjectFormDetail label="Title" inputType="text" />
  //       <ProjectFormDetail label="Description" inputType="text" />
  //       <ProjectFormDetail label="Due Date" inputType="date" />
  //     </form>
  //   </dialog>
  // );
}
