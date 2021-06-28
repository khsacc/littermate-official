import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { useState } from "react";
import { Theme } from "../../../styles/theme";
import { itemData, ItemDatum, ItemImage } from "../../../data/item";

const useStyles = makeStyles((theme) => {
  const left = "12vw";
  return {
    imgContainer: {
      width: "100%",
      maxWidth: 750,
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "auto 100vh",
      backgroundRepeat: "no-repeat",
      transition: "all 0.7s ease-in-out",
      position: "absolute",
      top: 0,
      left: "26vw",
      [theme.breakpoints.up("sm")]: {
        backgroundSize: "100%",
        // display: "none",
      },
    },
    // imgContainerPc: {
    //   width: "100%",
    //   height: "180%",
    //   backgroundPosition: "center",
    //   backgroundSize: "auto 100vh",
    //   backgroundRepeat: "no-repeat",
    //   transition: "all 0.7s ease-in-out",
    //   position: "absolute",
    //   top: 0,
    //   left: "26vw",
    //   display: "none",
    //   [theme.breakpoints.up("sm")]: {
    //     // backgroundSize: "100%",
    //     display: "block",
    //   },
    // },
    heading: {
      textAlign: "center",
      paddingTop: 10,
    },
    kind: {
      fontWeight: 700,
      paddingLeft: "7.5vw",
      marginBottom: "1vh",
      marginTop: "115px",
    },
    new: {
      background: theme.palette.grey[900],
      color: "white",
      display: "inline-block",
      padding: "0 5px",
      marginRight: 5,
    },
    itemContainer: {
      // display: "grid",
      position: "relative",
      // gridTemplateColumns: "25vw 1fr",
      height: 500,
      // marginTop: "40px",
      [theme.breakpoints.up("sm")]: {
        height: 700,
      },
    },
    itemName: {
      transform: `rotate(-90deg) translateX(-22%) translateY(-15vw)`,
      fontSize: "20vw",
      transformOrigin: "center",
      height: "fit-content",
      width: "fit-content",
      position: "absolute",
      top: 0,
      left: "11vw",
      [theme.breakpoints.up(540)]: {
        fontSize: 120,
        transform: `rotate(-90deg) translateX(-22%) translateY(-70%)`,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 70,
        transform: `rotate(0) translateX(0%) translateY(0)`,
        left: "7.5vw",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 90,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 100,
      },
    },
    itemImage: {},
    itemColours: {
      position: "absolute",
      bottom: 0,
      left: "8.5vw",
      textAlign: "right",
      width: "fit-content",
      fontSize: "6vw",
      fontFamily: "futura-pt-condensed, sans-serif",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: 2,
      padding: 0,
      [theme.breakpoints.up(540)]: {
        fontSize: 35,
        left: "8%",
      },
      [theme.breakpoints.up("sm")]: {
        left: "7.5vw",
        textAlign: "left",
        top: "150px",
      },
    },
    itemColour: {
      listStyle: "none",
      // position: "relative",
    },
    itemColourLink: {
      position: "relative",
      cursor: "pointer",
    },

    selectedColour: {
      width: 8,
      height: 4,
      display: "block",
      position: "absolute",
      right: "-35%",
      top: "50%",
      // transform: "translateY(-50%)",
      backgroundColor: theme.palette.grey[900],
      opacity: 1,
      transition: "0.5s",
    },
    selectedColourHidden: {
      opacity: 0,
    },
  };
});

export const ItemComponent: NextPage<{ datum: ItemDatum }> = ({ datum }) => {
  const classes = useStyles(Theme);

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const displayData = {
    ...datum,
    topImages: datum.images.reduce((pre: ItemImage[], cur) => {
      return pre.some((__preDatum) => __preDatum.colour === cur.colour)
        ? pre
        : [...pre, cur];
    }, []),
  };

  return (
    <>
      <Typography className={classes.kind} variant="h3">
        {datum.isNew && <span className={classes.new}>NEW</span>}
        {datum.kind}
        {/* {data.length} Colours */}
      </Typography>
      <div className={classes.itemContainer}>
        <Typography variant="h3" className={classes.itemName}>
          {datum.name}
        </Typography>
        <div
          className={classes.imgContainer}
          style={{
            backgroundImage: `url(${displayData.topImages[currentDataIndex].img})`,
          }}
        ></div>
        {/* <div
          className={classes.imgContainerPc}
          style={{
            backgroundImage: `url(${displayData.topImages[currentDataIndex].img})`,
          }}
        ></div> */}
        <ul className={classes.itemColours}>
          {displayData.topImages.map((colour, colourIdx) => (
            <li key={colourIdx} className={classes.itemColour}>
              <a
                className={classes.itemColourLink}
                onClick={() => {
                  setCurrentDataIndex(colourIdx);
                }}
              >
                {colour.colour}
                {
                  <span
                    className={[
                      classes.selectedColour,
                      colourIdx === currentDataIndex
                        ? ""
                        : classes.selectedColourHidden,
                    ].join(" ")}
                  ></span>
                }
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const ItemList: NextPage = () => {
  return (
    <>
      {itemData.map((datum) => (
        <ItemComponent datum={datum} key={datum.name} />
      ))}
    </>
  );
};
