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

export const SpringPopupNews: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <p>
      この度、Littermateの新宿マルイでの2回目となる期間限定ポップアップの開催が決定しました。
        <br />
        研究室を模した世界観の中、普段から研究をしている現役の東大理系学生がスタッフとして皆様をお待ちしております。
      </p>
      <ul>
        <li> 期間：2022年3月8日(火)〜3月27日(日)[20日間]　</li>
        <li> 時間：11:00〜20:30 </li>
        <li>
          場所：新宿マルイ本館 B1F
          <br />
          <img
            src="/image/news/littermate_OIOI2022_map.png"
            className={classes.map}
          />
        </li>
      </ul>

      <p>
        Littermate公式インスタグラムのフォローでお好きな
        <span className={classes.emphasize}>ステッカーをプレゼント</span>
        いたします。
        <br />
        また、
        <span className={classes.emphasize}>1万円以上のご購入でトートバッグのプレゼント</span>
        もございます。
        <br />
        新作もたくさんご用意していますので、ぜひ足を運んでみてください！
        <br />
      </p>
    </>
  );
};
