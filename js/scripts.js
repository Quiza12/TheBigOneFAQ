/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 
 


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var ctx = document.getElementById('hotels-vs-hostels').getContext('2d');
var data = {
"labels": [
"June",
"July",
"August",
"September",
"October",
"November",
"December"
],
"datasets": [
{
  "label": "Hotels",
  "backgroundColor": "#aaadff",
  "fill": true,
  "data": [
    "6",
    "7",
    "13",
    "4",
    "7",
    "7",
    "2"
  ],
  "borderColor": "#ffffff",
  "borderWidth": "1"
},
{
  "label": "Hostels",
  "backgroundColor": "#407aaa",
  "fill": true,
  "data": [
    "1",
    "13",
    "1",
    "6",
    "13",
    "4",
    "0"
  ]
}
]
};
var options = {
"title": {
"display": true,
"text": "Hotels vs Hostels",
"position": "top",
"fullWidth": true,
"fontColor": "#000000",
"fontSize": 16
},
"legend": {
"display": true,
"fullWidth": true,
"position": "top"
},
"scales": {
"yAxes": [
  {
    "ticks": {
      "beginAtZero": true,
      "display": true
    },
    "gridLines": {
      "display": true,
      "lineWidth": 2,
      "drawOnChartArea": true,
      "drawTicks": true,
      "tickMarkLength": 1,
      "offsetGridLines": true,
      "zeroLineColor": "#942192",
      "color": "#d6d6d6",
      "zeroLineWidth": 2
    },
    "display": true
  }
],
"xAxes": {
  "0": {
    "ticks": {
      "display": true,
      "fontSize": 14,
      "fontStyle": "italic"
    },
    "display": true,
    "gridLines": {
      "display": true,
      "lineWidth": 2,
      "drawOnChartArea": false,
      "drawTicks": true,
      "tickMarkLength": 12,
      "zeroLineWidth": 2,
      "offsetGridLines": true,
      "color": "#942192",
      "zeroLineColor": "#942192"
    },
    "scaleLabel": {
      "fontSize": 16,
      "display": true,
      "fontStyle": "normal"
    }
  }
}
},
"tooltips": {
"enabled": true,
"mode": "label",
"caretSize": 10,
"backgroundColor": "#00fa92"
}
};

var hotelsVsHostels = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});