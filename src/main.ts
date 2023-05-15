import { DisplayMode, Engine, Loader } from 'excalibur';
import { Level } from './level';
import { Resources } from './resources';

console.log("Hello Zelda! 🗡️");

const game = new Engine({
    displayMode: DisplayMode.FitScreen,
    width: 16 * 16,
    height: 16 * 9,
    antialiasing: false
});

const level = new Level()

game.add('first-level', level);

game.goToScene('first-level');

const loader = new Loader()
for (let resourceKey in Resources) {
    const resource = Resources[resourceKey];
    loader.addResource(resource);
}

game.start(loader);