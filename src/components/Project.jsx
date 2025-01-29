export default function Project({ project }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
      <p className="mb-4 text-stone-400">{project.dueDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
    </div>
  );
}
