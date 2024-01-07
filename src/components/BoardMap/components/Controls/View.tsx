import { useControls } from "react-zoom-pan-pinch";

const Control = () => {
  const { resetTransform, zoomIn, zoomOut } = useControls();
  return (
    <div className="tools">
      <button type="button" onClick={() => zoomIn()}>
        Zoom In
      </button>
      <button type="button" onClick={() => zoomOut()}>
        Zoom Out
      </button>
      <button type="button" onClick={() => resetTransform()}>
        Reset
      </button>
    </div>
  );
};

export default Control;
