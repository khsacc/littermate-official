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

export const AnthroEvolNews: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <p>
        "Once shaped by gods, <br />
        then decoded by genes, <br />
        now rewritten by our own hands — <br />
        what was once called fate, <br />
        then called nature, <br />
        we dare to call design. <br />
        Is this the third evolution, <br />
        or have we become the selectors <br />
        of life itself?"
      </p>
      <p>
        変異体マウスシリーズの絵画や、バイオアート作品を展示・販売しています。
        <br />
        アパレルの限定新商品も発売予定です。 <br />
        無料&予約不要ですので、ぜひ気軽にお越しください！
      </p>
      <ul>
        <li> 期間：2026年4月11日(土)〜4月12日(日)</li>
        <li> 時間：4/11 12:00〜19:00 ／ 4/12 10:00〜19:00 </li>
        <li>
          場所：東京都渋谷区南平台8-11 2F Conteiner Graphic Gallary
          <br />
          <img src="/image/news/anthro-evol.png" className={classes.map} />
        </li>
      </ul>
    </>
  );
};
