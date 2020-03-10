namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function Powerup () {
    // Ghosts spawn on all brown blocks
    for (let value of scene.getTilesByType(8)) {
        Star = sprites.create(img`
. . . . . . . . . f f f . . . . . . . . . 
. . . . . . . . . f 5 f . . . . . . . . . 
. . . . . . . . f f 5 f f . . . . . . . . 
. . . . . . . . f 5 5 5 f . . . . . . . . 
. . . . . . . f f 5 5 5 f f . . . . . . . 
f f f f f f f f d d d d d f f f f f f f f 
f 5 5 5 d d d d 5 f d f 5 d d d d 5 5 5 f 
f f 5 5 d 5 5 d 5 f d f 5 d 5 5 d 5 5 f f 
. f f 5 5 5 5 d d d d d d d 5 5 5 5 f f . 
. . f f 5 5 5 5 f 5 5 5 f 5 5 5 5 f f . . 
. . . f f 5 5 5 5 f f f 5 5 5 5 f f . . . 
. . . . f 5 5 5 5 5 5 5 5 5 5 5 f . . . . 
. . . . f f f f f f f f f f f f f . . . . 
. . . f f 1 1 1 1 2 2 2 1 1 1 1 f f . . . 
. . f f 1 1 1 1 1 1 2 1 1 1 1 1 1 f f . . 
. f f e e e e f f f 2 f f f e e e e f f . 
. f e e e e e f . . 2 . . f e e e e e f . 
. f f f f f f f . . . . . f f f f f f f . 
. . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        scene.place(value, Star)
    }
}
// Wizard can be moved with sideways arrows, camera
// follows it,  and it has an animation when casting a
// spell
function wizard () {
    Count = 0
    Wizard = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f 8 8 8 8 1 8 8 f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 8 8 1 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 2 2 2 f f . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 8 f 1 2 1 f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 f 1 2 1 f 8 8 8 f d d . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 8 1 8 f f 2 f f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 f 8 8 8 f 2 f 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f . f 8 8 f f f 8 1 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . f 1 8 8 f 8 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f d f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . f . . f f 8 8 1 8 8 1 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 1 8 8 8 8 8 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . e e . e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    list = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f 8 8 8 8 1 8 8 f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 8 8 1 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 2 2 2 f f . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 8 f 1 2 1 f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 f 1 2 1 f 8 8 8 f d d . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 8 1 8 f f 2 f f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 f 8 8 8 f 2 f 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f . f 8 8 f f f 8 1 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . f 1 8 8 f 8 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f d f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . f . . f f 8 8 1 8 8 1 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 1 8 8 8 8 8 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . e e . e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f 8 8 8 8 1 8 8 f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 8 8 1 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . . . . 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . 5 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . . 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . f f 2 2 2 f f . . . . . . e 5 5 5 . . . . . . . . . 
. . . . . . . . . . . . . f 8 f 1 2 1 f 8 f f f . . e . 5 . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 f 1 2 1 f 8 8 8 f d d . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 8 1 8 f f 2 f f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 f 8 8 8 f 2 f 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f . f 8 8 f f f 8 1 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . f 1 8 8 f 8 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f d f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . f . . f f 8 8 1 8 8 1 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 1 8 8 8 8 8 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . e e . e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f 8 8 8 8 1 8 8 f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 8 8 1 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 2 2 2 f f . . . . . . . . . 5 . 5 . . . . . . . 
. . . . . . . . . . . . . f 8 f 1 2 1 f 8 f f f . . . . . . 5 5 5 . . . . . . . 
. . . . . . . . . . . f f 8 8 f 1 2 1 f 8 8 8 f d d e e e e 5 5 5 5 . . . . . . 
. . . . . . . . . . f 8 8 1 8 f f 2 f f 8 f f f . . . . . . 5 5 5 . . . . . . . 
. . . . . . . . . . f 8 f 8 8 8 f 2 f 8 8 f . . . . . . . . 5 . 5 . . . . . . . 
. . . . . . . . . . f f . f 8 8 f f f 8 1 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . f 1 8 8 f 8 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f d f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . f . . f f 8 8 1 8 8 1 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 1 8 8 8 8 8 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . e e . e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`]
    controller.moveSprite(Wizard, 100, 0)
    Wizard.setPosition(64, 195)
    Wizard.ay = 400
    scene.cameraFollowSprite(Wizard)
}
// Teleport to next level when touching the pink block
scene.onHitTile(SpriteKind.Player, 3, function (sprite) {
    Level()
})
// Fireball projectile comes out of wizard when down
// arrow is pressed
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f 8 8 8 8 1 8 8 f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 8 8 1 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d f d d d f d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d d d . . . . 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d 1 1 1 1 1 d . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . d 1 1 1 d . . . . 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 . . . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f 2 2 2 f f . . . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 8 f 1 2 1 f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 8 8 f 1 2 1 f 8 8 8 f d d . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 8 1 8 f f 2 f f 8 f f f . e . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 f 8 8 8 f 2 f 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f . f 8 8 f f f 8 1 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d . f 1 8 8 f 8 8 8 f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f d f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . f . . f f 8 8 1 8 8 1 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . e e e e e e e 8 8 8 8 8 8 1 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f 8 1 8 8 8 8 1 8 8 8 8 8 8 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . d . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . e e . e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    Spell = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 4 . . . . . . 4 . . . . 2 . 4 . . 2 . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 2 2 2 . . . . 2 4 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 4 4 4 2 . . 2 4 2 . . . . . 2 . . . . . . 2 . . 
. . 2 2 2 2 2 . . . . . . . 2 4 4 4 4 4 2 2 4 4 4 2 2 2 . . . . . . . . . . . . 
. . . 4 4 4 4 4 . . . . . 2 4 4 4 4 5 4 4 4 4 4 4 4 4 4 2 . . 2 2 . . . . . . . 
. . . . . . . . . . . . 2 4 4 4 4 5 5 5 4 4 4 4 4 4 4 4 4 2 2 4 2 . . . . . . . 
. . . . . . . . . . . 2 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 2 . . 2 . . . . 
. . . 2 2 2 . . . . 2 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 2 2 . . . . . . . . 
. . . . 4 4 4 . . . 2 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 2 . . . 4 . . . . . . 
. . . . . . . . . . 2 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 2 . . . . . . . . . 
. . . . . . . . . . . 2 4 4 4 4 4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 . . . . . . . . 
. 2 2 2 2 2 2 2 . . . . 2 4 4 4 4 5 5 5 4 4 4 5 5 5 4 4 4 2 4 4 2 . . 4 . . . . 
. . 4 4 4 4 4 4 4 . . . . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . 2 4 4 4 4 4 2 2 4 4 4 2 2 4 4 2 . . . . . . . . . . 
. . . . . . . . . . . . 4 . . 2 4 4 4 2 . . 2 4 2 . . 2 4 4 2 . . . . . . . . . 
. . . . . . . . . 4 . . . . . . 2 2 2 . 4 . . 2 4 2 . . 2 4 2 . . 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 4 . . . . . . . 2 . . . 2 . 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, Wizard, 300, 0)
})
function background () {
    // Splashes direction at start of game
    game.showLongText("Welcome, you are playing the Wizarding Adventure of Education!", DialogLayout.Bottom)
    game.showLongText("Use the left and right arrow keys to move sideways.", DialogLayout.Bottom)
    game.showLongText("Press the up arrow key to jump. Press the dow arrow key to cast a spell!", DialogLayout.Bottom)
    game.showLongText("Beat all 4 levels to win. Be careful of the enemy spirits and pools of poison!", DialogLayout.Bottom)
    info.setLife(3)
    // Different levels
    list2 = [img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 3 b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 4 4 4 4 4 c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b 4 b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 b b b b b e b b b b b b b b b 1 f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 4 4 4 b b b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b 4 4 4 4 b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 4 4 4 4 b b b b b b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 b b b b b b b b b b b b b e b b b b b 4 4 b 1 f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b 4 4 4 b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 b b b b b b e b b b b b b b b b b b b b b b b b b 1 f 
f c c c c c c b b b c c c c c c b b b c c c c c b b b b b b c c c b b c c c c c b b b b b b c c c c c c c b b b b c c c c c b b c c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b c f 
f c b c c c b b b b b c c c c b b b b b c c c b b b b b b b b c c b b c c c c c b b b b b b b c c c c c c b b b b b c c c b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b c c b 8 b b b b c c c b b b b b b c c c b b b b b b b b c c b b c c c c b b b b b b b b c c c c c b b b b b b c c c b b b b b c c c b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b c f 
f c b b c 4 4 4 b b b b c b b b b b b b b c c b b b b b b b b b c b b b c c c b b b b b b b b b c c c b b b b b b b c c c b b b b b c c c b b b b b b b b b b b b b b b 4 4 4 4 b b b b b b b b b b c f 
f c b b c b b b b b b b c b b b b b b b b b c b b b b b b b b b b b b b c c b b b b b b b b b b b c b b b b b b b b b c b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b c b b b b b b b b b c b b b b b b b c b b b b b 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 b b b b b b b b b b b b b 8 b c f 
f c b b b 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 b b b b b b b b b b b 4 b b b b b b b b b b b c f 
f c b 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 b b b b b b b b b b b b b b b b b b b c f 
f c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e b b b b b b e b b b b b b e b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c c c c c c c c c c c c c c c b b c c c c b b b b b b e b b b b b b c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c c c c c c c c c c c c c c c b b c c c c 1 c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c f 
f c c c c c c c c c c c c c c c 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c f 
f c c c c c c c c c c c c c c c 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f c c c c c c 8 8 8 c c c c c c 8 8 8 c c c c c 8 8 8 8 8 8 c c c 8 8 c c c c c 8 8 8 8 8 8 c c c c c c c 8 8 8 8 c c c c c 8 8 c c c c c c 8 8 8 c f 
f c 8 c c c 8 8 8 8 8 c c c c 8 8 8 8 8 c c c 8 8 8 8 8 8 8 8 c c 8 8 c c c c c 8 8 8 8 8 8 8 c c c c c c 8 8 8 8 8 c c c 8 8 8 8 c c c c 8 8 8 8 c f 
f c 8 c c 8 8 8 8 8 8 c c c 8 8 8 8 8 8 c c c 8 8 8 8 8 8 8 8 c c 8 8 c c c c 8 8 8 8 8 8 8 8 c c c c c 8 8 8 8 8 8 c c c 8 8 8 8 8 c c c 8 8 8 8 c f 
f c 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 c c 8 8 8 8 8 8 8 8 8 c 8 8 8 c c c 8 8 8 8 8 8 8 8 8 c c c 8 8 8 8 8 8 8 c c c 8 8 8 8 8 c c c 8 8 8 8 c f 
f c 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 c f 
f c 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 c f 
f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f 
f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f 
f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f 
f c 8 8 8 8 8 8 8 8 8 8 8 8 4 4 4 8 8 8 8 4 4 4 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f 
f c 8 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 3 8 c f 
f c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c 9 9 9 9 c c 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f 6 6 6 6 f f 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f c c c c c c d d d c c c c c c d d d c c c c c d d d d d d c c c d d c c c c c d d d d d d c c c c c c c d d d d c c c c c d d c c c c c c d d d c f 
f c d c c c d d d d d c c c c d d d d d c c c d d d d d d d d c c d d c c c c c d d d d d d d c c c c c c d d d d d c c c d d d d c c c c d d d d c f 
f c d c c d d d d d d c c c d d d d d d c c c d d d d d d d d c c d d c c c c d d d d d d d d c c c c c d d d d d d c c c d d d d d c c c d d d d c f 
f c d d c d d d d d d d c d d d d d d d d c c d d d d d d d d d c d d d c c c d d d d d d d d d c c c d d d d d d d c c c d d d d d c c c d d d d c f 
f c d d c d d d d d d d c d d d d d d d d d c d d d d d d d d d d d d d c c d d d d d d d d d d d c d d d d d d d d d c d d d d d d d c d d d d d c f 
f c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c d d d d d d d d d d d c d d d d d d d d d c d d d d d d d c d d d d d c f 
f c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c d d d d d d d d d d d d d d d d d d d d d d d c f 
f c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c f 
f c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c f 
f c d d d d d d d d d d d d 4 4 4 d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c f 
f c d 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d c f 
f c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c 9 9 9 9 c c 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f 6 6 6 6 f f 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`]
    next_level = 0
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f c c c c c c b b b c c c c c c b b b c c c c c b b b b b b c c c b b c c c c c b b b b b b c c c c c c c b b b b c c c c c b b c c c c c c b b b c f 
f c b c c c b b b b b c c c c b b b b b c c c b b b b b b b b c c b b c c c c c b b b b b b b c c c c c c b b b b b c c c b b b b c c c c b b b b c f 
f c b c c b b b b b b c c c b b b b b b c c c b b b b b b b b c c b b c c c c b b b b b b b b c c c c c b b b b b b c c c b b b b b c c c b b b b c f 
f c b b c b b b b b b b c b b b b b b b b c c b b b b b b b b b c b b b c c c b b b b b b b b b c c c b b b b b b b c c c b b b b b c c c b b b b c f 
f c b b c b b b b b b b c b b b b b b b b b c b b b b b b b b b b b b b c c b b b b b b b b b b b c b b b b b b b b b c b b b b b b b c b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b c b b b b b b b b b c b b b b b b b c b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b 4 4 4 b b b b 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b b b e b b b b b b b b b b 3 b b c f 
f c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c 1 c c c c c c c 1 c 9 9 9 9 c c 9 9 9 9 c c c c c c 1 c c c c c c c c c 1 c c c c c c c c c f 
f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f 6 6 6 6 f f 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    // Creates walls of these colored blocks
    scene.setTile(6, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
    scene.setTile(1, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
    scene.setTile(12, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
    scene.setTile(14, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
    scene.setTile(8, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
    scene.setTile(9, img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 
7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 
7 7 7 7 b b b b b b b b b 7 7 7 7 b b b b b b b b b b 7 7 7 7 7 
7 7 7 7 7 b b b b b b 7 7 7 7 7 7 7 b b b b b b b b 7 7 7 7 7 7 
7 7 7 7 7 7 b b b b 7 7 7 7 7 7 7 7 7 b b b b b b 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
    scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e e e e e e e e f 
f e e e f f f f f f e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e e e e e 5 5 e f 
f e e e f f f f f f e e 5 5 e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e e e e e e e e f 
f e e e f f f f f f e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(4, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e e e e e e e e f 
f e e e f f f f f f e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e e e e e 5 5 e f 
f e e e f f f f f f e e 5 5 e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e e e e e e e e f 
f e e e f f f f f f e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(1, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
    enemy()
    Powerup()
}
// Ghost dies when hit with spell projectile from
// wizard
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
    sprite.destroy(effects.coolRadial, 500)
})
// Wizard dies when hitting the liquid    
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.splash("You earned a paycheck!")
    music.powerUp.play()
    otherSprite.destroy(effects.confetti, 500)
    info.changeLifeBy(1)
})
// Ghost dies when hit with spell projectile from
// wizard
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    scene.cameraShake(4, 200)
    info.changeScoreBy(1)
})
function enemy () {
    // Ghosts spawn on all brown blocks
    for (let value of scene.getTilesByType(14)) {
        Mob = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d e e e e e e e e d f . . . . . . 
. . . . . . e e e b f e e f b e e e . . . . . . 
. . . . . . f c e c f e e f c e c f . . . . . . 
. . . . . . . f e e e e e e e e f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b f f f f f f b 1 b 1 f . . . . 
. . . . f b f b f 1 2 2 2 2 1 f b f b f . . . . 
. . f f f f . . f 1 1 2 2 1 1 f . . . . . . . . 
. f . . . . f . f f 1 2 2 1 f f . . . . . . . . 
. f . . . . f . f f f 1 1 f f f . . . . . . . . 
e e e e e e e e . f f f f f f . . . . . . . . . 
e e e e e e e e . . f f f f . . . . . . . . . . 
e e e e e e e e . . . f f f f . . . . . . . . . 
`, SpriteKind.Enemy)
        Mob.vx = 100
        Mob.ay = 300
        scene.place(value, Mob)
    }
}
// Wizard spawns on green blocks on each level and
// splashes what level you are on. You win when you
// hit the last level
function Level () {
    if (next_level == list2.length) {
        game.over(true)
    }
    scene.setTileMap(list2[next_level])
    for (let value of scene.getTilesByType(7)) {
        scene.place(value, Wizard)
    }
    next_level += 1
    if (next_level == 1) {
        game.splash("level 2: Business")
    }
    if (next_level == 2) {
        game.splash("level 3: Leader")
    }
    enemy()
    Powerup()
}
// Ghost switches direction when hitting a wall
scene.onHitTile(SpriteKind.Enemy, 1, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . f f 1 1 1 1 f f . . . 
. . . . f b 1 1 1 1 1 1 b f . . 
. . . . f d 1 1 1 1 1 1 1 f . . 
. . . f d d 1 1 1 1 1 1 1 d f . 
. . . f d d d 1 1 1 1 1 1 d f . 
. . . f d d d d e e e e 1 d f . 
. . . f b e e e e b f e 1 d f . 
. . . f c e b b e c f e e e f . 
. . . . f c b b e e e e 1 f . . 
. . . . . f f f 1 1 1 b 1 f . . 
. . . . . f b 1 f f c 1 f f . . 
. . . . . f 1 f 1 1 f 2 2 . . . 
. . . f . f 1 e e e e 2 . . . . 
. . . f f f f e e e e 2 . . . . 
`)
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . f f 1 1 1 1 f f . . . . . 
. . f b 1 1 1 1 1 1 b f . . . . 
. . f 1 1 1 1 1 1 1 d f . . . . 
. f d 1 1 1 1 1 1 1 d d f . . . 
. f d 1 1 1 1 1 1 d d d f . . . 
. f d 1 e e e e d d d d f . . . 
. f d 1 e f b e d d d b f . . . 
. f e e e f c e b b b c f . . . 
. . f 1 e e e e b b c f . . . . 
. . f 1 b 1 1 1 f f f . . . . . 
. . f f 1 c f f 1 b f . . . . . 
. . . 2 2 f 1 1 f 1 f . . . . . 
. . . . 2 e e e e 1 f . f . . . 
. . . . 2 e e e e f f f f . . . 
`)
    }
    sprite.vx = sprite.vx * -1
})
// Wizard jumps when pressing up arrow
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Wizard.vy == 0) {
        Wizard.vy = -200
    }
})
let Mob: Sprite = null
let next_level = 0
let list2: Image[] = []
let Spell: Sprite = null
let list: Image[] = []
let Wizard: Sprite = null
let Count = 0
let Star: Sprite = null
background()
wizard()
