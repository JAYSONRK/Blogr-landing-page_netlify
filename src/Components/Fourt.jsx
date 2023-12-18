import React from "react";
import LaptopM from  "../images/illustration-laptop-mobile.svg";
import LaptopD from "../images/illustration-laptop-desktop.svg";

const Fourth = () => {
    return (<>
        <section className="fourth row">
            <picture className="article-contentF col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-5">
                <source media="(min-width:576px)" srcSet={LaptopD}/>
                <img src={LaptopM} alt="editor"/>
            </picture>
            <article className="arts col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="article ">
                    <h2>Free, open, simple</h2>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third- party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p> 
                </div>
                <div className="article">
                    <h2>Powerful tooling</h2>
                    <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p> 
                </div> 
            </article>
        </section>
    </>)
}

export default Fourth;