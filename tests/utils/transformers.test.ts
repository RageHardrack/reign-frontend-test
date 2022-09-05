import { hitsTransformer } from "../../utils/transformers";

describe("Testing Transformers functions", () => {
  const rawHitItem = {
    created_at: "2022-09-05T16:55:12.000Z",
    title: null,
    url: null,
    author: "ghaff",
    points: null,
    story_text: null,
    comment_text:
      "I drive regularly. Yes, there is some degree of audio disconnect in a car. I also have various mirrors and sensors of various types. And I\u0026#x27;m hopefully paying more attention than if I\u0026#x27;m just walking around.",
    num_comments: null,
    story_id: 32718600,
    story_title: "EV adoption in US is happening faster than predicted",
    story_url: "https://www.recurrentauto.com/research/ev-adoption-us",
    parent_id: 32726170,
    created_at_i: 1662396912,
    _tags: ["comment", "author_ghaff", "story_32718600"],
    objectID: "32726421",
    _highlightResult: {
      author: {
        value: "ghaff",
        matchLevel: "none",
        matchedWords: [],
      },
      comment_text: {
        value:
          "I drive \u003cem\u003eregular\u003c/em\u003ely. Yes, there is some degree of audio disconnect in a car. I also have various mirrors and sensors of various types. And I'm hopefully paying more attention than if I'm just walking around.",
        matchLevel: "full",
        fullyHighlighted: false,
        matchedWords: ["angular"],
      },
      story_title: {
        value: "EV adoption in US is happening faster than predicted",
        matchLevel: "none",
        matchedWords: [],
      },
      story_url: {
        value: "https://www.recurrentauto.com/research/ev-adoption-us",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  };

  test("Should transform one Hit Item into PostContent", () => {
    const response = hitsTransformer(rawHitItem);

    expect(response).toStrictEqual({
      author: "ghaff",
      story_title: "EV adoption in US is happening faster than predicted",
      story_url: "https://www.recurrentauto.com/research/ev-adoption-us",
      created_at: "2022-09-05T16:55:12.000Z",
    });
  });
});
