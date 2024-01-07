import { DragEvent, useState } from "react";
import { RotateCw, RotateCcw } from "react-feather";
import * as css from "./View.styles";
const TilesImage = ({ item, id }: { item: { img: string }; id: number }) => {
  const rotation = [0, 90, 180, 270];
  const [isDisplay, setIsDisplay] = useState(false);
  const [degreeRotate, setDegreeRotate] = useState(0);

  function drag(ev: DragEvent<HTMLDivElement>) {
    ev.dataTransfer.setData("text", (ev.target as HTMLDivElement).id);
  }

  function handleClickRight() {
    if (degreeRotate === rotation.length - 1) {
      setDegreeRotate(0);
      return;
    }
    setDegreeRotate(v => v + 1);
  }

  function handleClickLeft() {
    if (degreeRotate === 0) {
      setDegreeRotate(rotation.length - 1);
      return;
    }
    setDegreeRotate(v => v - 1);
  }

  function mouseOver() {
    setIsDisplay(true);
  }

  function mouseLeave() {
    setIsDisplay(false);
  }

  return (
    <div
      key={`tile-${id + 1}`}
      id={`drag${id + 1}`}
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
      css={css.wrapperTiles}
      onDragStart={drag}
      draggable
    >
      {isDisplay && (
        <div css={css.tileControl}>
          <RotateCcw onClick={handleClickLeft} />
          <RotateCw onClick={handleClickRight} />
        </div>
      )}
      <img css={[css.tileItem, css.degreeItem(rotation[degreeRotate])]} src={item.img} alt={`tile-${id + 1}`} />
    </div>
  );
};

export default TilesImage;
