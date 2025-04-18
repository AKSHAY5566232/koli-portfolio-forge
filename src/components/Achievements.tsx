
import { Award, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Achievements = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Achievements & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Cambridge English Empower B2 Level</p>
              <p className="text-gray-600">Issued by: Cambridge University Press & Assessment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Participated in HackerRank and LeetCode challenges</li>
                <li>• Served as Team lead in Idea-creation and application development at Malla Reddy University</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
