# Frontend test: Hacker News

[![Netlify Status](https://api.netlify.com/api/v1/badges/6d20766c-66cd-4de7-92c1-348936b74e43/deploy-status)](https://app.netlify.com/sites/frontend-test-hacker-news/deploys)

This is a technical task to show my skills in frontend development. The web application request data to the [Hackers News public API](https://hn.algolia.com/api). The dropdown selector component use the URL parameter “query” from the “search by date” API in order to filter the posts.

## Stack

- NextJS with TypeScript
- TailwindCSS
- HeadlessUI/React
- Jest
- DayJS

## Getting Started

First, install all packages using yarn.

```bash
yarn install
```

### Setting up environment variables

`NEXT_PUBLIC_API_URL` is the url of the Hacker News public API

You can copy the `.env.example` file and rename it as `.env` or `.env.local`.

### Start Development environment

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Execute Tests

```bash
yarn test
```

## Functionality

- [x] The selected filter should persist on the local storage.
- [x] The favorited posts should persist on the local storage.
- [x] The web app is expected to work as a responsive web application.
- [x] The pagination component should behave like [this](https://material-ui.com/components/pagination/).
- [x] When clicking on the row, a new tab should be open with the link of the post (`story_url`).
- [x] Clicking on the “like button” should not trigger the opening of the post URL link.
- [x] When hovering on the row, apply opacity to the entire row and its children (texts, icons, like button, etc).

## Are you curious?

If you want to see something funny, [click me](https://frontend-test-hacker-news.netlify.app/api/hello)
