var a = 2
var b = 3
var c = 4

if (a < b || a < c && b < c) {
    console.log(a*c)
    console.log(c/a)
} else if (a < b || a < c && c < b) {
    console.log(a*b)
    console.log(b/a)
} else if (b < a || b < c && a < c) {
    console.log(b*c)
    console.log(c/b)
} else if (b < a || b < c && c < a) {
    console.log(b*a)
    console.log(a/b)
} else if (c < a || c < b && a < b) {
    console.log(c*b)
    console.log(b/c)
} else if (c < a || c < b && b < a) {
    console.log(b*c)
    console.log(c/b)
}