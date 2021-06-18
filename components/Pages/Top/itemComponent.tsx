import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { useState } from "react";
import { Theme } from "../../../styles/theme";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: "100vw",
    height: "70vh",
    backgroundPosition: "center",
    backgroundSize: "auto 100vh",
    backgroundRepeat: "no-repeat",
    transition: "all 0.7s ease-in-out",
  },
  heading: {
    textAlign: "center",
    paddingTop: 10,
  },
  colourNumber: {
    textAlign: "center",
    padding: 5,
  },
  colourIndicatorContainer: {
    // textAlign: "right",
    padding: 5,
    height: 40,
    // verticalAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  colourIndicator: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    margin: "0 10px",
    transition: "all 0.1s ease-out",
  },
  colourIndicatorFocused: {
    width: 30,
    height: 30,
  },
}));

export const ItemComponent: NextPage = () => {
  const classes = useStyles(Theme);

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const data = [
    {
      colorDisplay: "green",
      colour: "#81ed66",
      img: "/image/S310/Green_2_2.jpg",
    },
    {
      colorDisplay: "blue",
      colour: "#66b0ed",
      img: "/image/S310/Blue_3_3.jpg",
    },
    {
      colorDisplay: "red",
      colour: "#ed6666",
      img: "/image/S310/Red_3_2.jpg",
    },
  ];
  return (
    <>
      <div
        className={classes.imgContainer}
        style={{ backgroundImage: `url(${data[currentDataIndex].img})` }}
      ></div>
      <Typography variant="h3" className={classes.heading}>
        S310
      </Typography>
      <Typography className={classes.colourNumber}>
        Long Sleeve T-shirt <br />
        {data.length} Colours
      </Typography>
      <div className={classes.colourIndicatorContainer}>
        {data.map((datum, idx) => (
          <div
            key={idx}
            className={[
              classes.colourIndicator,
              idx === currentDataIndex ? classes.colourIndicatorFocused : "",
            ].join(" ")}
            style={
              idx === currentDataIndex
                ? { backgroundColor: datum.colour }
                : { border: `${datum.colour} 5px solid` }
            }
            onClick={() => {
              setCurrentDataIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
