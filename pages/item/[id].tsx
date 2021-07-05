import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Category, itemData, ItemDatum } from "../../data/item";
import { Theme } from "../../styles/theme";
import { GetItemButton } from "../../components/Common/GetItemButton";
import { PhotoInfo } from "../../components/Common/photoInfo";

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
    getItemButton: {
      textDecoration: "none",
      color: theme.palette.grey[800],
    },
    getItemButtonInner: {
      margin: "5px auto",
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

        {data.comment.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </section>
      <section>
        {data.images.map((image) => (
          <>
            <div className={classes.imageWrapper} key={image.img}>
              <span className={classes.imageColour}>{image.colour}</span>
              <img
                className={classes.image}
                src={image.img}
                alt={`${id} ${image.colour}`}
              />
            </div>
            <a
              href={image.baseLink}
              rel="external"
              target="_blank"
              className={classes.getItemButton}
            >
              <GetItemButton className={classes.getItemButtonInner} />
            </a>
          </>
        ))}
      </section>
      <section>
        <PhotoInfo data={data} />
      </section>
    </main>
  );
};

export async function getStaticPaths() {
  return {
    paths: itemData.map((datum) => `/item/${datum.id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const data = itemData.find((e) => e.id === id) || null;
  return { props: { id, data } };
}

export default ItemPage;
