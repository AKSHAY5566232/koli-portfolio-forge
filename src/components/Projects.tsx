
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Time Keeper: Resume Builder",
      description: "A smart and intuitive resume builder that streamlines the resume creation process by offering customizable templates to different company requirements, enabling users to generate multiple resumes effortlessly with a single data input."
    },
    {
      title: "HelloIndia: Traveler's App",
      description: "Created a travel application to help users explore destinations in India, providing itineraries, hotel bookings, and local attractions. Integrated real-time features for trip management and easy communication between users and service providers.",
      technologies: "Python, Flask, Firebase, Google Maps API"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Academic Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
                {project.technologies && (
                  <p className="mt-4 text-sm text-gray-500">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
