import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { useState } from "react";
import { Theme } from "../../styles/theme";
import { LittermateLogo } from "../Logo";

const useStyles = makeStyles((theme) => {
  return {
    fix: {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      zIndex: 9999,
    },
    wrapper: {
      position: "relative",
      background: "white",
      height: 90,
      width: 90,
      padding: 20,
      border: `1.5px solid ${theme.palette.primary.main}`,
      borderRadius: "50%",
      transition: "0.5s",
    },
    wrapperOpen: {
      background: theme.palette.primary.main,
    },
    menu: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      width: "50px",
      "&:before": {
        background: theme.palette.primary.main,
        content: "''",
        display: "block",
        height: 4,
        borderRadius: 1,
        margin: "7px 0",
        transition: "0.5s",
      },
      "&:after": {
        background: theme.palette.primary.main,
        content: "''",
        display: "block",
        height: 4,
        borderRadius: 1,
        margin: "7px 0",
        transition: "0.5s",
      },
      "& div": {
        background: theme.palette.primary.main,
        content: "''",
        display: "block",
        height: 4,
        borderRadius: 1,
        margin: "7px 0",
        transition: "0.5s",
      },
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
      background: theme.palette.grey[900],
      opacity: 0,
      transition: "0.5s",
    },
    menuModalOpen: {
      opacity: 1,
    },
    logo: {
      color: "white",
      width: "80%",
      display: "block",
      margin: "30px auto",
    },
  };
});

export const Menu: NextPage = () => {
  const classes = useStyles(Theme);
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <>
      <div
        className={[
          classes.menuModal,
          toggleOpen ? classes.menuModalOpen : "",
        ].join(" ")}
      >
        <LittermateLogo className={classes.logo} />
      </div>
      <div className={classes.fix}>
        <div
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
        </div>
      </div>
    </>
  );
};
