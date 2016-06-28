Tips, trick and best practices using React, Redux and ImmutableJS
=======================

Check the article explaining the logic -> [https://www.toptal.com/react/react-redux-and-immutablejs](https://www.toptal.com/react/react-redux-and-immutablejs)

ToDo App shows how to use Redux and ImmutableJS to avoid needless re-rendering of React components.

Console Logs are conveniently placed on key points to clearly show absolute minimal DOM re-render.

Usage
-----

#### `npm install`
Install Node modules listed in ./package.json`

#### `npm start`
Runs the webpack build system with HMR. Webpack dev server can be found at `localhost:3000`.

Structure
---------

```
.
├── bin                          # Build/Start scripts
├── build                        # All build-related configuration
│   ├── webpack                  # Environment-specific configuration files for Webpack
├── config                       # Project configuration settings
└── src                          # App source code
    ├── actions                  # Redux actions
    ├── components               # Generic React Components
    ├── constants                # Constants for Redux actions
    ├── reducers                 # Redux reducers (all are imported in index.js)
    ├── styles                   # App SASS styles, all are imported into app.scss
    ├── utils                    # Reusable utility functions
    ├── index.html               # Most basic index.html
    └── init.js                  # App bootstrap and rendering
```
