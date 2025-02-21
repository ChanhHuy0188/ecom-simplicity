
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Server, Terminal, Github, Code, Cloud, Database } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Chánh Huy</CardTitle>
            <p className="text-gray-600 mt-2">DevOps Engineer</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* About Section */}
              <section>
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-600">
                  Passionate DevOps engineer with expertise in cloud infrastructure, 
                  CI/CD pipelines, and automation. Focused on building scalable and 
                  reliable systems while improving development workflows.
                </p>
              </section>

              {/* Skills Section */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-5 w-5 text-primary" />
                    <span>AWS, Azure, GCP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal className="h-5 w-5 text-primary" />
                    <span>Shell Scripting, Python</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-primary" />
                    <span>Docker, Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-primary" />
                    <span>Infrastructure as Code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <span>Git, GitHub Actions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-primary" />
                    <span>MongoDB, PostgreSQL</span>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Senior DevOps Engineer</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Example Corp • 2021 - Present</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Implemented and maintained CI/CD pipelines using GitHub Actions</li>
                      <li>Managed Kubernetes clusters across multiple cloud providers</li>
                      <li>Reduced deployment time by 60% through automation</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">DevOps Engineer</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Tech Solutions Inc • 2019 - 2021</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Designed and implemented microservices architecture</li>
                      <li>Automated infrastructure provisioning using Terraform</li>
                      <li>Improved system reliability through monitoring and alerting</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Email: chanh.huy@example.com</p>
                  <p>Location: Ho Chi Minh City, Vietnam</p>
                  <p>GitHub: github.com/chanhhuy</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
