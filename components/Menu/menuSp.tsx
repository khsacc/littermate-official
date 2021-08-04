import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Theme } from "../../styles/theme";
import { MenuContent } from "./menuContent";

const useStyles = makeStyles((theme) => {
  const menuBars = {
    background: theme.palette.grey[900],
    content: "''",
    display: "block",
    height: 4,
    borderRadius: 1,
    margin: "7px 0",
    transition: "0.5s",
  };
  return {
    fix: {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      zIndex: 9999,
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    wrapper: {
      position: "relative",
      background: "white",
      height: 90,
      width: 90,
      padding: 20,
      border: `1.5px solid ${theme.palette.grey[900]}`,
      borderRadius: "50%",
      transition: "0.5s",
    },
    wrapperOpen: {
      background: theme.palette.grey[900],
      border: `1.5px solid white`,
    },
    menu: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      width: "50px",
      "&:before": menuBars,
      "&:after": menuBars,
      "& div": menuBars,
    },
    menuOpen: {
      "&:before": {
        transform: `translateY(12px) rotate(135deg)`,
        background: "white",
      },
      "&:after": {
        transform: `translateY(-12px) rotate(-135deg)`,
        background: "white",
      },
      "& div": {
        transform: `scale(0)`,
        background: "white",
      },
    },
    menuModal: {
      position: "fixed",
      right: 0,
      bottom: 0,
      height: "100vh",
      width: 150,
      opacity: 0,
      transition: "0.5s",
      zIndex: 9998,
      transform: "translateX(150px)",
      // display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    menuModalOpen: {
      opacity: 1,
      transform: "translateX(0px)",
      // display: "",
    },
  };
});

export const MenuSp: NextPage = () => {
  const classes = useStyles(Theme);
  const [toggleOpen, setToggleOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setToggleOpen(false);
  }, [router.asPath]);
  return (
    <>
      <div
        className={[
          classes.menuModal,
          toggleOpen ? classes.menuModalOpen : "",
        ].join(" ")}
      >
        <MenuContent />
      </div>
      <div className={classes.fix}>
        <menu
          className={[
            classes.wrapper,
            toggleOpen ? classes.wrapperOpen : "",
          ].join(" ")}
          onClick={() => {
            setToggleOpen(!toggleOpen);
          }}
        >
          <div
            className={[classes.menu, toggleOpen ? classes.menuOpen : ""].join(
              " "
            )}
          >
            <div></div>
          </div>
        </menu>
      </div>
    </>
  );
};
