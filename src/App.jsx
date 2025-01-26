import Project from './components/Project';
import ProjectSidebar from './components/ProjectSidebar';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <Project />
    </main>
  );
}

export default App;
