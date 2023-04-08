import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

import CodeGenerator from './components/CodeGenerator/Index';
import Navbar from './components/Navbar';

const App = () => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else if (!isDarkMode && document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-slate-900 text-white font-inter h-screen flex items-center flex-col">
      <Navbar toggleDarkMode={toggle} />
      <CodeGenerator />
    </div>
  );
};

export default App;
