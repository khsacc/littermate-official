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
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "auto 100vh",
      backgroundRepeat: "no-repeat",
      transition: "all 0.7s ease-in-out",
      position: "absolute",
      top: 0,
      left: "26vw",
    },
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
    itemContainer: {
      // display: "grid",
      position: "relative",
      gridTemplateColumns: "25vw 1fr",
      height: 500,
      // marginTop: "40px",
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
    },
    itemColour: {
      listStyle: "none",
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
        Long Sleeve T-shirt <br />
        {/* {data.length} Colours */}
      </Typography>
      <div className={classes.itemContainer}>
        <Typography variant="h3" className={classes.itemName}>
          S310
        </Typography>
        <div
          className={classes.imgContainer}
          style={{
            backgroundImage: `url(${displayData.topImages[currentDataIndex].img})`,
          }}
        ></div>
        <ul className={classes.itemColours}>
          {displayData.topImages.map((colour, colourIdx) => (
            <li key={colourIdx} className={classes.itemColour}>
              <a
                onClick={() => {
                  setCurrentDataIndex(colourIdx);
                }}
              >
                {colour.colour}
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
