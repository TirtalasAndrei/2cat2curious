scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Pisica.vy == 0) {
        Pisica.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
let Pisica: Sprite = null
scene.setBackgroundColor(9)
Pisica = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . . f f f f f . 
    . . . . . . . . . . f 5 5 f f . 
    f f f f f f f f f f f f f f f . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Pisica, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Pisica.ay = 350
scene.cameraFollowSprite(Pisica)
