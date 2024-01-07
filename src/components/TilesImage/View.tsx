import { DragEvent } from "react";
import { TILES } from "../../constants/tiles";
import { RotateCw, RotateCcw } from "react-feather";
import * as css from "./View.styles";
const TilesImage = () => {
  function drag(ev: DragEvent<HTMLDivElement>) {
    ev.dataTransfer.setData("text", (ev.target as HTMLDivElement).id);
  }

  return (
    <div id="images">
      {TILES.map((item, idx) => {
        return (
          <div key={`tile-${idx + 1}`} id={`drag${idx + 1}`} css={css.wrapperTiles} onDragStart={drag} draggable>
            <div css={css.tileControl}>
              <RotateCcw />
              <RotateCw />
            </div>
            <img css={css.tileItem} src={item.img} alt={`tile-${idx + 1}`} />
          </div>
        );
      })}
    </div>
  );
};

export default TilesImage;
