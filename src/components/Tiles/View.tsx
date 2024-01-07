import { DragEvent } from "react";
import * as css from "./View.styles";
const Tiles = ({ ids }: { ids: string }) => {
  function allowDrop(ev: DragEvent) {
    ev.preventDefault();
  }

  function drop(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();

    const target = ev.target as HTMLDivElement;
    const data = ev.dataTransfer.getData("text");
    const el = document.getElementById(data);
    if (el) target.appendChild(el);
  }
  return <div css={css.boardItemTiles} id={ids} onDrop={drop} onDragOver={allowDrop} />;
};

export default Tiles;
