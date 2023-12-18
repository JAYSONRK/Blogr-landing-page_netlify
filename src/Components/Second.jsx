import React from "react";
import Editor from  "../images/illustration-editor-mobile.svg";
import EditorD from "../images/illustration-editor-desktop.svg";

const Second = () => {
    return (<>
        <section className="second row">
            <h2>Designed for the future</h2>
            <picture className="article-contentm col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-5">
                <img className="mob" src={Editor} alt="editor"/>
            </picture>
            <article className="mobiled col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="article ">
                    <h2>Introducing an extensible editor</h2>
                    <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p> 
                </div>
                <div className="article">
                    <h2>Robust content management</h2>
                    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p> 
                </div> 
            </article>
            <article className="desktoped col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="article">
                    <h2>Introducing an extensible editor</h2>
                    <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p> 
                </div>
                <div className="article">
                    <h2>Robust content management</h2>
                    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p> 
                </div> 
            </article>
            <picture className="article-contentD col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-5">
                <img src={EditorD} alt="editor"/>
            </picture>
        </section>
    </>)
}

export default Second;