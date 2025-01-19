(function() {
    var script = document.createElement("script");
    script.src = "/js/gtag.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F5MBY27XES', { 'anonymize_ip': true, 'send_page_view': false });
    };
})();
