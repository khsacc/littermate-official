import { NextPage } from "next";
import { HatchPopupNews } from "./content/2021-hatch-popup";
import { PopupNews } from "./content/2021-summer-popup";

export const NewsContents: { id: string; content: NextPage }[] = [
  {
    id: "2021-summer-popup",
    content: PopupNews,
  },
  {
    id: "2021-hatch-popup",
    content: HatchPopupNews,
  },
];
