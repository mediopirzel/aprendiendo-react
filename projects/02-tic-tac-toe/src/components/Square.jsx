export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = (e) => {
    updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
