import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { Social } from "../Footer/social";
import { LittermateLogo } from "../Logo";
import Link from "next/link";
import { categoryData } from "../../data/item";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      background: theme.palette.grey[900],
      width: "100%",
      height: "100%",
      padding: "30px 10%",
      color: "white",
      [theme.breakpoints.up("sm")]: {
        padding: "30px 10%",
      },
    },
    logo: {
      color: "white",
      width: "100%",
      display: "block",
      margin: "0 auto",
    },
    categoryLink: {
      color: "white",
      fontSize: "1.75em",
      textDecoration: "underline",
      cursor: "pointer",
    },
  };
});

export const MenuContent: NextPage = () => {
  const classes = useStyles(Theme);
  const router = useRouter();
  const handleScroll = (id: string) => {
    if (document) {
      const tar = document.getElementById(id);
      if (tar) {
        window.scrollTo({
          top: tar.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className={classes.wrapper}>
      <Link href="/">
        <a>
          <LittermateLogo className={classes.logo} />
        </a>
      </Link>
      <Social />
      {/* <h2>Item</h2> */}
      {/* <Link href={`/look`}>
        <a className={classes.categoryLink}>
          Look
          <br />
        </a>
      </Link> */}
      {categoryData.map((category, idx) =>
        router.pathname !== "/" ? (
          <Link key={idx} href={`/?category=${category.category}`}>
            <a className={classes.categoryLink}>
              {category.category} <br />
            </a>
          </Link>
        ) : (
          <a
            key={idx}
            className={classes.categoryLink}
            onClick={() => {
              handleScroll(category.category);
            }}
          >
            {category.category}
          </a>
        )
      )}
    </div>
  );
};
