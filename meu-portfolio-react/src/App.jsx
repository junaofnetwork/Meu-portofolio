import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ExpenseTracker from './components/ExpenseTracker';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-green-200 to-blue-200">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ExpenseTracker />
      </main>
      <Footer />
    </div>
  );
}

export default App;
