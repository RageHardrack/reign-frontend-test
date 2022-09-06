import { useLocalStorage } from "hooks";
import { INewsContent } from "interfaces";
import { FeedItem } from ".";

/**
 * Functional Component to render the section "My Favorites" News Posts that were saved and stored in LocalStorage.
 */
export const FeedFaves: React.FC = () => {
  const [favorites, _] = useLocalStorage<INewsContent[]>("favorites", []);

  return (
    <>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {favorites.map((item) => (
          <FeedItem key={item.story_id} item={item} />
        ))}
      </section>
    </>
  );
};
