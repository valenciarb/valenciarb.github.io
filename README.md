# Valencia.rb website

## 🚀 Project Structure

The following folders and files are the main ones to change to update the content
of our website:

```text
/
├── public/
│   └── assets/ <-- Here we add things like downloads (pdfs from talks, etc.)
│   └── images/
│       └── people/ <-- These are the avatars that appear in the members section
├── src/
│   └── images/
│       └── logos/ <-- These are the logos for the sponsors
│   └── pages/meetings <-- The meeting pages (in spanish)
│   └── pages/en/meetings <-- The meeting pages (in english)
└── people.json <-- Contains the information about the members of Valencia.rb
```

## 🎤 Adding a new event

To add a new event you'll have to add it to the `src/pages/meetings` and `src/pages/en/meetings` directories

‼️ **This is important** ‼️

If you forget to add the meeting to either the main or the `en` directories the page
will fail to serve that meeting in the respective language and we will have a sad 🦇.

The file names follow this pattern: `yyyy-mm-dd-name-of-the-event.md`

### Structure of the meeting markdown file

```
---
layout: ../../layouts/MeetingLayout.astro (or, when in the /en directory ../../../layouts/MeetingLayout.astro)
date: 2024-11-06 18:00
title: "Title of the meeting"
location: "Name of the place where the meeting will take place"
location_map: "URL of the google map for the location"
posted: "Name of the person who posted this meeting"
sponsor:
  name: "Name of the sponsor"
  url: "URL of the sponsors website"
  logo: "Logo of the sponsor (image file)"
  logo_width: "Width of the sponsors logo"
extras:
  src: "Image file"
  alt: "Alt text for the image"
  width: "Width of the image"
---
Markdown content for the event here
```

## 🧛🏼‍♀️🧛🏽‍♂️ Adding a new members

To add a new member to the group you'll have to:

- Get an image (square if possible) and add it to `/public/images/people` (make sure there aren't any name collisions)
- Update the `people.json` file with the information of the person.

### The people.json structure

To add a person create a new object (`{}`) inside the `people` array in the [people.json](./src/people.json) file.

All fields are optional, but if you don't have an image it will look odd (also a person without a name makes little sense).

There are the following (optional) fields:

- avatar: the name of the image file for that person
- name : the name of that person
- social_name: the handle of that person in their social network of choice
- social_link: the link to their social network profile
- social_icon: the icon of their social network of choice (possible values are: bluesky, facebook, mastodon, threads and twitter )
- website: the URL to their website
- intro: a little text about them


## 🧞 Commands for running this site locally

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about astro?

Feel free to check [the documentation](https://docs.astro.build) or jump into Astros' [Discord server](https://astro.build/chat).
