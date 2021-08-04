import { NextPage } from "next";
import Head from "next/head";

type TwitterCard = "summary" | "summary_large_image" | "app" | "player";

const defaultValues = {
  image: "https://littermate-official.vercel.app/image/meta/common-ogimage.jpg",
  description: "Biology is ambivalent.",
  twitterCard: "summary_large_image" as TwitterCard,
  basePath: "https://littermate-official.vercel.app",
};

export const CreateHead: NextPage<{
  title?: string;
  image?: string;
  description?: string;
  twitterCard?: TwitterCard;
}> = ({
  title,
  //  = "Littermate Official Website",
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
          content: title
            ? `${title} | Littermate Official Website`
            : "Littermate Official Website",
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
      ].map((e, i) => (
        <meta property={e.property} content={e.content} key={i}></meta>
      ))}
      {[
        {
          name: "twitter:card",
          content: twitterCard,
        },
        {
          name: "twitter:title",
          content: title,
        },
      ].map((e, i) => (
        <meta name={e.name} content={e.content} key={i}></meta>
      ))}
      {/* // favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/image/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/image/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/image/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/image/meta/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/image/meta/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#2b5797"></meta>
    </Head>
  );
};
