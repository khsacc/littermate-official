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

export const PopupNews: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <p>
        この度、Littermateの新宿マルイでの期間限定ポップアップストアの開催が決定しました。
        <br />
        研究室を模した世界観の中、普段から研究をしている現役の東大理系院生のスタッフが実店舗に立ちます。
      </p>
      <ul>
        <li> 期間：2021年8月20日(金)〜2021年8月26日(木)[7日間]　</li>
        <li> 時間：11時〜20時(最終日のみ17時まで) </li>
        <li>
          場所：新宿マルイ本館 1F ポップアップスペース
          <br />
          <img src="/image/popup/map.png" className={classes.map} />
        </li>
      </ul>

      <p>
        当日はスタッフによる
        <span className={classes.emphasize}>リアルタイムサイエンスショー</span>
        も予定しております。
        <br />
        また、Littermate公式インスタグラムのフォローでお好きな
        <span className={classes.emphasize}>ステッカー</span>
        をプレゼントいたします。
        <br />
        <br />
        現在売り切れとなっているこれまでのシリーズも再入荷する上、秋物の新作も発売いたしますので、是非足を運んでみてください！
        <br />
        <a
          href="https://www.0101.co.jp/003/store-info/fair.html?article_id=40386&from=01_pc_st003_store-news-feature_ft-list_article_3969"
          rel="nofollow external noreferrer"
          target="_blank"
        >
          新宿マルイ公式サイト
        </a>
      </p>
    </>
  );
};
