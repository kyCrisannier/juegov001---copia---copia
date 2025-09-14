controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionCorrer`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -100
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionCorrerL`,
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionIdleL`,
    180,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    animation.runImageAnimation(
    mySprite,
    assets.animation`AnimacionIdle`,
    180,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`pantalla de carga`)
game.splash("presiona A para empezar", img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `)
forever(function () {
    music.play(music.stringPlayable("G A E E G E E D ", 72), music.PlaybackMode.UntilDone)
})
