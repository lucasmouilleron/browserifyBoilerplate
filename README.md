browserifyBoilerplate
=====================

Features
--------
- A nice frontend browserify boilerplate
- Stack : browserify, compass, bootstrap, fontawesome
- Build : install, build, watch, grunt, npm, bower

Install requirements
--------------------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install bower -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Build
-----
- Edit the `package.json` file
- `grunt build` to build everything
- `grunt watch:scripts` while coding

Browserify, CommonJS, dependencies
----------------------------------
- Browserify is used to compile the app
- If module is not CommonJS, use `browserify-shim` (for shimming and deps) and `browser` (for aliases) in `package.json`
- If module is not available via bower or npm, use napa


TODO
----
- bower and browsershim
- 