
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
      </main>
    </div>
  );
};

export default Index;
