var Rectangle = function (width, height) {
    this.width = width,
    this.height = height,
    var position = {
        x: 56,
        y: -100
    }

    var printProperties = function() {
        console.log('my width is '  +  this.width)
        console.log('my height is '  +  this.height)
    },
    this.draw = function(){
        console.log('I am Rectangle')
        printProperties()
    }
}

var rect3 =new Rectangle(10, 8)
rect3.draw()