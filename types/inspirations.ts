import { StaticImageData } from "next/image";

export type InspirationCardPropsType = {
  id: number;
  name: string;
  focus: string;
  image: StaticImageData | string;
  tag?: string;
};

export type InspirationGroupPropsType = {
  title: string;
  data: InspirationCardPropsType[];
};
