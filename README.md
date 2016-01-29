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
└── src                          # App source code
    ├── actions                  # Redux actions
    ├── components               # Generic React Components
    ├── constants                # Constants for Redux actions
    ├── reducers                 # Redux reducers (all are imported in index.js)
    ├── styles                   # App SASS styles, all are imported into app.scss
    ├── index.html               # Most basic index.html
    └── init.js                  # App bootstrap and rendering
```
