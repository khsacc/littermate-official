import { NextPage } from "next";
import { ItemDatum } from "../../data/item";

export const PhotoInfo: NextPage<{ data: ItemDatum }> = ({ data }) => {
  return (
    <>
      <p>
        {data.photographer && (
          <span>
            Photographer: {data.photographer}
            <br />
          </span>
        )}
        {data.stylist && (
          <span>
            Stylist: {data.stylist}
            <br />
          </span>
        )}
        {data.hair && (
          <span>
            Hair {"&"} Make: {data.hair}
            <br />
          </span>
        )}
        {data.model && (
          <span>
            Model: {data.model}
            <br />
          </span>
        )}
      </p>
    </>
  );
};
