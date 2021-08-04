import { NextPage } from "next";
import { PopupNews } from "./content/2021-summer-popup";

export const NewsContents: { id: string; content: NextPage }[] = [
  {
    id: "2021-summer-popup",
    content: PopupNews,
  },
];
