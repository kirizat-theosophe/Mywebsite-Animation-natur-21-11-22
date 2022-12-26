const tekst = document.getElementById("tekst");

        function flyttMeg(){
            tekst.style.left = (scrollY *5) + "px";
        }

        window.addEventListener("scroll", flyttMeg);    
    