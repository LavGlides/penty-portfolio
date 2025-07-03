"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { awsProjects } from "@/lib/data";

interface ProjectsProps {
  selectedProjectCategory: string;
  setSelectedProjectCategory: (category: string) => void;
  filteredProjects: typeof awsProjects;
  projectCategories: string[];
}

const Projects = ({
  selectedProjectCategory,
  setSelectedProjectCategory,
  filteredProjects,
  projectCategories,
}: ProjectsProps) => {
  return (
    <section id="projects" className="pt-24 pb-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Cloud <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my hands-on experience in designing, deploying, and
            managing robust cloud solutions on AWS.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={
                selectedProjectCategory === category ? "default" : "outline"
              }
              onClick={() => setSelectedProjectCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col">
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <Badge
                      variant="secondary"
                      className="mb-3 capitalize bg-primary/10 text-primary"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tag: any) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-auto pt-4 border-t">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
