import { NextPage } from "next";
import { SpringPopupNews } from "./content/2022-spring-popup";
import { HatchPopupNews } from "./content/2021-hatch-popup";
import { PopupNews } from "./content/2021-summer-popup";
import { CognicodeNews } from "./content/2023-cognicode";

export const NewsContents: { id: string; content: NextPage }[] = [
  {
    id: "2021-summer-popup",
    content: PopupNews,
  },
  {
    id: "2021-hatch-popup",
    content: HatchPopupNews,
  },
  {
    id: "2022-spring-popup",
    content: SpringPopupNews,
  },
  {
    id: "2023-cognicode",
    content: CognicodeNews,
  },
];
