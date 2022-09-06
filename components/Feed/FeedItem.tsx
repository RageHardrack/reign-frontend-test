import { useCallback, useEffect, useState } from "react";
import { ClockSvg, FilledHeartSvg, EmptyHeartSvg } from "components";
import { INewsContent } from "interfaces";
import { getRelativeTime } from "utils";

import { useLocalStorage } from "hooks";

interface Props {
  item: INewsContent;
}

/**
 * Functional Component to render one Post Item.
 */
export const FeedItem: React.FC<Props> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { author, created_at, story_title, story_url, story_id } = item;

  const [favorites, setFavorites] = useLocalStorage<INewsContent[]>(
    "favorites",
    []
  );

  /**
   * Function to add or remove this Item in the Favorites Array
   */
  const changeFavorites = () => {
    if (isFavorite) {
      setFavorites((prevFavorites: INewsContent[]) =>
        [...prevFavorites].filter((fav) => fav.story_id !== story_id)
      );
    }

    if (!isFavorite) {
      setFavorites((prevFavorites: INewsContent[]) => [...prevFavorites, item]);
    }
  };

  /**
   * Checks if this item is already in the Favorites Array
   */
  const checkIsFavorite = useCallback(() => {
    const existsInLocalStorage = favorites.find(
      (fav) => fav.story_id === story_id && fav.author === author
    );
    setIsFavorite(!!existsInLocalStorage);
  }, [favorites, story_id, author]);

  useEffect(() => {
    checkIsFavorite();
  }, [checkIsFavorite]);

  return (
    <article className="flex items-center justify-between overflow-hidden transition duration-300 border rounded-md border-border-color min-h-[120px] lg:hover:opacity-40">
      <a
        href={story_url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col w-10/12 px-6 py-4 space-y-2"
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
        <button onClick={changeFavorites}>
          {isFavorite ? (
            <FilledHeartSvg className="w-6 h-6 md:w-8 md:h-8 " />
          ) : (
            <EmptyHeartSvg className="w-6 h-6 md:w-8 md:h-8 " />
          )}
        </button>
      </section>
    </article>
  );
};
