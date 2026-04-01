$(window).on("load", function () {
    var $container = $(".portfolioContainer");

    // Initialize Isotope with responsive options
    $container.isotope({
        itemSelector: ".gallery-item",
        layoutMode: "packery",
        packery: {
            gutter: 0, // optional: space between items
        },
        filter: ".frontend", // default filter
        transitionDuration: "0.6s",
    });

    // Function to update column width based on screen size
    function updateIsotopeLayout() {
        var windowWidth = $(window).width();

        if (windowWidth >= 1200) {
            // Desktop & Large screens → 3 columns
            $container.find(".gallery-item").css("width", "33.333%");
        } else if (windowWidth >= 768 && windowWidth < 1200) {
            // Tablet & Laptop → 2 columns
            $container.find(".gallery-item").css("width", "50%");
        } else {
            // Mobile → 1 column
            $container.find(".gallery-item").css("width", "100%");
        }

        // Re-layout Isotope after width change
        $container.isotope("layout");
    }

    // Run on load
    updateIsotopeLayout();

    // Run on window resize
    $(window).on("resize", function () {
        clearTimeout(window.isotopeTimeout);
        window.isotopeTimeout = setTimeout(updateIsotopeLayout, 100);
    });

    // Filter functionality (unchanged)
    $(".portfolioFilter a").click(function () {
        $(".portfolioFilter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $container.isotope({
            filter: selector,
        });
        return false;
    });
});
