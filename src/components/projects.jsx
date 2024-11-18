
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ArrowUpRight, MoreHorizontal } from 'lucide-react';

const ProjectCard = ({ name, description, completion, members, isFavorite = false }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium">{name}</CardTitle>
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className={isFavorite ? "text-yellow-400" : "text-gray-400"}
        >
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Completion</span>
          <span>{completion}%</span>
        </div>
        <Progress value={completion} className="h-2" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          {[...Array(Math.min(members, 3))].map((_, i) => (
            <Avatar key={i} className="border-2 border-background h-8 w-8">
              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i + 1}`} />
              <AvatarFallback>{i + 1}</AvatarFallback>
            </Avatar>
          ))}
          {members > 3 && (
            <Avatar className="border-2 border-background h-8 w-8">
              <AvatarFallback>+{members - 3}</AvatarFallback>
            </Avatar>
          )}
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

export function ProjectsComponent() {
  const projects = [
    { name: "Taskiro", description: "Explanatory text about this project that has been ongoing for over 2 years", completion: 25, members: 2, isFavorite: true },
    { name: "Goyave", description: "Travel expense management app project", completion: 50, members: 5 },
    { name: "Omega", description: "App project that connects the whole house etc", completion: 6, members: 5 },
    { name: "Be4me", description: "Another project involving bodybuilding", completion: 6, members: 4 },
    { name: "Sandero", description: "Explanatory text about this project that has been ongoing for over 2 years", completion: 25, members: 2, isFavorite: true },
    { name: "Startup4", description: "Travel expense management app project", completion: 50, members: 5 },
    { name: "Project XYZ", description: "App project that connects the whole house etc", completion: 6, members: 5 },
    { name: "Test Project", description: "Another project involving bodybuilding", completion: 6, members: 4 },
    { name: "Etc etc", description: "Explanatory text about this project that has been ongoing for over 2 years", completion: 25, members: 2, isFavorite: true },
    { name: "Stirical", description: "Travel expense management app project", completion: 50, members: 5 },
    { name: "Oniris", description: "App project that connects the whole house etc", completion: 6, members: 5 },
    { name: "Tratum", description: "Another project involving bodybuilding", completion: 6, members: 4 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#e6ae9e]">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
