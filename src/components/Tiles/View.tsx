import { DragEvent, useState } from "react";
import * as css from "./View.styles";
const Tiles = ({ ids }: { ids: string }) => {
  const [isHover, setIsHover] = useState(false);
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
