let running = false
let start = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    running = true
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        time = input.runningTime() - start
    }
    running = false
})
input.onGesture(Gesture.Shake, function () {
    if (!(running)) {
        basic.showNumber(time / 1000)
    }
})
basic.forever(function () {
    if (running) {
        basic.showNumber(0)
    } else {
        basic.showIcon(IconNames.No)
    }
})
