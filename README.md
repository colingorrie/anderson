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



### Profile

### Services

### Portfolio

### Testimonials

### Contact

### Footer

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
