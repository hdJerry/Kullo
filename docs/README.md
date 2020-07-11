# Kullo
#### _Welcome to kullo modelling agency_

Kullo live URL is on  [Kullo Live](https://hdjerry.github.io/Kullo)

#### 

### File Structure

```file structure
- assets/css
- assets/js
- index.html
```

### 


### Logo Icon

```html
    <link rel="shortcut icon" href="./assets/images/logo/kullo.png">
```


### CSS Files

```html

<link rel="stylesheet" href="./assets/css//bootstrap-css/bootstrap.css">
<link rel="stylesheet" href="./assets/css/main.style.css">

```


### JavaScript Files

```html

<script src="./assets/js/bootstrap-js/jquery.js"></script>
<script src="./assets/js/bootstrap-js/popper.js"></script>
<script src="./assets/js/bootstrap-js/bootstrap.js"></script>

```


### External Files

```html

<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

```


### Kullo Logo

```html
<a class="navbar-brand" href="index.html">
    <img src="./assets/images/logo/kullo.jpg" alt="Kullo Logo">
</a>
```


### Root elements

```css
:root{
--primaryColor: #804DEA;
--secondaryColor: #403D56;
--tertiaryColor: #8A879F;
--cardBody: #F8F4F4;
}

```


### Media Query

```css
 /* Extra Small Devices, Phone */

@media only screen and (max-width : 480px) {}


/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {}


/* Ipad Pro */

@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {}

```

### 

### Quick start TO using Docsify

It is recommended to install `docsify-cli` globally, which helps initializing and previewing the website locally.

```bash
npm i docsify-cli -g
```

### Initialize

If you want to write the documentation in the `./docs` subdirectory, you can use the `init` command.

```bash
docsify init ./docs
```

### Writing content

After the `init` is complete, you can see the file list in the `./docs` subdirectory.

* `index.html` as the entry file
* `README.md` as the home page
* `.nojekyll` prevents GitHub Pages from ignoring files that begin with an underscore

You can easily update the documentation in `./docs/README.md`, of course you can add [more pages](more-pages.md).

### Preview your site

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
docsify serve docs
```

?> For more use cases of `docsify-cli`, head over to the [docsify-cli documentation](https://github.com/docsifyjs/docsify-cli).