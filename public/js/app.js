$(document).ready(function(){
    let cursor = $(".cursor");
    cursor.css({
        opacity: "0"
    });
    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
    $(".box")
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });
    $(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
});

let ageSpan = document.getElementById('age')
let dateNaissance = new Date("12/27/2003")

let ma_diff = Date.now() - dateNaissance.getTime()
let age_dt = new Date(ma_diff)
let an = age_dt.getUTCFullYear()
let age = Math.abs(an - 1970)

ageSpan.innerText = age.toString()

let copyrightDate = document.getElementById('copyrightDate')
var aujd = new Date()
var annee = aujd.getFullYear()

copyrightDate.innerText = annee