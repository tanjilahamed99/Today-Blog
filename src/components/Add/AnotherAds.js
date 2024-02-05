"use client"

import { useEffect } from "react";



const AnotherAds = () => {

    useEffect(() => {
        var ads = document.getElementsByClassName('adsbygoogle').length;
        for (var i = 0; i < ads; i++) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
        }
    }, []);

    return (
        <div className="w-full bg-red-500">
            <h2 className="text-white font-bold">hello</h2>
            <hr />
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9673111961225622"
                data-ad-slot="6885089463"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AnotherAds;