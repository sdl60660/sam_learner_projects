$(".project-preview-image")
    .on("mouseover", function() {
        $(".project-preview-image")
            .css("opacity", 0.5);

        $(this)
            .css("opacity", 1.0)
            .css("transform", "scale(1.05)")
    })
    .on("mouseout", function() {
        $(".project-preview-image")
            .css("opacity", 0.8)
            .css("transform", "scale(1.0)")

    });