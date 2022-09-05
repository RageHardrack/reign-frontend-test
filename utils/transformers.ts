import { Hit, INewsContent } from "interfaces";

/**
 * Transform the response data into the model it will use in the UI.
 */
export const hitsTransformer = (item: Hit): INewsContent => {
  return {
    story_id: item.story_id,
    author: item.author,
    story_title: item.story_title,
    story_url: item.story_url,
    created_at: item.created_at,
  };
};
