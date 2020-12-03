let angle = 0
let direction = 1
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
        angle += direction
        pins.servoWritePin(AnalogPin.P0, 180)
        direction = 0
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            # . . . #
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        direction = 180
    }
})
