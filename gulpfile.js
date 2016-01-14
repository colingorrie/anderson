// load packages
var browserslist      = require("browserslist");
var gulp              = require("gulp");
var gulpAutoprefixer  = require("gulp-autoprefixer");
var gulpLess          = require("gulp-less");
var imagemin          = require('gulp-imagemin');
// var gulpCssnano       = require("gulp-cssnano");

// browsers for which autoprefix will add prefixes
// var browsers = "> 1%, last 2 versions, IE >= 8, Firefox ESR, Opera 12.1";
var browsers = "> 1%";

gulp.task("less", function() {
  // compile less files
  gulp.src("src/less/main.less")
    .pipe(gulpLess())
    // .pipe(gulpCssnano())
    .pipe(gulpAutoprefixer(browsers))
    .pipe(gulp.dest("public/css/"));
});

gulp.task("browserslist", function() {
  // display browsers for which autoprefix will add prefixes
  console.log(browserslist(browsers));
});

gulp.task("fonts", function() {
  return gulp.src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("public/fonts/"));
});

gulp.task("imagemin", function() {
  return gulp.src("src/img/*.jpg")
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }]
    }))
    .pipe(gulp.dest("public/img/"));
});

gulp.task("watch", function() {
  gulp.watch("src/less/**/*.less", ["less"]);
});
