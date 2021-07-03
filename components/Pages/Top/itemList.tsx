import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { useState } from "react";
import { Theme } from "../../../styles/theme";
import { data, ItemDatum, ItemImage } from "../../../data/item";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  const left = "12vw";

  return {
    category: {
      textAlign: "center",
    },
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
      overflow: "hidden",
      "&:hover": {
        transform: "scale(1.01)",
      },
      [theme.breakpoints.up("sm")]: {
        backgroundSize: "100%",
        // display: "none",
      },
    },
    heading: {
      textAlign: "center",
      paddingTop: 10,
    },
    kind: {
      fontWeight: 700,
      paddingLeft: "7.5vw",
      marginBottom: "1vh",
      // marginTop: "115px",
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
      height: 600,
      marginBottom: 65,
      // marginTop: "40px",
      [theme.breakpoints.up("sm")]: {
        height: 700,
      },
    },
    itemName: {
      transform: `rotate(-90deg) translateX(-90%) translateY(65%)`,
      msTransformOrigin: "left",
      MozTransformOrigin: "left",
      WebkitTransformOrigin: "left",
      fontSize: 70,
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 700,
      // fontSize: 35,
      fontStyle: "normal",
      transformOrigin: "center",
      // height: "fit-content",
      // width: "fit-content",
      position: "absolute",
      top: 0,
      left: "8vw",
      lineHeight: "0.5",
      [theme.breakpoints.up(540)]: {
        fontSize: 120,
        // transform: `rotate(-90deg) translateX(-22%) translateY(-32%)`,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 70,
        transform: `rotate(0) translateX(0%) translateY(0)`,
        left: "7.5vw",
        marginTop: 20,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 90,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 100,
      },
    },
    rotateLetter: {
      // display: "inline-block",
      // transform: "rotate(-90deg)",
    },
    itemImage: {},
    itemColours: {
      position: "absolute",
      bottom: 0,
      left: "8%",
      // right: "75vw",
      // transform: "translateX(-100%)",
      // textAlign: "right",
      width: "fit-content",
      fontSize: "5.5vw",
      fontFamily: "futura-pt-condensed, sans-serif",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: 2,
      padding: 0,
      margin: 0,
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
    itemColourSelected: {},
    itemColourLink: {
      position: "relative",
      cursor: "pointer",
    },

    selectedColour: {
      width: 8,
      height: 4,
      display: "block",
      position: "absolute",
      right: "-20px",
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
        {datum.isNew && (
          <>
            <span className={classes.new}>NEW</span>
            <br />
          </>
        )}
        {datum.kind}
        {/* {data.length} Colours */}
      </Typography>
      <div className={classes.itemContainer}>
        {/* <Typography variant="h3" className={classes.itemName}> */}
        <div className={classes.itemName}>
          {Array.from(datum.name)
            // .reverse()
            .map((letter, idx) => (
              <>
                <span key={idx} className={classes.rotateLetter}>
                  {letter}
                </span>
                {/* <br /> */}
              </>
            ))}
        </div>

        {/* </Typography> */}
        <Link href={`/item/${datum.id}`}>
          <a>
            <div
              className={classes.imgContainer}
              style={{
                backgroundImage: `url(${displayData.topImages[currentDataIndex].img})`,
              }}
            ></div>
          </a>
        </Link>
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
                {/* {
                  <span
                    className={[
                      classes.selectedColour,
                      colourIdx === currentDataIndex
                        ? ""
                        : classes.selectedColourHidden,
                    ].join(" ")}
                  ></span>
                } */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const ItemList: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      {data.map((category) => (
        <div id={category.category}>
          <Typography variant="h2" className={classes.category}>
            {category.category}
          </Typography>
          {category.items.map((datum) => (
            <ItemComponent datum={datum} key={datum.name} />
          ))}
        </div>
      ))}
    </>
  );
};
