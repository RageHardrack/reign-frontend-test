import { render, screen } from "@testing-library/react";
import { FeedItem } from "components";

describe("Testing <FeedItem />", () => {
  const itemFakeData = {
    story_id: 123,
    created_at: "2022-09-06T16:02:16.000Z",
    author: "dan",
    story_title: "VueJS vs ReactJS. Ultimate showdown",
    story_url: "https://example.com",
  };

  test("Should render the title and author in the FeedItem", () => {
    render(<FeedItem item={itemFakeData} />);

    const author = screen.getByLabelText("author");
    const title = screen.getByLabelText("story_title");

    expect(author).toBeVisible();
    expect(title).toBeVisible();
  });
});
