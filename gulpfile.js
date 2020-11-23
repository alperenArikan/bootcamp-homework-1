const gulp = require("gulp");
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")


exports.sass = () => {
    return (
        gulp.src("./src/style//custom.scss")
            .pipe(sass())
            .pipe(gulp.dest("./src/style"))
    )
}
exports.autoprefixer = () => {
    return (
        gulp.src("./src/style/custom.css")
            .pipe(autoprefixer())
            .pipe(gulp.dest("./build/style"))
    )
}


exports.default = () => {
    gulp.watch("./src/style/custom.scss", gulp.series("sass", "autoprefixer"))
}