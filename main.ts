namespace SpriteKind {
    export const Bankmand = SpriteKind.create()
    export const Penge = SpriteKind.create()
    export const points = SpriteKind.create()
}
let Penge1 = 0
let Cassandra = sprites.create(img`
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
    `, SpriteKind.Player)
controller.moveSprite(Cassandra, 100, 100)
Cassandra.setPosition(13, 16)
info.setLife(3)
scene.cameraFollowSprite(Cassandra)
Cassandra.ay = 350
for (let value of sprites.allOfKind(SpriteKind.Bankmand)) {
    sprites.destroy(value)
}
for (let value of sprites.allOfKind(SpriteKind.points)) {
    sprites.destroy(value)
}
for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
    Penge1 = 0
}
