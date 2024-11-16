import Button from "./Button";

function ButtonPannel({ handleClick }) {
  const buttons = [
    ["C", "DEL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    ["0", ".", "="],
  ];

  return (
    <div className="button-panel">
      {buttons.map((row, i) => (
        <div key={i} className="button-row">
          {row.map((button) => (
            <Button key={button} value={button} handleClick={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPannel;
