import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Category, data, ItemDatum } from "../../data/item";
import { Theme } from "../../styles/theme";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      padding: 20,
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
    itemName: {
      fontSize: 70,
    },
    commentWrapper: {
      padding: "60px 20px",
      margin: "-30px -20px 10px",
      color: "white",
      background: theme.palette.grey[900],
    },
    imageWrapper: {
      marginTop: 20,
      position: "relative",
      maxWidth: 500,
      margin: "0 auto",
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
  };
});

const ItemPage: NextPage<{ id: string; data: ItemDatum }> = ({ id, data }) => {
  const classes = useStyles(Theme);
  return (
    <main className={classes.wrapper}>
      <section className={classes.commentWrapper}>
        <Typography className={classes.kind} variant="h3">
          {data.isNew && (
            <>
              <span className={classes.new}>NEW</span>
              <br />
            </>
          )}
          {data.kind}
          {/* {data.length} Colours */}
        </Typography>
        <Typography variant="h1" className={classes.itemName}>
          {data.name}
        </Typography>

        {data.comment.split("\n").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </section>
      <section>
        {data.images.map((image) => (
          <div className={classes.imageWrapper}>
            <span className={classes.imageColour}>{image.colour}</span>
            <img
              className={classes.image}
              src={image.img}
              alt={`${id} ${image.colour}`}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export async function getStaticPaths() {
  return {
    paths: data.reduce(
      (pre, cur) => [...pre, cur.items.map((item) => `item/${item.id}`)],
      [] as string[]
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const itemsArray = data.reduce((pre, cur: Category) => {
    return [...pre, ...cur.items];
  }, [] as ItemDatum[]);
  const currentData = itemsArray.find((e) => e.id === id) || null;
  return { props: { id, data: currentData } };
}

export default ItemPage;
