// load packages
var browserslist      = require("browserslist");
var gulp              = require("gulp");
var gulpAutoprefixer  = require("gulp-autoprefixer");
var gulpLess          = require("gulp-less");
var gulpMinifyCss     = require("gulp-minify-css");

// browsers for which autoprefix will add prefixes
var browsers = "> 1%, last 2 versions, IE >= 8, Firefox ESR, Opera 12.1";

gulp.task("less", function() {
  // compile less files
  gulp.src("src/less/main.less")
    .pipe(gulpLess())
    .pipe(gulpMinifyCss())
    .pipe(gulpAutoprefixer(browsers))
    .pipe(gulp.dest("public/css/"));
});

gulp.task("browserslist", function() {
  // display browsers for which autoprefix will add prefixes
  console.log(browserslist(browsers));
});

gulp.task("watch", function() {
  gulp.watch("src/less/**/*.less", ["less"]);
});
