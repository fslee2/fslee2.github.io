# Yujie Pang · Portfolio

Personal robotics portfolio published at [fslee2.github.io](https://fslee2.github.io/).

The site features CRAFT-W wrist models and manipulation demos, Dummy V2 robot modeling and browser controls, teleoperation, and robot-learning projects.

## Local preview

Serve the repository with a static HTTP server, then open `http://127.0.0.1:8000/`.

```bash
python -m http.server 8000 --bind 127.0.0.1
```

The page uses plain HTML, CSS, and JavaScript. No build step is required. Fonts are requested from Google Fonts, with local font fallbacks.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Profile, videos, model previews, project cards, and research timeline |
| `styles.css` | Existing portfolio theme |
| `recent-work.css` | Current-work sections, media layout, and responsive adjustments |
| `script.js` | Project filtering, reveal behavior, and reduced-motion handling |
| `assets/craft-w/` | CRAFT-W joint preview and wrist-demo videos/posters |
| `assets/dummy-v2/` | Current Dummy V2 mock-control and IK-preview screenshots |

## Project sources and media context

- CRAFT-W URDF, joint controls, scripts, recorded demonstrations, and attribution are maintained in the robot repository. Wrist videos show scripted simulation with fixed supports, ideal rigid grasps, and provisional dynamics. Cup pouring uses grains. [CRAFT-W](https://github.com/fslee2/Craft_wrist-URDF)
- Dummy V2 screenshots show the current local HostApp in a mock session, with the gripper and depth-camera assembly. Its source remains local, and hardware validation continues. [Project notes](https://github.com/fslee2/fslee2/blob/main/projects/dummy-v2.md)
- The GitHub profile contains links to current and earlier projects. [Profile](https://github.com/fslee2)

## Publishing

GitHub Pages publishes the root of this repository's `main` branch. Push changes to `main`, wait for the Pages build to finish, then check the live page and media links.

When updating a project card, keep its category in `data-category`. Cards marked `data-visibility="hidden"` stay excluded from filters. The visible project count is derived from the cards in `script.js`.
