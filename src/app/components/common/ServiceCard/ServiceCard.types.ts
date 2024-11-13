import { ReactNode } from "react";


export interface Service {
  icon: ReactNode;
  name: string;
  description: string;
}


export interface ServiceCardProps {
  title: string;
  services: Service[];
}
