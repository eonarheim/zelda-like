import { Actor, CollisionType, Color, Engine, ImageSource, Input, Sprite, SpriteSheet, Vector, vec } from "excalibur";
import { Config } from "./config";
import { Resources } from "./resources";
import { Animation } from "excalibur";

export class Player extends Actor {
    constructor(pos: Vector) {
        super({
            pos,
            width: 16,
            height: 16,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine: Engine): void {
        const playerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.HeroSpriteSheetPng as ImageSource,
            grid: {
                spriteWidth: 16,
                spriteHeight: 16,
                rows: 8,
                columns: 8
            }
        });

        const leftIdle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 1) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 1) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 1) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 1) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        })
        this.graphics.add('left-idle', leftIdle);

        const rightIdle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 2) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 2) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 2) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 2) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        })
        this.graphics.add('right-idle', rightIdle);


        const upIdle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 3) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 3) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 3) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 3) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        })
        this.graphics.add('up-idle', upIdle);

        const downIdle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 0) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 0) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 0) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 0) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        })
        this.graphics.add('down-idle', downIdle);

        const leftWalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 5) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 5) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 5) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 5) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        })
        this.graphics.add('left-walk', leftWalk);

        const rightWalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 6) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 6) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 6) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 6) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        });
        this.graphics.add('right-walk', rightWalk);

        const upWalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 7) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 7) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 7) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 7) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        });
        this.graphics.add('up-walk', upWalk);

        const downWalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 4) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(1, 4) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(2, 4) as Sprite, duration: Config.PlayerFrameSpeed},
                {graphic: playerSpriteSheet.getSprite(3, 4) as Sprite, duration: Config.PlayerFrameSpeed},
            ]
        });
        this.graphics.add('down-walk', downWalk);
    }

    onPreUpdate(engine: Engine, elapsedMs: number): void {
        this.vel = Vector.Zero;

        this.graphics.use('down-idle');
        if (engine.input.keyboard.isHeld(Input.Keys.ArrowRight)) {
            this.vel = vec(Config.PlayerSpeed, 0);
            this.graphics.use('right-walk');
        }
        if (engine.input.keyboard.isHeld(Input.Keys.ArrowLeft)) {
            this.vel = vec(-Config.PlayerSpeed, 0);
            this.graphics.use('left-walk');
        }
        if (engine.input.keyboard.isHeld(Input.Keys.ArrowUp)) {
            this.vel = vec(0, -Config.PlayerSpeed);
            this.graphics.use('up-walk');
        }
        if (engine.input.keyboard.isHeld(Input.Keys.ArrowDown)) {
            this.vel = vec(0, Config.PlayerSpeed);
            this.graphics.use('down-walk');
        }

    }
}