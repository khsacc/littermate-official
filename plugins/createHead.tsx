import { NextPage } from "next";
import Head from "next/head";

type TwitterCard = "summary" | "summary_large_image" | "app" | "player";

const defaultValues = {
  image: "",
  description: "",
  twitterCard: "summary_large_image" as TwitterCard,
};

const CreateHead: NextPage<{
  title?: string;
  image?: string;
  description?: string;
  twitterCard?: TwitterCard;
}> = ({
  title,
  image = defaultValues.image,
  description = defaultValues.description,
  twitterCard = defaultValues.twitterCard,
}) => {
  return (
    <Head>
      <title>
        {title
          ? `${title} | Littermate Official Website`
          : "Littermate Official Website"}
      </title>
      {[
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "ja_JP",
        },
      ].map((e) => (
        <meta property={e.property} content={e.content}></meta>
      ))}
      {[
        {
          name: "twitter:card",
          content: twitterCard,
        },
      ].map((e) => (
        <meta name={e.name} content={e.content}></meta>
      ))}
    </Head>
  );
};
