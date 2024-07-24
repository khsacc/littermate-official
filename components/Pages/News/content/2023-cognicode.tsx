import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../../styles/theme";

const useStyles = makeStyles((theme) => {
  return {
    map: {
      width: "100%",
      maxWidth: 400,
      margin: "15px 0",
    },
    emphasize: {
      textDecoration: "underline",
      fontWeight: "bold",
    },
  };
});

export const CognicodeNews: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <p>
        "The world we see, <br />
        this feeling that should only be felt by us, <br />
        who decides how, <br />
        what is at the bottom, <br />
        what are we heading for, <br />
        and in the end, <br />
        is it all just coded?"
      </p>
      <p>
        変異体マウスシリーズの絵画や、バイオアート作品を展示・販売しています。
        <br />
        アパレルの限定新商品も発売予定です。 <br />
        無料&予約不要ですので、ぜひ気軽にお越しください！
      </p>
      <ul>
        <li> 期間：2023年12月2日(土)〜12月3日(日)</li>
        <li> 時間：11:00〜19:00 </li>
        <li>
          場所：東京都渋谷区南平台8-11 2F Conteiner Graphic Gallary
          <br />
          <img src="/image/news/cognicode.png" className={classes.map} />
        </li>
      </ul>
    </>
  );
};
