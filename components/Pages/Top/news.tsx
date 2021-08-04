import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { NewsList } from "../../../data/news";
import { Theme } from "../../../styles/theme";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
    wrap: {
      margin: 30,
    },
    title: {
      // textAlign: "center",
    },
  };
});

export const News: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <div id="news" className={classes.wrap}>
        <Typography variant="h2" className={classes.title}>
          News
        </Typography>
        <ul>
          {NewsList.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.id}`}>
                <a>{news.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
