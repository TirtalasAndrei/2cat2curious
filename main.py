def on_a_pressed():
    if Pisica.vy == 0:
        Pisica.vy = -200
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

Pisica: Sprite = None
scene.set_background_color(9)
Pisica = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(Pisica, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
Pisica.ay = 350
scene.camera_follow_sprite(Pisica)