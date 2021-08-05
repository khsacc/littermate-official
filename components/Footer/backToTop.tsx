import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Theme } from "../../styles/theme";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
    wrap: { textAlign: "center" },
    link: { color: theme.palette.grey[900], fontSize: "1.2em" },
  };
});

export const BackToTop: NextPage = () => {
  const router = useRouter();
  const classes = useStyles(Theme);
  return (
    <>
      {router.pathname !== "/" && (
        <div className={classes.wrap}>
          <Link href="/">
            <a className={classes.link}>Back to Top</a>
          </Link>
        </div>
      )}
    </>
  );
};
