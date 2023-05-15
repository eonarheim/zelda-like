import { Engine, Scene, vec } from "excalibur";
import { Player } from "./player";
import { Chest } from "./chest";
import { Resources } from "./resources";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";


export class Level extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine: Engine): void {
        // const tiledMap = Resources.TiledMap as TiledMapResource
        // tiledMap.addTiledMapToScene(engine.currentScene);

        const player = new Player(vec(16, 16));
        this.add(player);

        const chest = new Chest(vec(16*5, 16*5), player);
        this.add(chest)
    }
}