import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
import { itemData, ItemDatum } from "../../../data/item";
import { ViewMore } from "../../Common/viewMore";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
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
        width: 800,
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
        color: theme.palette.grey[900],
      },
    },
  };
});
const LookItem: NextPage<{ itemDatum: ItemDatum }> = ({ itemDatum }) => {
  const classes = useStyles(Theme);
  return (
    <>
      <Link href={`/look/${itemDatum.id}`}>
        <a>
          <div
            className={classes.itemContainer}
            style={{ backgroundImage: `url(${itemDatum.images[0].img})` }}
          >
            <span className={classes.itemName}>{itemDatum.name}</span>
            <ViewMore className={classes.more} />
          </div>
        </a>
      </Link>
    </>
  );
};

export const LookList: NextPage = () => {
  return (
    <>
      {itemData.map((item, idx) => (
        <LookItem itemDatum={item} key={idx} />
      ))}
    </>
  );
};
