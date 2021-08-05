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
    newsListWrap: {
      padding: 0,
    },
    newsList: {
      listStyle: "none",
      borderLeft: `5px solid ${theme.palette.grey[900]}`,
      padding: `5px 0 5px 10px`,
      background: `${theme.palette.grey[200]}`,
      transition: "all 0.3s ease-in",
      "&:hover": {
        borderLeft: `8.5px solid ${theme.palette.grey[900]}`,
        fontSize: "1.05em",
        // background: theme.palette.grey[900],
        // color: "white",
      },
    },
    newsListLink: {
      // textDecoration: "none",
      color: theme.palette.grey[900],
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
        <ul className={classes.newsListWrap}>
          {NewsList.map((news) => (
            <li key={news.id} className={classes.newsList}>
              <Link href={`/news/${news.id}`}>
                <a className={classes.newsListLink}>{news.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
