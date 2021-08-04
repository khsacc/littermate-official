import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../../styles/theme";

const useStyles = makeStyles((theme) => {
  return {
    map: {
      width: "100%",
      maxWidth: 400,
    },
  };
});

export const PopupNews: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <p>
        この度、Littermateの新宿マルイでの期間限定ポップアップストアの開催が決定しました。
        <br />
        研究室を模した世界観の中、現役の東大理系院生である運営メンバーが実店舗に立ちます。
      </p>
      <ul>
        <li> 期間：2021年8月20日(金)〜2021年8月26日(木)[7日間]　</li>
        <li>
          場所：新宿マルイ本館 1F ポップアップスペース
          <br />
          <img src="/image/popup/map.png" className={classes.map} />
        </li>
      </ul>

      <h2>【キャンペーン】</h2>
      <ul>
        <li>公式Instagramのフォローでお好きなステッカーが1枚もらえる！</li>
      </ul>
      <p>
        ポップアップでは新作の公開も予定しています
        今すぐ着れるTシャツの他、秋冬に活躍するロンTやパーカーなども取り揃えておりますので、ぜひお越しください。
      </p>
    </>
  );
};
