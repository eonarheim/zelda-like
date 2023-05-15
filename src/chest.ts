import { Actor, CollisionType, Engine, ImageSource, Input, Sprite, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "./resources";
import { Player } from "./player";

export class Chest extends Actor {
    private _open = false;
    chestClosed!: Sprite;
    chestOpened!: Sprite;
    constructor(pos: Vector, public player: Player) {
        super({
            pos,
            width: 16,
            height: 16,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine): void {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.TileSetSpriteSheetPng as ImageSource,
            grid: {
                spriteHeight: 16,
                spriteWidth: 16,
                rows: 15,
                columns: 15
            }
        })

        this.chestClosed = spriteSheet.getSprite(6, 8) as Sprite;
        this.chestOpened = spriteSheet.getSprite(6, 9) as Sprite;

        this.graphics.use(this.chestClosed);
    }

    onPreUpdate(engine: Engine, _delta: number): void {
        const interactable = this.player.pos.distance(this.pos) <= 17;

        if (interactable && engine.input.keyboard.wasReleased(Input.Keys.A)) {
            this.open();
        }
    }

    public open() {
        if (!this._open) {
            this._open = true
            // TODO some inventory stuff
            // Play sound
            this.graphics.use(this.chestOpened);
        }
    }
}