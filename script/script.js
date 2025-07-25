$(document).ready(function(){
    var currenttheme = "dark";

    $('a').attr('target', '_blank');
    $('#e_add').removeAttr('target');
    $('svg').attr('aria-hidden', 'true');
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250) 
        {
            $('#scrollToTop').fadeIn();
        } 
        else 
        {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    //Just to hide address from bots
    $('#e_add').one('click',function(event){
        event.preventDefault();

        let symbol = "UUE9PQ==";
        //Generated by tokens.py
        let fragments = ['n', 'r', '.', '0', 'd', 'k', 'l', 's', 'm', 'c', symbol, 'i', 'a', 'e', 'g', 'o'];
        let order =  [12, 0, 4, 1, 13, 7, 5, 11, 0, 3, 3, 10, 14, 8, 12, 11, 6, 2, 9, 15, 8];
        var href = "";

        for (let i = 0; i < order.length; i++) 
        {
            href += fragments[order[i]];
        }
        href = href.replace(symbol, atob(atob(symbol)));

        $(".icons").append(`<br>My email is: <a href="mailto:${href}">${href}</a>`);

        // window.open(href);
    });


    $("#theme").click(function(){
        let sun = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>`;

        let moon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>`;

        let light_stylesheet=`<link rel="stylesheet" id="light" href="css/light.css">`;

        $("body *").addClass("theme-transition");

        if(currenttheme == "dark")
        {
            currenttheme = "light";
            
            for(elem of $("body *"))
            {
                let cl = $(elem).attr("class");

                if(cl != undefined)
                {
                    cl = cl.replaceAll("dark", "light");
                    cl = cl.replaceAll("white", "black");
                }
                $(elem).attr("class", cl);
            }
            $("#css").after(light_stylesheet)
            $("#theme").html(moon);
        }
        else{
            currenttheme = "dark";
            
            for(elem of $("body *"))
            {
                let cl = $(elem).attr("class");

                if(cl != undefined)
                {
                    cl = cl.replaceAll("light", "dark");
                    cl = cl.replaceAll("black", "white");
                }
                $(elem).attr("class", cl);
            }

            $("#light").remove();
            $("#theme").html(sun);
        }
    });

});