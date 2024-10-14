import { ReactNode } from "react";
import { Icon } from "react-feather";

export interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
}