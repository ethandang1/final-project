controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        Wizard.setImage(list[Count])
        pause(100)
        if (Count < 2) {
            Count += 1
        } else {
            Count = 0
        }
    }
    Wizard.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 8 6 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 1 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 9 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 6 8 8 8 1 8 8 9 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 8 8 8 8 8 8 8 8 8 8 8 8 6 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 1 8 8 8 . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . e . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 6 8 8 8 8 8 8 8 8 d d . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 9 8 8 8 8 . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 . 8 8 8 8 8 8 6 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 9 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 1 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 1 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
let list: Image[] = []
let Wizard: Sprite = null
let Count = 0
Count = 0
Wizard = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 8 6 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 1 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 9 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 6 8 8 8 1 8 8 9 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 8 8 8 8 8 8 8 8 8 8 8 8 6 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 1 8 8 8 . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . e . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 6 8 8 8 8 8 8 8 8 d d . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 9 8 8 8 8 . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 . 8 8 8 8 8 8 6 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 9 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 1 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 1 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
list = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 8 6 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 1 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 9 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 6 8 8 8 1 8 8 9 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 8 8 8 8 8 8 8 8 8 8 8 8 6 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 1 8 8 8 . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . e . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 6 8 8 8 8 8 8 8 8 d d . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 9 8 8 8 8 . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 . 8 8 8 8 8 8 6 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 9 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 1 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 1 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 8 6 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 1 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 9 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 6 8 8 8 1 8 8 9 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 8 8 8 8 8 8 8 8 8 8 8 8 6 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . . . . 5 . 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . . . 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . . 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 1 8 8 8 . . . . . . e 5 5 5 . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . e . 5 . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 6 8 8 8 8 8 8 8 8 d d . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 9 8 8 8 8 . . e . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 . 8 8 8 8 8 8 6 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 9 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 1 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 1 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 8 6 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 1 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 9 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 6 8 8 8 1 8 8 9 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 8 8 8 8 8 8 8 8 8 8 8 8 6 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 1 1 1 8 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 1 8 8 8 . . . . . . . . 5 . 5 . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . 5 5 5 . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 6 8 8 8 8 8 8 8 8 d d e e e 5 5 5 5 . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 9 8 8 8 8 . . . . . . . 5 5 5 . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 5 . 5 . . . . . . . . 
. . . . . . . . . . 8 8 . 8 8 8 8 8 8 6 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . 8 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 9 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 1 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 1 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`]
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 5 . . . . . . . . . . 
. . . . . . . . . . 5 5 . . . . . . . . . . 
. . . . . . . . . . 5 5 . . . . . . . . . . 
. . . . . . . . . . 5 . 5 . . . . . . . . . 
. . . . . 5 5 5 5 5 . . 5 5 5 5 5 5 . . . . 
. . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . 5 5 . . . 5 5 5 . . . . . . 
. . . . . . . . 5 5 5 5 5 . 5 . . . . . . . 
. . . . . . . 5 . 5 5 5 5 . 5 5 . . . . . . 
. . . . . . . 5 5 5 . . . 5 . 5 . . . . . . 
. . . . . . 5 5 5 . . . . . 5 5 5 . . . . . 
. . . . . 5 5 . . . . . . . . 5 5 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
