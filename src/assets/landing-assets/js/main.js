// var FilteredServices = [];

$(function() {
  "use strict";

  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*-------------------------------------------------------------------------------
	  clients logo slider
	-------------------------------------------------------------------------------*/
  if ($(".clients_slider").length) {
    $(".clients_slider").owlCarousel({
      loop: true,
      margin: 30,
      items: 5,
      nav: false,
      dots: false,
      responsiveClass: true,
      autoplay: 2500,
      slideSpeed: 300,
      paginationSpeed: 500,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        },
        1224: {
          items: 5
        }
      }
    });
  }

  /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
  if ($(".testimonial").length) {
    $(".testimonial").owlCarousel({
      loop: true,
      margin: 30,
      items: 5,
      nav: false,
      dots: true,
      responsiveClass: true,
      slideSpeed: 300,
      paginationSpeed: 500,
      responsive: {
        0: {
          items: 1
        }
      }
    });
  }

  // $(".service-slides").slick({
  //   prevArrow: `<p class="carouselArrow left"> <span class="fa fa-chevron-left"> </p>`,
  //   nextArrow: `<p  class="carouselArrow right"> <span class="fa fa-chevron-right"> </p>`,
  //   slidesToShow: 3,
  //   //   adaptiveHeight: true,
  //   infinite: true,
  //   slidesToScroll: 3,
  //   //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // Services

  var dummyData = [
    {
      name: "Validation Portal",
      url: "https://bvnvalidationportal.nibss-plc.com.ng/bvnnbo/login",
      description: ""
    },
    {
      name: "EPCCOS",
      url: "https://apps.nibss-plc.com.ng/EPCCOS/",
      description: ""
    },
    {
      name: "e-DMMS",
      url: "https://edmms.nibss-plc.com.ng/eDocumentMgr/main.jspx",
      description: ""
    },
    {
      name: "e-Reference",
      url: "https://edmms.nibss-plc.com.ng/eDocumentMgr/main.jspx",
      description: ""
    },
    {
      name: "Authorized Signatory Portal (ASV)",
      url: "https://apps.nibss-plc.com.ng/ASVPortal/",
      description: ""
    },
    {
      name: "Transactions Query System (TQS)",
      url: "https://apps.nibss-plc.com.ng/TQS/login",
      description: ""
    },
    {
      name: "Corporate Lounge",
      url: "https://apps.nibss-plc.com.ng/TQS/corporatelounge",
      description: ""
    },
    {
      name: "ePassport",
      url: "http://172.18.5.50/Security/Login",
      description: ""
    },
    {
      name: "mybank Statement®",
      url: "https://mybankstatement-nibss.net",
      description: ""
    },
    {
      name: "NIBSS Helpdesk",
      url: "http://contactcentre.nibss-plc.com.ng/",
      description: ""
    }
    // {
    //   name: "Self Service",
    //   url: "#/login",
    //   description: "",
    //   notAvailable: true
    // }
  ].sort((x, y) => x.name.toLowerCase() < y.name.toLowerCase());
 
});
