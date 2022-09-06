import { useState } from "react";
import { Pagination, LoadingSpinner } from "components";
import { useFetch } from "hooks";
import { FeedItem } from ".";

interface Props {
  currentFilter: string;
}

/**
 * Functional Component to render the Feed Section to show the results of the API.
 */
export const FeedList: React.FC<Props> = ({ currentFilter }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data: content, isLoading } = useFetch(
    `/search_by_date?query=${currentFilter}&page=${currentPage}`
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2">
        {content!.news.map((item, idx) => (
          <FeedItem key={idx} item={item} />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nbPages={content!.nbPages}
      />
    </>
  );
};
