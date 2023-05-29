import { Html, useProgress } from "@react-three/drei";
import { useState, CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const CanvasLoader = () => {
  const { progress } = useProgress();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");


  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="sweet-loading">
        <ScaleLoader color="#f1f1f1" height={15} />
      </div>

      <p
        style={{
          fontSize: 12,
          color: "#F1F1F1",
          textAlign: 'center'
      }}
      >
        Loading Model
      </p>
    </Html>
  );
};

export default CanvasLoader;
