import UI from './ui.js';
import Grid from './grid.js';
import Cell from './cell.js';
import Scene from './scene.js';

const map = [
  'a a a a a a',
  ' a a a a o o',
  'o o o o o o',
  ' o g g g g o',
  'o o g g g o',
  ' o o f f f f o',
  'o o f f f o',
  ' o o d d d d o'
].map((row) => row.trim().split(' '));

const scene = new Scene({});

const grid = Grid.fromMap(map, 40);
scene.add(grid.group);

var geometry = new THREE.BoxGeometry(10, 10, 35);
var material = new THREE.MeshBasicMaterial( { color: 0xb5f4f4 } );
var cube = new THREE.Mesh( geometry, material );
cube.position.x -= 6;
cube.rotation.z += 0.1;
cube.rotation.x -= 0.5;
scene.add( cube );

geometry = new THREE.BoxGeometry(10, 10, 20);
material = new THREE.MeshBasicMaterial( { color: 0xa8eded } );
cube = new THREE.Mesh( geometry, material );
cube.position.x += 6;
cube.position.y += 5;
cube.rotation.z += 0.1;
cube.rotation.x -= 0.5;
scene.add( cube );

geometry = new THREE.BoxGeometry(10, 10, 20);
material = new THREE.MeshBasicMaterial( { color: 0x8fe0e0 } );
cube = new THREE.Mesh( geometry, material );
cube.position.x += 3;
cube.position.y -= 5;
cube.rotation.z += 0.1;
cube.rotation.x -= 0.5;
scene.add( cube );

const ui = new UI(scene, grid.cells.map((c) => c.mesh));


function render(time) {
  scene.render();
  requestAnimationFrame(render);
}
render();

