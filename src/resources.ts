import { ImageFiltering, ImageSource, Loadable } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';

import HeroSpriteSheetFile from '../img/Solaria Demo Pack Update 03/Solaria Demo Pack Update 03/16x16/Sprites/Hero 01.png';
import TileSetFile from '../img/Solaria Demo Pack Update 03/Solaria Demo Pack Update 03/16x16/Tilesets/Solaria Demo Update 01.png';

import TiledMap from '../tiled/first-level.tmx';

export const Resources: {[key: string]: Loadable<any> } = {
    HeroSpriteSheetPng: new ImageSource(HeroSpriteSheetFile, false, ImageFiltering.Pixel),
    TileSetSpriteSheetPng: new ImageSource(TileSetFile, false, ImageFiltering.Pixel),
    // TiledMap: new TiledMapResource(TiledMap)
}