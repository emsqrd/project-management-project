import ProjectFormDetail from './ProjectFormDetail';

export default function ProjectForm() {
  return (
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <form className="mt-4">
        <div className="flex items-center gap-4">
          <button className="w-full px-2 py-1 text-right rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">Cancel</button>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </div>

        <ProjectFormDetail label="Title" inputType="text" />
        <ProjectFormDetail label="Description" inputType="text" />
        <ProjectFormDetail label="Due Date" inputType="date" />
      </form>
    </dialog>
  );
}
