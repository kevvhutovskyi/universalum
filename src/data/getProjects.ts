import { ProjectItem } from "@/types";
import { Tags } from "@/types/tags.enum";
import { useTranslations } from "next-intl";

export const getProjects = (t: ReturnType<typeof useTranslations>): ProjectItem[] => {
    return [
    {
      id: 1,
      img: "/projects/concept/project1/image1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item1.title"),
      images: [
        '/projects/concept/project1/image1.jpg'
      ]
    },
    {
      id: 2,
      img: "/projects/concept/project2/image1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item2.title"),
      images: [
        '/projects/concept/project2/image1.jpg',
        '/projects/concept/project2/image2.jpg',
        '/projects/concept/project2/image3.jpg',
      ]
    },
    {
      id: 3,
      img: "/projects/concept/project3/image1.png",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item3.title"),
      location: t("projects.items.concepts.item3.location"),
      images: [
        '/projects/concept/project3/image1.png',
      ]
    },
    {
      id: 4,
      img: "/projects/concept/project4/image1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item4.title"),
      images: [
        '/projects/concept/project4/image1.jpg'
      ]
    },
    {
      id: 5,
      img: "/projects/concept/project5/image1.png",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item5.title"),
      location: t("projects.items.concepts.item5.location"),
      images: [
        '/projects/concept/project5/image1.png',
        '/projects/concept/project5/image2.png',
      ]
    },
    {
      id: 6,
      img: "/projects/concept/project6/image1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item6.title"),
      images: [
        '/projects/concept/project6/image1.jpg'
      ]
    },
    {
      id: 7,
      img: "/projects/concept/project7/image1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item7.title"),
      images: [
        '/projects/concept/project7/image1.jpg'
      ]
    },
    {
      id: 8,
      img: "/projects/concept/project8/image1.png",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item8.title"),
      images: [
        '/projects/concept/project8/image1.png'
      ]
    },
    {
      id: 9,
      img: "/projects/concept/project9/image1.png",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item9.title"),
      location: t("projects.items.concepts.item9.location"),
      images: [
        '/projects/concept/project9/image1.png'
      ]
    },
    {
      id: 10,
      img: "/projects/concept/project10/image1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concepts.item10.title"),
      location: t("projects.items.concepts.item10.location"),
      images: [
        '/projects/concept/project10/image1.jpg'
      ]
    },
    {
      id: 11,
      img: "/projects/designs/project1/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item1.title"),
      images: [
        '/projects/designs/project1/image1.jpg',
        '/projects/designs/project1/image2.jpg',
      ]
    },
    {
      id: 12,
      img: "/projects/designs/project2/image1.png",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item2.title"),
      location: t("projects.items.designs.item2.location"),
      images: [
        '/projects/designs/project2/image1.png',
        '/projects/designs/project2/image2.png',
        '/projects/designs/project2/image3.jpg',
      ]
    },
    {
      id: 13,
      img: "/projects/designs/project3/image1.png",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item3.title"),
      location: t("projects.items.designs.item3.location"),
      images: [
        '/projects/designs/project3/image1.png',
      ]
    },
    {
      id: 14,
      img: "/projects/designs/project4/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item4.title"),
      images: [
        '/projects/designs/project4/image1.jpg',
        '/projects/designs/project4/image2.jpg',
        '/projects/designs/project4/image3.jpg',
        '/projects/designs/project4/image4.jpg',
        '/projects/designs/project4/image5.jpg',
        '/projects/designs/project4/image6.jpg',
      ]
    },
    {
      id: 15,
      img: "/projects/designs/project5/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item5.title"),
      images: [
        '/projects/designs/project5/image1.jpg',
        '/projects/designs/project5/image2.jpg',
        '/projects/designs/project5/image3.jpg',
        '/projects/designs/project5/image4.jpg',
        '/projects/designs/project5/image5.jpg',
      ]
    },
    {
      id: 16,
      img: "/projects/designs/project6/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item6.title"),
      images: [
        '/projects/designs/project6/image1.jpg',
        '/projects/designs/project6/image2.jpg',
        '/projects/designs/project6/image3.jpg',
        '/projects/designs/project6/image4.jpg',
        '/projects/designs/project6/image5.jpg',
      ]
    },
    {
      id: 17,
      img: "/projects/designs/project7/image1.png",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item7.title"),
      images: [
        '/projects/designs/project7/image1.png',
        '/projects/designs/project7/image2.jpg',
      ]
    },
    {
      id: 18,
      img: "/projects/designs/project8/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item8.title"),
      images: [
        '/projects/designs/project8/image1.jpg',
        '/projects/designs/project8/image2.jpg',
      ]
    },
    {
      id: 19,
      img: "/projects/designs/project9/image1.png",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item9.title"),
      images: [
        '/projects/designs/project9/image1.png',
        '/projects/designs/project9/image2.png',
        '/projects/designs/project9/image3.png',
      ]
    },
    {
      id: 20,
      img: "/projects/designs/project10/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item10.title"),
      images: [
        '/projects/designs/project10/image1.jpg'
      ]
    },
    {
      id: 21,
      img: "/projects/designs/project11/image1.jpg",
      tags: [Tags.DESIGN],
      title: t("projects.items.designs.item11.title"),
      images: [
        '/projects/designs/project11/image1.jpg',
        '/projects/designs/project11/image2.jpg',
        '/projects/designs/project11/image3.jpg',
      ]
    },
    {
      id: 22,
      img: "/projects/constructions/project1/image1.jpg",
      tags: [Tags.CONSTRUCTION],
      title: t("projects.items.constructions.item1.title"),
      location: t("projects.items.constructions.item1.location"),
      images: [
        '/projects/constructions/project1/image1.jpg',
        '/projects/constructions/project1/image2.jpg',
        '/projects/constructions/project1/image3.jpg',
        '/projects/constructions/project1/image4.jpg',
        '/projects/constructions/project1/image5.jpg',
        '/projects/constructions/project1/image6.jpg',
        '/projects/constructions/project1/image7.jpg',
        '/projects/constructions/project1/image8.jpg',
        '/projects/constructions/project1/image9.jpg',
        '/projects/constructions/project1/image10.jpg',
        '/projects/constructions/project1/image11.jpg',
        '/projects/constructions/project1/image12.jpg',
        '/projects/constructions/project1/image13.jpg',
      ]
    },
    {
      id: 23,
      img: "/projects/constructions/project2/image1.jpg",
      tags: [Tags.CONSTRUCTION],
      title: t("projects.items.constructions.item2.title"),
      location: t("projects.items.constructions.item2.location"),
      images: [
        '/projects/constructions/project2/image1.jpg',
        '/projects/constructions/project2/image2.jpg',
        '/projects/constructions/project2/image3.jpg',
        '/projects/constructions/project2/image4.jpg',
        '/projects/constructions/project2/image5.jpg',
        '/projects/constructions/project2/image6.jpg',
        '/projects/constructions/project2/image7.jpg',
        '/projects/constructions/project2/image8.jpg',
        '/projects/constructions/project2/image9.jpg',
        '/projects/constructions/project2/image10.jpg',
        '/projects/constructions/project2/image11.jpg',
        '/projects/constructions/project2/image12.jpg',
      ],
    },
    {
      id: 24,
      img: "/projects/constructions/project3/image1.jpg",
      tags: [Tags.CONSTRUCTION],
      title: t("projects.items.constructions.item3.title"),
      images: [
        '/projects/constructions/project3/image1.jpg',
        '/projects/constructions/project3/image2.jpg',
        '/projects/constructions/project3/image3.jpg',
        '/projects/constructions/project3/image4.jpg',
        '/projects/constructions/project3/image5.jpg',
        '/projects/constructions/project3/image6.jpg',
        '/projects/constructions/project3/image7.jpg',
        '/projects/constructions/project3/image8.jpg',
        '/projects/constructions/project3/image9.jpg',
        '/projects/constructions/project3/image10.jpg',
        '/projects/constructions/project3/image11.jpg',
        '/projects/constructions/project3/image12.jpg',
        '/projects/constructions/project3/image13.jpg',
        '/projects/constructions/project3/image14.jpg',
        '/projects/constructions/project3/image15.jpg',
        '/projects/constructions/project3/image16.jpg',
        '/projects/constructions/project3/image17.jpg',
        '/projects/constructions/project3/image18.jpg',
        '/projects/constructions/project3/image19.jpg',
        '/projects/constructions/project3/image20.jpg',
        '/projects/constructions/project3/image21.jpg',
        '/projects/constructions/project3/image22.jpg',
        '/projects/constructions/project3/image23.jpg',
        '/projects/constructions/project3/image24.jpg',
      ],
    },
  ];
}