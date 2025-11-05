import React from "react";
import { Image, Heading, PlusIcon } from "@/components/atoms";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Tags } from "@/types/tags.enum";
import { TagItem } from "../TagItem";

export interface ProjectCardProps {
  image: string;
  title: string;
  tags: Tags[];
  href: string;
  className?: string;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, tags, href, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-lg overflow-hidden h-[350px] flex flex-col justify-end",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          fit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />

        {/* Content overlay */}
        <div className="p-6 text-grayscale-white z-10 flex flex-col justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <TagItem
                key={index}
                tag={tag}
                isActive={false}
                onClick={() => {}}
                className="bg-grayscale-white text-grayscale-black"
              />
            ))}
          </div>

          <div className="flex gap-4 w-full justify-between items-end">
            {/* Title */}
            <Heading
              level="h5"
              color="white"
              className="transition-colors duration-300"
            >
              {title}
            </Heading>

            {/* Plus icon button  */}
            <Link
              href={href}
              className="h-10 min-w-10 rounded bg-white flex items-center justify-center text-grayscale-black hover:bg-accent-orange hover:text-white transition-colors duration-300"
            >
              <PlusIcon size="md" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
