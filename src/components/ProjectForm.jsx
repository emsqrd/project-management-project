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

      <ProjectFormDetail label="Title" inputType="text" />
      <ProjectFormDetail detailContainer="textarea" label="Description" />
      <ProjectFormDetail label="Due Date" inputType="date" />
    </form>
  );
}
