import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { Social } from "../Common/social";
import { LittermateLogo } from "../Logo";
import Link from "next/link";
import { categoryData } from "../../data/item";
import { useRouter } from "next/router";
import * as gtag from "../../plugins/gtag";

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
      <Link href="/">
        <a
          onClick={() => {
            toggleOpen();
          }}
        >
          <LittermateLogo className={classes.logo} />
        </a>
      </Link>
      <Social />

      <Link href={`/`}>
        <a
          className={[classes.categoryLink, classes.lookLink].join(" ")}
          onClick={() => {
            toggleOpen();
          }}
        >
          Top
        </a>
      </Link>

      {/* {categoryData.map((category, idx) =>
        router.pathname !== "/" ? (
          <Link key={idx} href={`/?category=${category.category}`}>
            <a
              className={classes.categoryLink}
              onClick={() => {
                gtag.logClickEvent({
                  category: "menu-button",
                  label: category.category,
                  route: router.asPath,
                });
              }}
            >
              {category.category}
            </a>
          </Link>
        ) : (
          <a
            key={idx}
            className={classes.categoryLink}
            onClick={() => {
              handleScroll(category.category);
              gtag.logClickEvent({
                category: "menu-button",
                label: category.category,
                route: router.asPath,
              });
            }}
          >
            {category.category}
          </a>
        )
      )} */}

      {router.pathname !== "/" ? (
        <Link href={`/?category=news}`}>
          <a
            className={classes.categoryLink}
            onClick={() => {
              toggleOpen();
              gtag.logClickEvent({
                category: "menu-button",
                label: "news",
                route: router.asPath,
              });
            }}
          >
            News
          </a>
        </Link>
      ) : (
        <a
          className={classes.categoryLink}
          onClick={() => {
            toggleOpen();
            handleScroll("news");
            gtag.logClickEvent({
              category: "menu-button",
              label: "news",
              route: router.asPath,
            });
          }}
        >
          News
        </a>
      )}

      <Link href={`/look`}>
        <a
          className={[classes.categoryLink, classes.lookLink].join(" ")}
          onClick={() => {
            toggleOpen();
          }}
        >
          Look
        </a>
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
