import * as css from "../../View.styles";
import UserImg from "../../../../assets/user.png";

const ItemPlayer = ({ isActive, meeple }: { isActive: boolean; meeple: string }) => {
  return (
    <div css={[css.containerUser, isActive && css.active]}>
      <div css={css.userImage}>
        <img src={UserImg} alt="Player" width="30px" height="30px" />
      </div>
      <div>
        <h3 css={css.userName}>User's Name Player</h3>
        <div>
          <img src={meeple} alt="player red" height="20px" width="20px" />
          <img src={meeple} alt="player red" height="20px" width="20px" />
          <img src={meeple} alt="player red" height="20px" width="20px" />
          <img src={meeple} alt="player red" height="20px" width="20px" />
          <img src={meeple} alt="player red" height="20px" width="20px" />
          <img src={meeple} alt="player red" height="20px" width="20px" />
          <img src={meeple} alt="player red" height="20px" width="20px" />
        </div>
        {/* <p css={css.userText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maiores deserunt.</p> */}
      </div>
    </div>
  );
};

export default ItemPlayer;
