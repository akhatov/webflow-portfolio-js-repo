// Nav menu

$(document).ready(function () {
  console.log("HERE");
  const body = $("body");
  const menuButton = $(".nav_button");
  const menuHolster = $(".nav_holster");
  const menuBg = $(".nav_holster-bg");
  const menuLinks = $(".nav_menu-link");
  const menuIcon = $(".nav_button-icon");
  const menuButtonText = $(".nav_button-text");

  const iconTopBar = $(".nav_icon-bar-top");
  const iconBottomBar = $(".nav_icon-bar-bottom");

  let menuTl = gsap.timeline({ paused: true });

  menuTl.to(body, { overflow: "hidden", duration: 0 });
  menuTl.to(menuHolster, { bottom: 0, duration: 0 });
  menuTl.to(menuBg, { scale: 100, duration: 0.5 }, "<");
  menuTl.to(
    iconTopBar,
    { rotate: 45, duration: 0.3, y: "3px", transformOrigin: "50% 50%" },
    "<"
  );
  menuTl.to(
    iconBottomBar,
    {
      rotate: 135,
      duration: 0.3,
      y: "-3px",
      transformOrigin: "50% 50%",
    },
    "<"
  );
  menuTl.to(menuButtonText, { display: "block", duration: 0 }, "<");
  menuTl.from(
    menuButtonText,
    { yPercent: 100, opacity: 0, duration: 0.3 },
    "<"
  );
  menuTl.from(menuLinks, {
    yPercent: 100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
  });

  menuButton.click(function (e) {
    e.preventDefault();

    menuButton.toggleClass("is-open");

    if (menuButton.hasClass("is-open")) {
      menuTl.play();
    } else {
      menuTl.reverse();
    }
  });
});

// Typewriter
gsap.registerPlugin(TextPlugin);

$(document).ready(function () {
  const words = ["Thrive", "Innovate", "Create", "Succeed"];
  const typewriterElement = $("#typewriter");

  function typeWord(word) {
    return gsap
      .timeline()
      .to(typewriterElement, { duration: 2, text: word, ease: "power1.inOut" });
  }

  function deleteWord() {
    return gsap
      .timeline()
      .to(typewriterElement, { duration: 1, text: "", ease: "power1.inOut" });
  }

  function cycleWords() {
    let tl = gsap.timeline({ repeat: -1 });

    words.forEach((word, index) => {
      tl.add(typeWord(word)).add(deleteWord(), "+=1"); // Wait 1 second before deleting
    });

    // Add a slight delay before the timeline restarts
    tl.add(typeWord(words[0]), "+=1"); // Adjust delay as needed

    return tl;
  }

  cycleWords();
});
