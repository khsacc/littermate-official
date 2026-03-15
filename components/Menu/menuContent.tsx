import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { Social } from "../Common/social";
import { LittermateLogo } from "../Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      background: theme.palette.grey[900],
      width: "100%",
      height: "100%",
      padding: "30px 10%",
      color: "white",
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 400,
      fontSize: "1em",
      [theme.breakpoints.up("sm")]: {
        padding: "30px 10%",
        fontSize: "1.5em",
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
      fontSize: "1.5em",
      textDecoration: "underline",
      cursor: "pointer",
      display: "block",
      width: "fit-content",
    },
    lookLink: {
      margin: "10px 0",
    },
  };
});

export const MenuContent: NextPage<{
  setToggleOpen?: (__toggleOpen: boolean) => void;
}> = ({ setToggleOpen }) => {
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

  const toggleOpen = () => {
    if (setToggleOpen) {
      setToggleOpen(false);
    }
  };
  return (
    <div className={classes.wrapper}>
      <Link
        href="/"
        onClick={() => {
          toggleOpen();
        }}
      >
        <LittermateLogo className={classes.logo} />
      </Link>
      <Social />

      <Link href={`/`}>
        <p
          className={[classes.categoryLink, classes.lookLink].join(" ")}
          onClick={() => {
            toggleOpen();
          }}
        >
          Top
        </p>
      </Link>

      {router.pathname !== "/" ? (
        <Link href={`/news`}>
          <p
            className={classes.categoryLink}
            onClick={() => {
              toggleOpen();
            }}
          >
            News
          </p>
        </Link>
      ) : (
        <p
          className={classes.categoryLink}
          onClick={() => {
            toggleOpen();
            handleScroll("news");
          }}
        >
          News
        </p>
      )}

      <Link href={`/look`}>
        <p
          className={[classes.categoryLink, classes.lookLink].join(" ")}
          onClick={() => {
            toggleOpen();
          }}
        >
          Look
        </p>
      </Link>
      <a
        className={[classes.categoryLink, classes.lookLink].join(" ")}
        href="https://littermate.thebase.in/"
        rel="external nofollow"
        target="_blank"
        onClick={() => {
          toggleOpen();
        }}
      >
        Online Shop
      </a>
    </div>
  );
};
