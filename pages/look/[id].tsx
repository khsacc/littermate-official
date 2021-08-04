import { makeStyles, Typography } from "@material-ui/core";
import { Linear } from "gsap/all";
import { NextPage } from "next";
import { itemData, ItemDatum } from "../../data/item";
import { Theme } from "../../styles/theme";
import { GetItemButton } from "../../components/Common/GetItemButton";
import { PhotoInfo } from "../../components/Common/photoInfo";
import { CreateHead } from "../../plugins/createHead";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      padding: 20,
    },
    commentWrapper: {
      padding: "60px 20px",
      margin: "-30px -20px 10px",
      color: theme.palette.grey[900],
      textAlign: "center",
      // background: theme.palette.grey[900],
    },
    itemName: {
      fontSize: 70,
    },
    kind: {
      fontWeight: 700,
      // paddingLeft: "7.5vw",
      marginBottom: "1vh",
      // marginTop: "115px",
    },
    new: {
      color: theme.palette.grey[900],
      background: "white",
      display: "inline-block",
      padding: "0 5px",
      marginRight: 5,
    },
    imagesWrapper: {
      display: "flex",
      flexWrap: "wrap",
    },
    imageWrapper: {
      marginTop: 20,
      position: "relative",
      maxWidth: 350,
      margin: "0 auto",
      [theme.breakpoints.up("sm")]: {
        width: "calc((100vw - 300px) / 2 - 30px)",
        maxWidth: "calc((100vw - 300px) / 2)",
      },
      [theme.breakpoints.up("lg")]: {
        width: "calc((100vw - 300px) / 3 - 30px)",
        maxWidth: "calc((100vw - 300px) / 3)",
      },
    },
    image: {
      display: "block",
      width: "100%",
    },
    imageColour: {
      position: "absolute",
      display: "inline-block",
      padding: 10,
      background: "white",
      fontFamily: "futura-pt-condensed, sans-serif",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "1.5em",
    },
    description: {
      // textAlign: "center",
      margin: "40px 0",
    },
  };
});

const LookPage: NextPage<{ id: string; data: ItemDatum }> = ({ id, data }) => {
  const classes = useStyles(Theme);
  return (
    <>
      <CreateHead title={`Look / ${data.name}`} />
      <main className={classes.wrapper}>
        <section className={classes.commentWrapper}>
          <Typography className={classes.kind} variant="h3">
            {data.kind}
          </Typography>
          <Typography variant="h1" className={classes.itemName}>
            {data.name}
          </Typography>
        </section>
        <section className={classes.imagesWrapper}>
          {data.images.map((image) => (
            <div className={classes.imageWrapper} key={image.img}>
              <span className={classes.imageColour}>{image.colour}</span>
              <img
                className={classes.image}
                src={image.img}
                alt={`${id} ${image.colour}`}
              />
            </div>
          ))}
        </section>
        <section className={classes.description}>
          <p>
            {data.comment.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <PhotoInfo data={data} />
        </section>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: itemData.map((datum) => `/look/${datum.id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const currentData = itemData.find((e) => e.id === id) || null;
  return { props: { id, data: currentData } };
}
export default LookPage;
