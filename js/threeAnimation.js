

  var scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xe2d3da );
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer();

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.basicShadowMap;

  
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  var geometry = new THREE.BoxGeometry( -2, 2, -2 );
  var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );


  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
