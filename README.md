# Anderson

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

var backgroundImages = ["img/bg3.jpg", "img/portfolio1.jpg", "img/portfolio2.jpg"];
var cyclingDuration = 5000;  // duration between transitions, in milliseconds
var cyclingFade = 1000;  // duration of fade effect, in milliseconds

$("#splash").backstretch(backgroundImages,
  {
    duration: cyclingDuration,
    fade: cyclingFade
  }
);
```

### Contact form

The contact form included with this template requires configuration in order to send email. This can be done without much difficulty in one of two ways.

1. Use a web service such as [formspree.io](). (easier)
2.  (requires knowledge of PHP)

Note: in some cases, configuring the PHP solution may require the involvement of your web hosting provider. If you are having trouble sending mail using this method, contact your provider for troubleshooting.

## Credits

- [bg1.jpg](https://unsplash.com/photos/CQrM5BebSvE) (by Karsten Würth via Unsplash, [CC0 license](https://unsplash.com/license))
- [portfolio1.jpg](https://unsplash.com/photos/K0yNjawjRkM) (by Isai Ramos via Unsplash, [CC0 license](https://unsplash.com/license))
- [portfolio2.jpg](https://unsplash.com/photos/pq_ulQTFVbc) (by Annie Spratt via Unsplash, [CC0 license](https://unsplash.com/license))
- [portfolio3.jpg](https://unsplash.com/photos/n-MJGM3rzDg) (by Roberto Tumini via Unsplash, [CC0 license](https://unsplash.com/license))
- [portfolio4.jpg](https://unsplash.com/photos/l98YXp1X8dA) (by Paul Earle via Unsplash, [CC0 license](https://unsplash.com/license))
- [portfolio5.jpg](https://unsplash.com/photos/xorjaMB8W70) (by Delfi de la Rua via Unsplash, [CC0 license](https://unsplash.com/license))
- [portfolio6.jpg](https://unsplash.com/photos/vpAKO21abME) (by Patrick Fore via Unsplash, [CC0 license](https://unsplash.com/license))
- [portrait2.jpg](https://flic.kr/p/apx1UP) (by the National Library of Australia, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
- [portrait3.jpg](https://flic.kr/p/4TA82M) (by the Smithsonian Institution, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
- [portrait4.jpg](https://flic.kr/p/4TqKDX) (by the Smithsonian Institution, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
- [portrait5.jpg](https://flic.kr/p/4TtuxU) (by the Smithsonian Institution,, via Flickr [no known copyright restrictions](https://www.flickr.com/commons/usage/))
