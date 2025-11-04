import { groupBy } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getProjects } from "./getProjects";

export const getProject = (id: number, t: ReturnType<typeof useTranslations>) => {
  return groupBy(getProjects(t), 'id')[id][0];
}