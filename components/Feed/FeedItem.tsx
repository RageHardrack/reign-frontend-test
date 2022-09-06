import { ClockSvg, FilledHeartSvg } from "components";
import { INewsContent } from "interfaces";
import { getRelativeTime } from "utils";

interface Props {
  item: INewsContent;
}

/**
 * Functional Component to render one Post Item.
 */
export const FeedItem: React.FC<Props> = ({ item }) => {
  const { author, created_at, story_title, story_url } = item;

  return (
    <article className="flex items-center justify-between overflow-hidden transition duration-300 border rounded-md border-border-color min-h-[120px] hover:opacity-40">
      <a
        href={story_url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col w-10/12 p-4 space-y-2"
      >
        <span className="flex items-center space-x-2 text-off-text">
          <ClockSvg className="w-4 h-4 stroke-current" />
          <p>
            {getRelativeTime(created_at)} by {author}
          </p>
        </span>
        <h2 className="font-semibold">{story_title}</h2>
      </a>

      <section className="flex items-center justify-center w-2/12 h-full bg-like-bg/10">
        <button>
          <FilledHeartSvg className="w-6 h-6 md:w-8 md:h-8 " />
        </button>
      </section>
    </article>
  );
};
