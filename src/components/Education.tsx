
import { GraduationCap, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Education = () => {
  const education = [
    {
      title: "B.Tech in Information Technology",
      institution: "Malla Reddy University, Hyderabad",
      period: "Aug 2023 – current",
      score: "Current CGPA: 7.78",
      icon: GraduationCap
    },
    {
      title: "Intermediate (M.P.C)",
      institution: "Siddhartha Junior College",
      period: "Jun 2021 - Apr 2023",
      score: "Percentage: 71%",
      icon: School
    },
    {
      title: "School",
      institution: "Akshara High School",
      period: "May 2021",
      score: "CGPA: 9.7",
      icon: School
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Education</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {education.map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <item.icon className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex justify-between items-center text-gray-500">
                  <p>{item.period}</p>
                  <p className="font-medium text-blue-600">{item.score}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
