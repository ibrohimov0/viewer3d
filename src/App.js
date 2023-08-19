import './App.css';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF, Stars} from "@react-three/drei"

function Model(props) {
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}
function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="Model">
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model/>
          </Canvas>
        </div>
        <div className="Text">
          <h1>3d Objects</h1>
          <p>This object was created with Blender.You can see 360*.Everything looks good. :)</p>
        </div>
      </div>

    </div>
  );
}

export default App;