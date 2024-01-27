export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  }
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      {console.log("リッカ")}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
