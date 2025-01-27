import ProjectFormDetail from './ProjectFormDetail';

export default function ProjectForm() {
  return (
    <form className="mt-4 text-left">
      <ProjectFormDetail label="Title" inputType="text" />
      <ProjectFormDetail label="Description" inputType="text" />
      <ProjectFormDetail label="Due Date" inputType="date" />
    </form>
  );
}
