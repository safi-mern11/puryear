"use client";
import React, { useEffect } from "react";

const Clym = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://widget.clym-sdk.net/blocking.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
          (function(d,s,i,w,o){
            var js,cjs=d.getElementsByTagName(s)[0];
            if(d.getElementById(i))return;
            js=d.createElement('script');
            js.id=i;
            js.src='https://widget.clym-sdk.net/clym.js';
            js.onload=function(){Clym&&Clym.load(i,w,o);};
            cjs.parentNode.insertBefore(js, cjs);
          }(document,'script','clym-privacy','3e7caf03a90b42d9afcd3bdaq01bkiqc',{}));
        `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
  return <></>;
};

export default Clym;
