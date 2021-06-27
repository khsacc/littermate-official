import { NextPage } from "next";

const ItemPage: NextPage<{ id: string }> = ({ id }) => {
  return <>{id}</>;
};

export async function getStaticPaths() {
  return { paths: [1].map((e) => `/item/${e}`), fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  // const prjIdx = worksData.findIndex(e => e.id === id);
  // const nextPrjIdx = prjIdx + 1;
  return { props: { id } };
}

export default ItemPage;
