const gulp = require('gulp')
const babel = require('gulp-babel')

//编译es6
gulp.task('babel', ()=>{
    return gulp.src('src/**/*.js')
               .pipe(babel({
                   presets : ['es2015', 'stage-3']
               }))
               .pipe(gulp.dest('lib'))  
                
})

gulp.task('default', ['babel'] ,()=>{
    gulp.watch(['src/**/*.js'],['babel'])
});