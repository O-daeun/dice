
import Dice from "./Dice";



function Board({name, color, num, sum, gameHistory}) {
  

  

  return (
    <div>
      
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <p>총점: {sum}점</p>
        <p>기록: {gameHistory.join(', ')}</p>
      </div>
    </div>
  );
}

export default Board;
