export const Main = () => {
  const handleClick = () => {
    console.log("Great success!");
  };

  const handleMouse = () => {
    console.log("Something to the console");
  };

  return (
    <>
      <p>soy un main</p>
      <button onClick={handleClick}>Ping tao</button>
      <img
        src="https://picsum.photos/200"
        alt="imagen"
        onMouseEnter={handleMouse}
      />
    </>
  );
};
