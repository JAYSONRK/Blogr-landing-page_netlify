import React from "react";
import Phones from  "../images/illustration-phones.svg";

const Third = () => {
    return (<>
        <section className="third row">
            <picture className="phones col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-5">
                <img src={Phones} alt="phones"/>
            </picture>
            <article className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1>State of the Art Infrastructure</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p> 
            </article>
        </section>
    </>)
}

export default Third;