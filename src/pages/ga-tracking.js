<script>
  window.addEventListener("load", function() {
    setTimeout(function() {
      var script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-F5MBY27XES";
      script.async = true;
      document.head.appendChild(script);

      script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F5MBY27XES');
      };
    }, 3000) // Delays GA by 3 seconds after the page loads
  });
</script>