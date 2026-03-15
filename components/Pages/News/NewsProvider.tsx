import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
import { NewsContents } from "./NewsContent";

const useStyles = makeStyles((theme) => {
  return {
    wrap: {
      padding: 20,
      "& ul": {
        margin: "0.5em 0",
        paddingLeft: "1.5em",
        listStyleType: "disc",
      },
      "& li": {
        margin: "0.25em 0",
      },
    },

    newsLetter: {
      width: "fit-content",
      margin: "20px auto",
      fontSize: "30px",
      fontWeight: "bold",
      padding: "5px 15px",
      color: "white",
      background: theme.palette.grey[900],
    },
    title: {
      fontSize: 40,
      textAlign: "center",
      // padding: 20,
      whiteSpace: "pre-wrap",
    },
  };
});

export const NewsProvider: NextPage<{ id: string; title: string }> = ({
  id,
  title,
}) => {
  const classes = useStyles(Theme);
  const tar = NewsContents.find((e) => e.id === id);
  const Contents = tar.content;
  return (
    <article className={classes.wrap}>
      <div className={classes.newsLetter}>NEWS</div>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Contents />
    </article>
  );
};
