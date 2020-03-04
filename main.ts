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
function Level () {
    if (next_level == list2.length) {
        game.over(true)
    }
    scene.setTileMap(list2[next_level])
    for (let value of scene.getTilesByType(7)) {
        scene.place(value, Wizard)
    }
    next_level += 1
}
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
function Spell () {
	
}
scene.onHitTile(SpriteKind.Player, 3, function (sprite) {
    Level()
})
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
})
function background () {
    list2 = [img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f c c c c c c 2 2 2 c c c c c c 2 2 2 c c c c c 2 2 2 2 2 2 c c c 2 2 c c c c c 2 2 2 2 2 2 c c c c c c c 2 2 2 2 c c c c c 2 2 c c c c c c 2 2 2 c f 
f c 2 c c c 2 2 2 2 2 c c c c 2 2 2 2 2 c c c 2 2 2 2 2 2 2 2 c c 2 2 c c c c c 2 2 2 2 2 2 2 c c c c c c 2 2 2 2 2 c c c 2 2 2 2 c c c c 2 2 2 2 c f 
f c 2 c c 2 2 2 2 2 2 c c c 2 2 2 2 2 2 c c c 2 2 2 2 2 2 2 2 c c 2 2 c c c c 2 2 2 2 2 2 2 2 c c c c c 2 2 2 2 2 2 c c c 2 2 2 2 2 c c c 2 2 2 2 c f 
f c 2 2 c 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 c c 2 2 2 2 2 2 2 2 2 c 2 2 2 c c c 2 2 2 2 2 2 2 2 2 c c c 2 2 2 2 2 2 2 c c c 2 2 2 2 2 c c c 2 2 2 2 c f 
f c 2 2 c 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 c c 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 c 2 2 2 2 2 c f 
f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 c 2 2 2 2 2 c f 
f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f 
f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f 
f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f 
f c 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f 
f c 2 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 c f 
f c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c 9 9 9 9 c c 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f 6 6 6 6 f f 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
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
f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 3 8 c f 
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
f c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d c f 
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
f c b 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 b b c f 
f c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c 9 9 9 9 c c 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c f 
f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f 6 6 6 6 f f 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(6, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
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
    scene.setTile(9, img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 
6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 
6 6 6 6 b b b b b b b b b 6 6 6 6 b b b b b b b b b b 6 6 6 6 6 
6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 
6 6 6 6 6 6 b b b b 6 6 6 6 6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
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
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, true)
}
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Wizard.vy == 0) {
        Wizard.vy = -200
    }
})
let list: Image[] = []
let Count = 0
let Wizard: Sprite = null
let list2: Image[] = []
let next_level = 0
background()
wizard()
