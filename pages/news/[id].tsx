import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
// import { itemData } from "../../data/item";
import { NewsList } from "../../data/news";
import { Theme } from "../../styles/theme";
import { CreateHead } from "../../plugins/createHead";
import { NewsProvider } from "../../components/Pages/News/NewsProvider";

const useStyles = makeStyles((theme) => {
  return {};
});

const LookPage: NextPage<{ id: string; title: string }> = ({ id, title }) => {
  const classes = useStyles(Theme);
  return (
    <>
      <CreateHead title={`News ${title}`} />
      <NewsProvider id={id} title={title} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: NewsList.map((datum) => `/news/${datum.id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const currentData = NewsList.find((e) => e.id === id) || null;
  return { props: { id, title: currentData.title } };
}
export default LookPage;
