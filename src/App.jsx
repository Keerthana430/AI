import { useState } from 'react';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToSignUp={() => setCurrentPage('signup')} />
      ) : (
        <SignUpPage onClose={() => setCurrentPage('landing')} />
      )}
    </>
  );
}

export default App;