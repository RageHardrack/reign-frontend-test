import { Pagination } from "components";
import { FeedItem } from ".";

export const FeedList = () => {
  return (
    <section>
      <section>
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </section>

      <Pagination />
    </section>
  );
};
