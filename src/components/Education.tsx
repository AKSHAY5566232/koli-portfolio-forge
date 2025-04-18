
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Education</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="h-8 w-8 text-orange-500" />
            <CardTitle>B-Tech in Information Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Malla Reddy University, Hyderabad</p>
            <p className="text-gray-500">Expected Graduation: 2027</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
