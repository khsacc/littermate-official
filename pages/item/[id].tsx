import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { itemData, ItemDatum, ItemImage } from "../../data/item";
import { Theme } from "../../styles/theme";
import { GetItemButton } from "../../components/Common/GetItemButton";
import { PhotoInfo } from "../../components/Common/photoInfo";
import { CreateHead } from "../../plugins/createHead";
import { MutableRefObject, useRef } from "react";

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
    colours: {
      textAlign: "center",
    },
    colour: {
      display: "inline-block",
      margin: 10,
      textDecoration: "underline",
      cursor: "pointer",
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
    imageSection: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    imageWrapper: {
      marginTop: 20,
      position: "relative",
      maxWidth: 500,
      // margin: "0 auto",
    },
    image: {
      display: "block",
      width: "100%",
      marginTop: 20,
    },
    imageSmall: {
      display: "block",
      width: "48%",
      // marginRight: 20,
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
      width: "fit-content",
      display: "block",
      margin: "10px auto",
    },
    getItemButtonInner: {
      margin: "5px auto",
    },
  };
});

const ItemContainer: NextPage<{ id: string; colour }> = ({ id, colour }) => {
  const classes = useStyles(Theme);
  const ref = useRef(null!);
  return (
    <div className={classes.imageSection}>
      {colour[1].map((item: ItemImage) => (
        <>
          {/* <div className={classes.imageWrapper} key={item.img}> */}
          {!item.okiga && (
            <span className={classes.imageColour}>{item.colour}</span>
          )}
          <img
            className={[
              classes.image,
              item.okiga ? classes.imageSmall : "",
            ].join(" ")}
            src={item.img}
            alt={`${id} ${item.colour}`}
          />
          {/* </div> */}
        </>
      ))}
      <a
        href={colour[1][0].baseLink}
        rel="external"
        target="_blank"
        className={classes.getItemButton}
      >
        <GetItemButton className={classes.getItemButtonInner} />
      </a>
    </div>
  );
};

const ItemPage: NextPage<{ id: string; data: ItemDatum }> = ({ id, data }) => {
  const classes = useStyles(Theme);
  const imagesSorted = new Map();
  data.images.forEach((image) => {
    const __colour = imagesSorted.get(image.colour);
    if (__colour) {
      imagesSorted.set(image.colour, [...__colour, image]);
    } else {
      imagesSorted.set(image.colour, [image]);
    }
  });
  const imagesSortedArray = Array.from(imagesSorted);
  const colourRefs = imagesSortedArray.reduce(
    (pre, cur, idx) => {
      return idx === 0 ? pre : [...pre, useRef(null!)];
    },
    [useRef(null)]
  );
  return (
    <>
      <CreateHead title={data.name} />
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
          <div className={classes.colours}>
            {imagesSortedArray.map((colour, colourIdx) => (
              <a
                className={classes.colour}
                key={colourIdx}
                onClick={() => {
                  colourRefs[colourIdx].current.scrollIntoView();
                }}
              >
                {colour[0]}
              </a>
            ))}
          </div>
        </section>
        <section>
          {imagesSortedArray.map((colour, idx) => (
            // <ItemContainer colour={colour} id={id} key={idx} />
            <div
              className={classes.imageSection}
              key={idx}
              ref={colourRefs[idx]}
            >
              {colour[1].map((item: ItemImage) => (
                <>
                  {/* <div className={classes.imageWrapper} key={item.img}> */}
                  {!item.okiga && (
                    <span className={classes.imageColour}>{item.colour}</span>
                  )}
                  <img
                    className={[
                      classes.image,
                      item.okiga ? classes.imageSmall : "",
                    ].join(" ")}
                    src={item.img}
                    alt={`${id} ${item.colour}`}
                  />
                  {/* </div> */}
                </>
              ))}
              <a
                href={colour[1][0].baseLink}
                rel="external"
                target="_blank"
                className={classes.getItemButton}
              >
                <GetItemButton className={classes.getItemButtonInner} />
              </a>
            </div>
          ))}
        </section>
        <section>
          <PhotoInfo data={data} />
        </section>
      </main>
    </>
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
