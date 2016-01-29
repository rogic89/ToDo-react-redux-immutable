Tips, trick and best practices using React, Redux and ImmutableJS
=======================

$ npm install                   # Install Node modules listed in ./package.json
$ npm start                     # Compile and launch

Structure
---------

```
.
├── bin                          # Build/Start scripts
├── build                        # All build-related configuration
│   ├── webpack                  # Environment-specific configuration files for Webpack
├── config                       # Project configuration settings
└── src                          # App group folder
    ├── client                   # App source code
    │   ├── actions              # Redux actions
    │   ├── components           # Generic React Components (generally Dumb components)
    │   ├── constants            # Constants for Redux actions and route access rights
    │   ├── reducers             # Redux reducers (all are imported in index.js)
    │   ├── styles               # App SASS styles, all are imported into app.scss
    │   ├── App.js               # Main App component
    │   ├── init.js              # App bootstrap and rendering
    │   ├── routes.js            # App routes
    │   └── store.js             # App store definition
    .

```
