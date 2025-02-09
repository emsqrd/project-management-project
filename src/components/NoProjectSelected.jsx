import noProjectsImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ handleNewProjectClick }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImg} alt="image of a clipboard and pen" />
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={handleNewProjectClick}>Create New Project</Button>
      </p>
    </div>
  );
}
