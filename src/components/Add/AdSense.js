"use client"

import { useEffect } from "react";
// import { Adsense } from "@ctrl/react-adsense";

const AdSense = () => {

    // useEffect(() => {
    //     var ads = document.getElementsByClassName('adsbygoogle').length;
    //     for (var i = 0; i < ads; i++) {
    //         try {
    //             (window.adsbygoogle = window.adsbygoogle || []).push({});
    //         } catch (e) { }
    //     }
    // }, []);


    return (

        <ins class="adsbygoogle"
            style={{ display: "black" }}
            data-ad-client="ca-pub-9673111961225622"
            data-ad-slot="6885089463"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>

        // <div className="text-center adsbygoogle my-3">

        //     <Adsense
        //         client="ca-pub-9673111961225622"
        //         slot="auto"
        //         style={{ display: "block" }}
        //         layout="in-article"
        //         format="fluid"
        //     />

        // </div>
    );
};



export default AdSense;