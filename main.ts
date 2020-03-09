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
// Wizard can be moved with sideways arrows, camera
// follows it,  and it has an animation when casting a
// spell
function wizard () {
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
f c c c c c c b b b c c c c c c b b b c c c c c b b b b b b c c c b b c c c c c b b b b b b c c c c c c c b b b b c c c c c b b c c c c c c b b b b b b b 4 4 4 4 4 b b 4 b b b b b b b b b b b b b c f 
f c b c c c b b b b b c c c c b b b b b c c c b b b b b b b b c c b b c c c c c b b b b b b b c c c c c c b b b b b c c c b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b c c b b b b b b c c c b b b b b b c c c b b b b b b b b c c b b c c c c b b b b b b b b c c c c c b b b b b b c c c b b b b b c c c b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b c f 
f c b b c b b b b b b b c b b b b b b b b c c b b b b b b b b b c b b b c c c b b b b b b b b b c c c b b b b b b b c c c b b b b b c c c b b b b b b b b b b b b b b b 4 4 4 4 b b b b b b b b b b c f 
f c b b c b b b b b b b c b b b b b b b b b c b b b b b b b b b b b b b c c b b b b b b b b b b b c b b b b b b b b b c b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b c b b b b b b b b b c b b b b b b b c b b b b b 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 b b b b b b b b b b b b b b b c f 
f c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f 
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
b b b b b b b b b b b b b b b b 
b b b b b b 9 9 9 9 b b b b b b 
b b b b 9 9 9 5 5 9 9 9 b b b b 
b b b 6 6 6 6 9 9 9 9 9 9 b b b 
b b 9 6 6 6 6 8 8 8 1 1 9 9 b b 
b b 6 6 6 6 6 8 8 8 1 1 5 9 b b 
b 9 6 6 6 6 8 8 8 8 8 5 5 9 9 b 
b 9 6 6 6 8 8 8 9 9 9 9 5 9 9 b 
b 9 9 6 6 8 8 9 9 9 9 9 9 9 9 b 
b 9 8 6 6 8 8 9 9 9 9 9 9 9 9 b 
b b 9 8 6 6 8 9 9 9 9 9 8 9 b b 
b b 9 8 8 6 8 8 9 9 9 8 9 9 b b 
b b b 9 8 8 8 8 8 8 8 8 9 b b b 
b b b b 9 9 8 8 8 8 9 9 b b b b 
b b b b b b 9 9 9 9 b b b b b b 
b b b b b b b b b b b b b b b b 
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
b b b b b b b b b b b b b b b b 
b b b b b b c c c c b b b b b b 
b b b b c c c f f c c c b b b b 
b b b c b b b c c c c c c b b b 
b b c b b b b a a a 1 1 c c b b 
b b c b b b b a a a 1 1 f c b b 
b c b b b b a a a a a f f c c b 
b c b b b a a a c c c c f c c b 
b c c b b a a c c c c c c c c b 
b c a b b a a c c c c c c c c b 
b b c a b b a c c c c c a c b b 
b b c a a b a a c c c a c c b b 
b b b c a a a a a a a a c b b b 
b b b b c c a a a a c c b b b b 
b b b b b b c c c c b b b b b b 
b b b b b b b b b b b b b b b b 
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
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . f f 1 1 1 1 f f . . . . . 
. . f b 1 1 1 1 1 1 b f . . . . 
. . f 1 1 1 1 1 1 1 d f . . . . 
. f d 1 1 1 1 1 1 1 d d f . . . 
. f d 1 1 1 1 1 1 d d d f . . . 
. f d 1 1 1 d d d d d d f . . . 
. f d 1 d f b d d d d b f . . . 
. f b d d f c d b b b c f . . . 
. . f 1 1 1 1 1 b b c f . . . . 
. . f 1 b 1 f f f f f . . . . . 
. . f b f c 1 1 1 b f . . . . . 
. . . f f 1 b 1 b f f . . . . . 
. . . . f b f b f f f . f . . . 
b b b b b f f f f f f f f . . . 
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
}
// Ghost switches direction when hitting a wall
scene.onHitTile(SpriteKind.Enemy, 1, function (sprite) {
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
background()
wizard()
