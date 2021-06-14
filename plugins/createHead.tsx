import { NextPage } from "next";
import Head from "next/head";

const CreateHead: NextPage<{
  title?: string;
  image?: string;
  description?: string;
}> = ({ title, image, description }) => {
  return (
    <Head>
      <title>{title || "Littermate"}</title>
      <meta></meta>
    </Head>
  );
};
