# Fidesio Framework

# NEEDS UPDATE !

## Additional Libs (TODO)

- "jquery_lazyload": "jquery.lazyload#~1.9.7"
- "slick-carousel": "~1.6.0"
- "jquery-hoverintent": "jquery-hoverIntent#~1.8.1"
- "magnific-popup": "Magnific-Popup#~1.1.0"
- "picturefill": "~3.0.2"
- "respond": "Respond#~1.4.2"
- "superfish": "~1.7.9"
- "underscore": "~1.8.3"

### Available Gulp tasks ###

- js-generate
    - Generate JS output
- js-check
    - Check JS validity
- sass-generate
    - Generate SASS output
- server
    - Launch server
- browser-sync
    - Launch browser sync (is server is launched)
- bs-reload
    - Reload browser sync

- default (`gulp`)
    - Generate JS and SASS outputs
- watch
    - Watch JS and SASS files and regenerate on modification
- serve
    - Launch server on templates with browser sync and watch JS, SASS and template files

### Installation ###

Folder in www local server (Uwamp > www) or (MAMP > htdocs)

```bash
npm install
```

```bash
bower install
```

### Gulp tasks usage ###

```bash
gulp serve --module MODULE_NAME
```

OR

```bash
gulp serve --m MODULE_NAME
```

### Simple module configuration example ###

```js
// MODULE_NAME module configuration
configuration.modules.MODULE_NAME = {
    // Templates configuration (for watching purpose)
    templates_root_path : './www',
    templates_file_extension : '.php',

    // SASS configuration
    sass_root_path : './scss',
    sass_main_file : 'style.scss',
    sass_output_path : './www/assets/css',
    sass_output_name : 'main',

    // JS configuration
    js_root_path : './js',
    js_include_order : [
        // BOWER LIBS
        configuration.bower_path + '/jQuery/dist/jquery.min.js',
        configuration.bower_path + '/fastclick/lib/fastclick.js',
        configuration.bower_path + '/PACE/pace.min.js',
        configuration.bower_path + '/fontfaceobserver/fontfaceobserver.standalone.js',
        configuration.bower_path + '/loadcss/src/loadCSS.js',

        // YOUR CODE
        this.js_root_path + '/**/*.js'
    ],
    js_output_path : './www/assets/js',
    js_output_name : 'main',

    // Server configuration
    server : {
        base : '.',
        port : 9090,
        keepalive : true
    },

    // Browser sync configuration
    browserSync : {
        proxy : 'http://127.0.0.1:8888/',
        port : 9090,
        open : true,
        notify : false
    }
};
```

### Before start ###

Install [NodeJS](https://nodejs.org)

You can check if NPM exist by command :

    $ npm help

Take a look at :

* [Gulp](https://http://gulpjs.com/)
* [Sass](http://sass-lang.com/)

NB: BrowserSync is in beta testing

### Installing ###

    $ cd name_of_folder
    $ git clone https://git.fidesio.com/aurelien.guillaume/template-integration.git

### Gulp ###

Install gulp et browser-sync globaly:

    $ npm install

Once installation done you just need to hit :

    $ gulp

This task will watch your SCSS and JS and compile them:

* style.dev.css (dev-sass task) 
* scripts.min.js (dev-check-js)

If you just want to compile styles and script without watching, you can hit theses command:
    $ gulp dev-sass
    $ gulp dist-sass
    $ gulp dev-check-js

### Gulp and Browser Sync ###
You can use browsersync in a local environnement with this commmand:

    $ gulp serve

It will provide local and external url in order to work on mutiple device at the same time.
Actually you need to have wamp instaled because static page files are php. You can change the proxy option in the gulpfile if you want to adapt it to your workspace. More informations at [Browsersync](http://www.browsersync.io/).

### BEM Guideline ###
We do not fully respect the BEM css method but we like this kind of OOCSS:

    .block (.header)
    .block__element (.header__column, .header__button etc.)
    .block__element--modifier (.header__element--visible, .header__element--color-2 etc.)

### IMG lazy load ###

Add class "lazy" and data-src for img lazy load. If you want animation for this img add "lazy-anim" too.

    <img src="../assets/img/blank.gif" class="lazy" data-src="../assets/img/full-size.jpg" width="612" height="612" alt="">

