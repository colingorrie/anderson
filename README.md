# Anderson

*v1.0* (January 19, 2016)

## Plugins

**Backstretch** (v2.0.4)  
Simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element.  
[Website](http://srobbin.com/jquery-plugins/backstretch/)

**Magnific Popup** (v1.0.1)  
Light and responsive lightbox script with focus on performance.  
[Website](http://dimsemenov.com/plugins/magnific-popup/)

**Waypoints** (v4.0.0)  
A library that makes it easy to execute a function whenever you scroll to an element.  
[Website](http://imakewebthings.com/waypoints/)

**Modernizr**


**Font-Awesome** (v.4.5.0)


## Styling

The recommended way to edit the appearance of the template is by using LESS. In particular, `theme.less` defines a set variables which make customization easy. Here you can change template-wide typography and colour scheme all in one place. Here is an explanation of how each variable is used, along with the variable's default value.

- `@serif-font`: the template-wide default sans-serif font. Can be used in other variables, but by default is not used. *Default*: `"Montaga", "Palatino", "Garamond", serif`
- `@sans-serif-font`: the template-wide default serif font. Used in other variables. *Default*: `"Josefin Sans Std", "Gill Sans", "Verdana", "Lucida Grande", "Arial", "Helvetica", sans-serif`

- `@header-font`: the font used in all `h1, h2, h3, h4, h5, h6` elements. *Default*: `@sans-serif-font`
- `@body-font`: the font used in all non-header elements. *Default*: `@sans-serif-font`

- `@fontsize-base`: the base font size used, for example, by `p` elements on screens 992px in width and above. *Default*: `20px`
- `@fontsize-base-mobile`: the base font size used, for example, by `p` elements on screens less than 992px in width. *Default*: `16px`

- `@color-background`: the colour used for the site background. *Default*: `hsl(0, 100%, 100%);` (white)
- `@color-foreground`: the colour used for foreground elements, such as text. *Default*: `hsl(0, 100%, 0%);` (black)

## Components

### Navbar

If you add, remove, or change the sections of the page, you will want to change the corresponding navbar elements as well. Each section in the body of the page is represented by an `li` element in the navbar. Each section has an `id` attribute. The navbar uses these to link to the various sections on the page.

```html
<ul class="nav navbar-nav navbar-right">
  <li><a href="#profile">Profile</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

To remove a section from the navbar, delete its `li` element. To add a section, duplicate an existing `li` element, and change its `href` attribute to point to `#whatever`, where `whatever` is the `id` attribute of the new section.

### Splash

#### Static background image

The background image in the splash section can be changed in `js/main.js`. Simply change the contents of the variable `backgroundImage` from `"img/bg3.jpg"` to the image of your choice:

```js
// static background image

var backgroundImage = "img/bg3.jpg";

$("#splash").backstretch(backgroundImage);
```

#### Cycle between background images

To have the splash section cycle between multiple background images, comment out the single background image code, and uncomment the multiple background image code. Simply change the contents of the array `backgroundImages` to include whatever images you want to cycle between.

```js
// cycle between background images

var backgroundImages = ["img/bg3.jpg", "img/bg1.jpg", "img/bg4.jpg"];
var cyclingDuration = 5000;  // duration between transitions, in milliseconds
var cyclingFade = 1000;  // duration of fade effect, in milliseconds

$("#splash").backstretch(backgroundImages,
  {
    duration: cyclingDuration,
    fade: cyclingFade
  }
);
```

### Portfolio

To add a portfolio item, fill out the snippet below with the filename of the image, title, and description of the item.

```html
<div class="col-sm-4 portfolio-item">
  <a class="popup-link" href="filename.jpg" title="Title" data-description="Description.">
    <img class="img-responsive" src="filename.jpg" alt="" />
  </a>
</div>
```

Next, insert the snippet consisting of the `<div class="col-sm-4 portfolio-item">` into the portfolio section in the spot specified below. By default, porfolio items will form rows of three, except at the smallest screen sizes, where they will be stacked one on top of the other.

```html
<section class="section section-portfolio" id="portfolio">
  <div class="container">
    <h2>Portfolio</h2>
    <h4 class="subhead">Check out our work</h4>
    <div class="row">
        <!-- add portfolio items here -->
    </div>
  </div>
</section>
```

### Contact form

The contact form included with this template uses [Formspree](formspree.io) to send email. This method requires a small amount of configuration. The only change you need to make in `index.html` in the link in the form's `action` attribute. Change `test@example.com` to your email address, and submit the form for the first time. This will take you through Formspree's registration process.

```html
<form id="contact-form" role="form" method="post" action="http://formspree.io/test@example.com">
```

## Credits

### Splash backgrounds

- [bg1.jpg](https://unsplash.com/photos/Ki0dpxd3LGc) (by Thomas Shellberg via Unsplash, [CC-0 license](https://unsplash.com/license))
- [bg3.jpg](https://unsplash.com/photos/CQrM5BebSvE) (by Karsten Würth via Unsplash, [CC-0 license](https://unsplash.com/license))
- [bg4.jpg](https://unsplash.com/photos/m6hpb2rWP7Q) (by Mats-Peter Forss via Unsplash, [CC-0 license](https://unsplash.com/license))


### Portfolio items

- [portfolio1.jpg](https://unsplash.com/photos/K9QHL52rE2k) (by Naphtali Marshall, via Unsplash, [CC-0 license](https://unsplash.com/license))
- [portfolio2.jpg](https://unsplash.com/photos/Y6-GL40aPPs) (by Julian Böck, via Unsplash, [CC-0 license](https://unsplash.com/license))
- [portfolio3.jpg](https://unsplash.com/photos/b2oaLHHycWc) (by David Marcu, via Unsplash, [CC-0 license](https://unsplash.com/license))
- [portfolio4.jpg](https://unsplash.com/photos/UyUvM0xcqMA) (by Samuel Zeller, via Unsplash, [CC-0 license](https://unsplash.com/license))
- [portfolio5.jpg](https://unsplash.com/photos/8hgm6mKK04U) (by Petradr, via Unsplash, [CC-0 license](https://unsplash.com/license))
- [portfolio6.jpg](https://unsplash.com/photos/Hz1WQbHcXag) (by Alessandro Pellacini Benassi, via Unsplash, [CC-0 license](https://unsplash.com/license))

### Portraits

- [portrait2.jpg](https://flic.kr/p/apx1UP) (by the National Library of Australia, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
- [portrait3.jpg](https://flic.kr/p/4TA82M) (by the Smithsonian Institution, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
- [portrait4.jpg](https://flic.kr/p/4TqKDX) (by the Smithsonian Institution, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
- [portrait5.jpg](https://flic.kr/p/4TtuxU) (by the Smithsonian Institution,, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
