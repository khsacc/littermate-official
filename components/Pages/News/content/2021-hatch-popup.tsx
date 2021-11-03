import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../../styles/theme";
import Image from "next/image";

const useStyles = makeStyles((theme) => {
  return {
    map: {
      width: "100%",
      maxWidth: 600,
      margin: "15px 0",
    },
    emphasize: {
      textDecoration: "underline",
      fontWeight: "bold",
    },
  };
});

export const HatchPopupNews: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <p>
        餃子×プロジェクションマッピングやヘナタトゥー、謎解きゲームなど、様々なクリエイターの集結するHATCHの秋祭りへの参加が決定しました。
        <br />
        当日は新商品の発売のほか、イベント限定商品の発売も予定されておりますので、是非お越しください。
      </p>
      <ul>
        <li>日時：11/3(水・祝) 11:00-20:00 ・チケット：事前予約制（無料）</li>
        <li>
          場所：
          <a href="https://hatch.tokyo" rel="external" target="_blank">
            HATCH浅草 4F
          </a>
        </li>
      </ul>
      <img src="/image/news/2021_hatch.jpg" className={classes.map}></img>
    </>
  );
};
