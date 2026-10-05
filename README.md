# User Feedback

A small JavaScript website demonstrating reusable toast notifications and hash-based navigation. It includes Home and About pages, plus examples of success, error, information, and loading messages.

## Features

- Hash navigation between the Home and About pages (`#home` and `#about`).
- Reusable `showToast(message, type)` utility with success, error, info, and loading styles.
- A Home page with buttons that demonstrate each notification type.
- Sign-in modal markup with email and password fields.

The sign-in modal is currently only markup: opening it, validating the form, and showing a sign-in result have not been implemented yet. The loading example displays a waiting message but does not retrieve data.

## Run Locally

This project uses `live-server` for local serving. Install it globally if it is not already available, then start the app:

```sh
npm install --global live-server
npm run serve
```

Open the local URL printed by `live-server` in your browser. Because the app uses JavaScript modules, serve it over HTTP rather than opening `index.html` directly.

## Project Structure

```text
index.html       Main document, navigation, sign-in modal, and toast container
css/styles.css   Page, modal, and notification styles
src/app.js       Hash-change navigation entry point
src/model.js     Page rendering and notification demo handlers
src/utility.js   Reusable toast notification utility
pages/home.js    Home page content
pages/about.js   About page content
```

## Notifications

Import `showToast` from `src/utility.js` and provide a message and one of the supported types:

```js
import { showToast } from "./utility.js";

showToast("Your changes were saved.", "success");
```

Supported types: `success`, `error`, `info`, and `loading`. Notifications are removed automatically after three seconds.

https://in-info-web4.luddy.indianapolis.iu.edu/~ervanmet/assignment%204/
