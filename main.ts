function doSomething3 () {
    wuKong.setAllMotor(-100, -100)
}
function doSomething () {
    wuKong.setAllMotor(-80, 0)
}
function doSomething2 () {
    wuKong.setAllMotor(0, -80)
}
basic.showIcon(IconNames.House)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        doSomething3()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        doSomething2()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        doSomething()
    }
})
