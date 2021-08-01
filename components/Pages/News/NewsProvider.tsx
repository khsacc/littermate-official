import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
import { NewsContents } from "./NewsContent";

const useStyles = makeStyles((theme) => {
  return {
    wrap: {
      padding: 20,
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
