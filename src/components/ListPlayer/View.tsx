import ItemPlayer from "./components/ItemPlayer";
import Red from "../../assets/meeple-red.png";
import Blue from "../../assets/meeple-blue.png";
import Yellow from "../../assets/meeple-yellow.png";
import Green from "../../assets/meeple-green.png";
import Purple from "../../assets/meeple-purple.png";

const ListPlayer = () => {
  const arrUser = [Red, Blue, Purple, Green, Yellow];

  return (
    <>
      {arrUser.map((item, idx) => {
        return <ItemPlayer key={`item-user-${idx}`} meeple={item} isActive={idx === 1} />;
      })}
    </>
  );
};

export default ListPlayer;
