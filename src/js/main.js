require("./ng");
import $ from "jquery";
import M from "materialize-css";
import AOS from "aos";

AOS.init({
  offset: 100,
  duration: 1500,
  easing: "ease-in-out-sine",
  delay: 100,
  once: true
});

// Google Analytics
(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);

ga("create", "UA-114917966-1", "auto");
ga("send", "pageview");
// end Google Analytics

/* image defer */
const initImgDefer = function() {
  const imgDefer = document.getElementsByTagName("img");
  for (let i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
};

window.onload = function() {
  document.body.classList.add("loaded");
  initImgDefer();
};

/* Enable materialize js */
(function() {
  const prlx = document.querySelectorAll(".parallax");
  const sidenav = document.querySelectorAll(".sidenav");
  const dropdownBtn = document.querySelectorAll(".dropdown-trigger");
  const dropdownBtnOption = { alignment: "down", hover: true };
  M.Parallax.init(prlx);
  M.Sidenav.init(sidenav);
  M.Dropdown.init(dropdownBtn, dropdownBtnOption);
})();

/* Smooth Scroll */
$("a.smooth-scroll").on("click", function(e) {
  e.preventDefault();
  var anchor = $(this);
  if (anchor.attr("href") == "#top") {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, 1000);
  } else {
    $("html, body")
      .stop()
      .animate({ scrollTop: $(anchor.attr("href")).offset().top - 50 }, 1000);
  }
});

/* navbar opacity */
$(window).scroll(function() {
  const headerH = $("header").height();
  const scrollTop = $(window).scrollTop();

  if (scrollTop <= headerH) {
    $("nav.on-top").css({
      "background-color": "rgba(49, 27, 146," + (0 + scrollTop / headerH) + ")"
    });
  }

  if (scrollTop >= headerH - 60) {
    $("nav").removeClass("on-top");
  } else {
    $("nav").addClass("on-top");
  }
});
