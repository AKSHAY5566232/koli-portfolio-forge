
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full">
            <img
              src="/lovable-uploads/e67bc9f5-6e61-44b8-8e91-9c99921f4fe3.png"
              alt="Koli Akshay"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Koli Akshay
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              B-Tech in Information Technology Student
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl">
              I am an enthusiastic IT learner with experience in UIWD, data analysis, and programming. 
              Looking for opportunities to use my skills in Python and TensorFlow to work on exciting projects.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild>
                <a href="mailto:akshaykoli65526@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:7416002681" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/akshay-koli-05943334a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/AKSHAY05526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
