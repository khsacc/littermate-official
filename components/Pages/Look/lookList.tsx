import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
import { itemData, ItemDatum } from "../../../data/item";
import { ViewMore } from "../../Common/viewMore";
import Link from "next/link";
import { UAParser } from "ua-parser-js";
import { useEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    whole: {
      marginBottom: 300,
    },
    itemContainer: {
      height: 600,
      width: "100%",
      backgroundPosition: "top",
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      marginBottom: 40,
      position: "relative",
      transition: "0.3s ease-out all",
      overflow: "hidden",
      "&:hover": {
        transform: "scale(1.01)",
      },
      [theme.breakpoints.up("xs")]: {
        height: 650,
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      },
      [theme.breakpoints.up("sm")]: {
        width: "calc(100%)",
        margin: "40px auto",
        maxWidth: 800,
        // padding: 240,
        backgroundSize: "cover",
      },

      [theme.breakpoints.up(940)]: {
        // width: 800,
        margin: "40px auto",
        backgroundSize: "cover",
        backgroundPosition: "right",
        // backgroundSize: "cover",
      },
      [theme.breakpoints.up(1180)]: {
        // width: 800,
        // margin: "40px auto",
        backgroundSize: "800px auto",
        backgroundPosition: "center",
        // backgroundSize: "cover",
      },
    },
    wrapAtag: {
      textDecoration: "none",
      color: theme.palette.grey[900],
    },
    itemName: {
      position: "absolute",
      display: "inline-block",
      padding: "10px 20px",
      background: "white",
      fontFamily: "futura-pt-condensed, sans-serif",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "1.5em",
    },
    more: {
      position: "absolute",
      bottom: "5%",
      right: "5%",
      [theme.breakpoints.up(940)]: {
        // color: theme.palette.grey[900],
      },
    },
  };
});
const LookItem: NextPage<{ itemDatum: ItemDatum }> = ({ itemDatum }) => {
  const classes = useStyles(Theme);
  const [isiOS, setIsiOs] = useState(false);
  useEffect(() => {
    const uaParser = new UAParser();
    const currentOS = uaParser.getOS().name;
    setIsiOs(currentOS === "iOS");
  }, []);
  return (
    <>
      <Link href={`/look/${itemDatum.id}`}>
        <a className={classes.wrapAtag}>
          <div
            className={classes.itemContainer}
            style={
              !isiOS && { backgroundImage: `url(${itemDatum.images[0].img})` }
            }
          >
            {isiOS && (
              <img
                src={itemDatum.images[0].img}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            )}
            <span className={classes.itemName}>{itemDatum.name}</span>
            <ViewMore className={classes.more} />
          </div>
        </a>
      </Link>
    </>
  );
};

export const LookList: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <div className={classes.whole}>
      {itemData.map((item, idx) => (
        <LookItem itemDatum={item} key={idx} />
      ))}
    </div>
  );
};
