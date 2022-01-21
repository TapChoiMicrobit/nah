input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + Hour + ":" + Minutes + ":" + Second)
})
let Hour = 0
let Minutes = 0
let Second = 0
Second = 50
Minutes = 23
Hour = 8
basic.forever(function () {
    Second += 1
    if (Second >= 60) {
        Second = 0
        Minutes += 1
    }
    if (Minutes >= 60) {
        Minutes = 0
        Hour += 1
    }
    if (Hour >= 24) {
        Hour = 0
    }
    basic.pause(2000)
})
