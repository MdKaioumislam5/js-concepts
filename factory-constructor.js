var createRectangle = function(width, height) {
    return {
        width: width,
        height: height,

        draw: function(){
            console.log('I am Rectangle')
            this.printProperties()
        },

        printProperties: function() {
            console.log('my width is'  +  this.width)
            console.log('my height is'  +  this.height)
        }
    }
}

var rect1 = createRectangle(10, 8)
rect1.draw()

var rect2 = createRectangle(40, 30)
rect2.draw()

var Rectangle = function (width, height) {
    this.width = width,
    this.height = height,

    this.draw = function(){
        console.log('I am Rectangle')
        this.printProperties()
    },

    this.printProperties = function() {
        console.log('my width is '  +  this.width)
        console.log('my height is '  +  this.height)
    }
}

var rect3 =new Rectangle(10, 8)
rect3.draw()