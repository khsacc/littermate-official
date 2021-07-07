import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
// import { LittermateLogo } from "../../Logo";
import { LittermateDna } from "./parameters";

const useStyle = makeStyles((theme) => ({
  whole: {
    display: "flex",
    flexDirection: "row-reverse",
    margin: 30,
    justifyContent: "center",
  },
  dnaWrapper: {
    height: 170,
    width: "100%",
    // position: "absolute",
    backgroundSize: "auto 100%",
    backgroundPosition: "right",
  },
  dnaImage: {
    position: "absolute",
    color: theme.palette.grey[900],
  },
  dnaContainer: {},
  heading: {
    position: "relative",
    // textAlign: "center",
    // margin: "30px auto",
    writingMode: "vertical-rl",
    fontWeight: 700,
  },
  bodyCopy: {
    textAlign: "left",
    lineHeight: 1.9,
    // margin: "30px",
  },
}));

export const Story: NextPage = () => {
  const classes = useStyle(Theme);
  return (
    <>
      <div className={classes.whole}>
        <Typography variant="h2" className={classes.heading}>
          About Us
        </Typography>
        <div>
          <div
            className={classes.dnaWrapper}
            style={{ backgroundImage: `url(${LittermateDna})` }}
          />
          <div className={classes.bodyCopy}>
            <p>Biology is ambivalent</p>
            <p>
              生物学とは精密で、厳格で、論理的なものです。
              <br />
              清潔感のある白を基調とした研究室、液晶に表示される無機質な数字、淡々と保守的に事実を述べる研究者の姿ーー
            </p>
            <p>
              一方で、常に型にはまらない新しい手法を探しながら、時には自然に逆らって遺伝子を改変し、動物実験を繰り返しながらも生き物の真理を追求する。
              <br />
              生物学はまた、自由で挑戦的でもあるのです。
            </p>
            <p>
              Biology is ambivalent <br />
              そんな二面性を持つ生物学のカルチャーを、現役の大学院生が発信します。
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
