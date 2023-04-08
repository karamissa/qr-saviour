import CodeGenerator from './components/CodeGenerator/Index';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-slate-900 text-white font-inter h-screen flex items-center flex-col">
      <Navbar />
      <CodeGenerator />
    </div>
  );
};

export default App;
