import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

import Navbar from './components/Navbar';
import CodeGenerator from './components/CodeGenerator/CodeGenerator';
import Footer from './components/Footer';

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
    <div className="font-inter h-screen flex flex-col items-center dark:bg-slate-900 dark:text-gray-100 bg-gray-100 text-slate-900">
      <Navbar toggleDarkMode={toggle} />
      <CodeGenerator />
      <Footer />
    </div>
  );
};

export default App;
