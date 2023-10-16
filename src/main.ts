import * as BABYLON from '@babylonjs/core'

const canvas: HTMLCanvasElement = document.getElementById('renderCanvas') as HTMLCanvasElement
const engine = new BABYLON.Engine(canvas)

const createScene = function () {
    const scene = new BABYLON.Scene(engine)
    return scene
}

const scene = createScene()

engine.runRenderLoop(function () {
    scene.render()
})