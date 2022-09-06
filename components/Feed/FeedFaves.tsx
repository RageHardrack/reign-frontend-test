import { Pagination } from "components";
import { INewsContent } from "interfaces";
import { FeedItem } from ".";

interface Props {
  // content: INewsContent[];
}

/**
 * Functional Component to render the section "My Favorites" News Posts that were saved and stored in LocalStorage.
 */
export const FeedFaves: React.FC<Props> = ({}) => {
  return (
    <>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* {content.map((item, idx) => (
          <FeedItem key={idx} item={item} />
        ))} */}
        feed de faves
      </section>

      {/* <Pagination /> */}
    </>
  );
};
