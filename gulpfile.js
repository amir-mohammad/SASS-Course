const gulp= require('gulp');
const sass = require('gulp-sass');


// compile Sass
gulp.task('sass', ()=>{
    gulp.src(['node_modules/bootstrap/scss/bootstrap.scss' , 'src/scss/style.scss' ,'node_modules/@fortawesome/fontawesome-free/css/all.min.css'])
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'));
});

//Moving Js files
gulp.task('jsFiles' , ()=>{
    gulp.src(['node_modules/jquery/dist/jquery.min.js' , 
    'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest('src/js'));
});

gulp.task('fonts', ()=>{
    gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('src/webfonts'));
});

gulp.task('copyHTML', ()=>{
    gulp.src('node_modules/*.html')
    .pipe(gulp.dest('src/'));
});


gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss' , 'src/scss/style.scss'],['sass']);
gulp.watch(['node_modules/jquery/dist/jquery.min.js' , 
'node_modules/bootstrap/dist/js/boostrap.min.js', 
'node_modules/tether/dist/js/tether.min.js'],['jsFiles']);
gulp.watch('node_modules/font-awesome/fonts/*',['fonts']);

gulp.task('default',['sass' , 'jsFiles' , 'fonts' , 'copyHTML']);