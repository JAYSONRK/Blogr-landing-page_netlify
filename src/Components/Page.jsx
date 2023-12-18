import React from "react";
import Header from "./Header";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourt";
import Footer from "./Footer";

const Page = () => {
  return (<>
    <main className="page container-fluid">
      <Header/>
      <Second/>
      <Third/>
      <Fourth/>
      <Footer/>
    </main>
  </>)
}

export default Page;