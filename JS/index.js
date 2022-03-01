$(document).ready(function () {
  $(".menuListLink").hover(
    function () {
      $(this).addClass("hoverMenuList");
    },
    function () {
      $(this).removeClass("hoverMenuList");
    }
  );

  $(".project1Btn").hover(
    function () {
      $(this).addClass("hoverProject1Btn");
    },
    function () {
      $(this).removeClass("hoverProject1Btn");
    }
  );

  $(".downloadBtn").hover(
    function () {
      $(this).addClass("hoverDownloadBtn");
    },
    function () {
      $(this).removeClass("hoverDownloadBtn");
    }
  );

  $(".projectsBtn").hover(
    function () {
      $(this).addClass("hoverProjectsBtn");
    },
    function () {
      $(this).removeClass("hoverProjectsBtn");
    }
  );

  $(".contactCircle, .skillsList img").hover(
    function () {
      $(this).addClass("hoverSkillList");
    },
    function () {
      $(this).removeClass("hoverSkillList");
    }
  );

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });

  $("#toTopBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  $("#about").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".flexContainerAboutMe").offset().top,
      },
      600
    );
  });

  $("#skills").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".mySkills").offset().top,
      },
      600
    );
  });

  $("#projects").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".myWork").offset().top,
      },
      600
    );
  });

  $("#contact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".blackFooter").offset().top,
      },
      600
    );
  });

  $("#aboutBottom").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".flexContainerAboutMe").offset().top,
      },
      600
    );
  });

  $("#skillsBottom").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".mySkills").offset().top,
      },
      600
    );
  });

  $("#projectsBottom").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".myWork").offset().top,
      },
      600
    );
  });
});
