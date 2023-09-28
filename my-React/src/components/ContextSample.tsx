import React from "react";

const TitleContext = React.createContext("");

//Cotextの値を参照する
const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1 style={{ backgroundColor: "teal" }}>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

//Contextの値を渡す
const Page = () => {
  const title = "context sample";

  //Providerを使いContextに値をセットする
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
