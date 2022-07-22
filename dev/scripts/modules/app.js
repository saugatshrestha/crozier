import "popper.js";
import "bootstrap/js/dist/button";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import "bootstrap-select";

class global {
    constructor() {
        this.events();
        this.hamburger();
        this.offcavas();
    }

    // Hamburger Menu
    hamburger() {
        // Hamburger Menu
        var forEach = function (t, o, r) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
        };

        var hamburgers = document.querySelectorAll(".hamburger");

        if (hamburgers.length > 0) {
            forEach(hamburgers, function (hamburger) {
                hamburger.addEventListener(
                    "click",
                    function () {
                        this.classList.toggle("is-active");
                    },
                    false
                );
            });
        }

        $(".hamburger").on("click", function () {
            $(".theme-header").toggleClass("theme-header--is-open");
            $("body").toggleClass("pushy-open-right prevent-scrolling");
            // $(".theme-header").toggleClass("dropdown-open");
        });
    }

    // Offcanvas
    offcavas() {
        // Offcanvas Menus
        if ($("li.mega-menu-has-children")) {
            $("li.mega-menu-has-children > a").append('<i class="icon-right ml-2 text-primary"></i>');
        }

        $("li.mega-menu-has-children > a").click(function () {
            $(".menu-off-canvas-children").addClass("active");
        });

        $(".go-back > a").click(function () {
            $(".menu-off-canvas-children").removeClass("active");
        });
    }

    // mobileOnOff
    mobileOnOff() {
        $("html").on("click", "body", function (event) {
            if (
                $(event.target).closest(".pushy--right,button.btn-link.hamburger").length == 0 &&
                $("body").hasClass("pushy-open-right")
            ) {
                $("button.btn-link.hamburger").trigger("click");
            }
        });
    }

    // Change events
    changeEvents() {
        // Select
        $("select").on("changed.bs.select", function (e, clickedIndex, newValue, oldValue) {
            var dataNavId = e.currentTarget.getAttribute("data-navid");
            $("#" + dataNavId + " .nav-item")
                .eq(clickedIndex)
                .trigger("click");
            // console.log(this.value, clickedIndex, newValue, oldValue)
        });
    }

    clickEvents() {
        //Preventing body scroll when modal fires
        $(".btn-modal").on("click", function () {
            $("body").addClass("prevent-scrolling");
        });

        $(".modal").on("hidden.bs.modal", function () {
            $("body").removeClass("prevent-scrolling");
        });

        this.mobileOnOff();
    }

    // Hover Events
    hoverEvents() {
        $(".nav-main .dropdown").hover(function (e) {
            $(this).toggleClass("dropdown-is-on", e.type === "mouseenter");
        });
    }

    events() {
        this.clickEvents();
        this.hoverEvents();
        this.changeEvents();
    }
}

export default global;
new global();
