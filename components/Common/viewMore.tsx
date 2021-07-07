import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";

const useStyles = makeStyles((theme) => {
  return {
    more: {
      color: "white",
      // position: "absolute",
      // bottom: "5%",
      // right: "5%",
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 200,
      fontStyle: "italic",
      fontSize: "2em",
      // [theme.breakpoints.up(940)]: {
      // color: theme.palette.grey[900],
      // },
      background: theme.palette.grey[800],
      padding: 5,
      "&:before": {
        background: "white",
        content: "''",
        display: "inline-block",
        height: 1,
        width: 75,
        // [theme.breakpoints.up(940)]: {
        // background: theme.palette.grey[900],
        // },
      },
    },
  };
});
export const ViewMore: NextPage<{ className?: string }> = ({ className }) => {
  const classes = useStyles(Theme);
  return (
    <div className={[classes.more, className || ""].join(" ")}>
      View More...
    </div>
  );
};
