import { DragEvent, useState } from "react";
import * as css from "./View.styles";
// import { RotateCw, RotateCcw } from "react-feather";

const Tiles = ({ ids }: { ids: string }) => {
  // const [degreeRotate, setDegreeRotate] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // const rotation = [0, 90, 180, 270];

  function onDragOver(ev: DragEvent) {
    ev.preventDefault();
    setIsHover(true);
  }
  function onDragLeave(ev: DragEvent) {
    ev.preventDefault();
    setIsHover(false);
  }

  function drop(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();

    const target = ev.target as HTMLDivElement;
    const data = ev.dataTransfer.getData("text");
    const el = document.getElementById(data);
    if (el) target.appendChild(el);
    setIsHover(false);
  }

  // function handleClickRight() {
  //   console.log("right");
  //   console.log("asas: ", rotation[degreeRotate]);

  //   if (degreeRotate === rotation.length) {
  //     setDegreeRotate(0);
  //     return;
  //   }
  //   setDegreeRotate(v => v + 1);
  // }
  // function handleClickLeft() {
  //   console.log("left");

  //   if (degreeRotate === 0) {
  //     setDegreeRotate(0);
  //     return;
  //   }
  //   setDegreeRotate(v => v - 1);
  // }

  return (
    <div
      css={[css.boardItemTiles, isHover && css.hovered]}
      id={ids}
      onDrop={drop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    />
  );
};

export default Tiles;
