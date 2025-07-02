import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { awsProjects, githubRepos } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Eye, Github, Star, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("All");

  const filteredProjects =
    selectedProjectCategory === "All"
      ? awsProjects
      : awsProjects.filter(
          (project) => project.category === selectedProjectCategory
        );

  const projectCategories = [
    "All",
    ...Array.from(new Set(awsProjects.map((project) => project.category))),
  ];

  return (
    <section id="projects" className="pt-24 pb-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            AWS <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my collection of AWS projects showcasing cloud architecture,
            DevOps practices, and scalable solutions.
          </p>
        </motion.div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={
                selectedProjectCategory === category ? "default" : "outline"
              }
              onClick={() => setSelectedProjectCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredProjects
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 bg-transparent"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild className="flex-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 bg-transparent"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild className="flex-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* GitHub Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center">
                <Github className="w-8 h-8 text-white dark:text-gray-900" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">GitHub Repositories</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my open-source contributions and AWS-focused repositories
              on GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {githubRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg">{repo.name}</h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {repo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>{repo.language}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>⋔</span>
                          <span>{repo.forks}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-gray-900 dark:border-gray-100 bg-transparent"
            >
              <a
                href="https://github.com/penty-joseph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Repositories
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
