import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


interface SkillCardProps {
  skill: {
    title: string;
    icon: string;
    description: string;
    technologies: string[];
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="h-full mt-3 rounded-[1rem] border-3 hover:border-red-600 ">
      <CardHeader>
        <div className="text-4xl text-primary-foreground justify-center align-middle w-fit ">{skill.icon}</div>

        <CardTitle className="text-3xl inline black-ops-one-regular " >{skill.title}</CardTitle>

        <CardDescription className=" text-border playwrite-gb-j " >
          {skill.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {skill.technologies.map((tech) => (
          <Badge className="bg-accent text-white rounded" key={tech}>{tech}</Badge>
        ))}
      </CardContent>
    </Card>
  );
}