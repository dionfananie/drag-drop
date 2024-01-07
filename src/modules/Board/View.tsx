import * as css from "./View.styles";
import Tiles from "../../components/Tiles";
import TilesImage from "../../components/TilesImage";
import { TILES } from "../../constants/tiles";
import BoardMap from "../../components/BoardMap";
import ListPlayer from "../../components/ListPlayer";

const Board = () => {
  const arrBoard = new Array(72).fill(Math.random());
  return (
    <div className="wrapper">
      <h2 css={css.title}>Carcassone</h2>
      <div css={css.wrapperBoard}>
        <BoardMap>
          <div css={css.board} id="text">
            {arrBoard.map((_, idx) => {
              return <Tiles key={`tiles-${idx}`} ids={`div${idx + 1}`} />;
            })}
          </div>
        </BoardMap>
        <div css={css.wrapperList}>
          <ListPlayer />
          <div css={css.wrapperStack}>
            <div id="images">
              {TILES.map((item, idx) => {
                return <TilesImage item={item} key={`tiles-image-${idx}`} id={idx} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
