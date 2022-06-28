function stopDrag() {
    var element = document.querySelector("model-viewer");

    element.dispatchEvent(
        new Event("shopify_model_viewer_ui_toggle_pause", { bubbles: true })
    );
    element.dispatchEvent(
        new Event("shopify_model_viewer_ui_toggle_play", { bubbles: true })
    );
    $(".grid__item").css({ "padding": "0" });
}

function continueDragging() {
    $("model-viewer").addClass("shopify-model-viewer-ui__disabled");
}

function reRenderDom() {
    window.dispatchEvent(new Event("resize"));
}

function setHeightAndWidtthToImageSize() {
    var height = $(".image-wrap").children().first().height()
    var width = height*(1/1.15)
    // let height=(window.innerHeight-236)
    // let width = widgetHeight*(9/19.5)
    $("#deep-gears-root").attr("style", "min-width:" + (width*(75/100)) + "px!important;min-height:" + height + "px!important;max-height:" + height + "px!important;max-width:" + width + "px!important;")
}

function handleDesktopVersion() {
    $("img[alt*='deep-gears']").parent().click(function (event) {
        event.preventDefault();
        setHeightAndWidtthToImageSize()
        reRenderDom();
        stopDrag();
    if(document.getElementById("intro-video")){
        document.getElementById("intro-video").play()
    }
        
    });
    
}

function styleWidgetHeightToScreenHeight() {
    if (window.innerHeight < 700) {
        $(".slick-list").last().css({
            "max-height": "calc(100vh - 0px)",
            height: "calc(100vh - 0px)",
        });
    } else {
        $(".slick-list").last().css({
            "max-height": "calc(100vh - 0px)",
            height: "calc(100vh - 0px)",
        });
        unSlickSlider()
    }

}

function moveElementTopMobile() {
    if (window.innerWidth < 768) {
        $("#deep-gears-root").parent().parent().css({ "position": "absolute", "zIndex": "1000", "top": "0px","display":"block" })
        $(".unslick").last().css({ "height": $("#deep-gears-root").height()+50 + "px" })
        reRenderDom();
    }
}

function unSlickSlider() {
    $(".slick-slider").last().addClass("unslick");
    $(".slick-slider").last().slick('unslick');
    moveElementTopMobile()
}

function handleMobileVersion() {
    let deepGearsActivatorMobile = $(".slick-dots").children().last();
    deepGearsActivatorMobile.click(function () {
        console.log("element clicked")
        if(document.getElementById("intro-video")){
        document.getElementById("intro-video").play()
    }
        $(".slick-dots").children().last().addClass("slick-active")
        
        // reRenderDom();
        // stopDrag();
        // styleWidgetHeightToScreenHeight();
    });
}

function handleDrag() {
    /* this function initialize a native observer to check if the last eleemnt of 
    slick-dots class have been changed if changed check if slick class have the
    slick-active class  
    */
    if (document.getElementsByClassName("slick-dots")[0]) {
        const targetNode =
            document.getElementsByClassName("slick-dots")[0].lastChild;

        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        const callback = function (mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            for (const mutation of mutationsList) {
                if (mutation.attributeName === "class") {
                    let lastChild = $(".slick-dots").children().last();
                    if (lastChild.hasClass("slick-active")) {
                        reRenderDom();
                        stopDrag();
                        styleWidgetHeightToScreenHeight();
                    if(document.getElementById("intro-video")){
        document.getElementById("intro-video").play()
    }
                    }
                } else {
                    continueDragging();
                }
            }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
}

function handleTryIn3DButton() {
document.getElementById("deep-gears-button").addEventListener("click", function () {
        if (window.innerWidth > 768) {
            console.log("the image is clicked")
            $("img[alt*='deep-gears']").parent().click();
        } else {
            $(".slick-dots").children().last().click();
        }
    })
}

function deepGearsPatch() {
    if (window.innerWidth < 768) {
        handleMobileVersion();
        handleDrag();
    }
    else{
        handleDesktopVersion();
    }
}

$(document).ready(function () {
    try {
        deepGearsPatch();
        handleTryIn3DButton();
    } catch (e) {
        console.log(e);
    }
});
