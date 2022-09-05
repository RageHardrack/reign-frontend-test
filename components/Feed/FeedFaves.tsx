import { Pagination } from "components";
import { INewsContent } from "interfaces";
import { FeedItem } from ".";

interface Props {
  content: INewsContent[];
}

export const FeedFaves: React.FC<Props> = ({ content }) => {
  return (
    <section>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {content.map((item, idx) => (
          <FeedItem key={idx} item={item} />
        ))}
      </section>

      <Pagination />
    </section>
  );
};
