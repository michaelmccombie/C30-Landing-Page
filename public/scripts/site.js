//Smooth Scrolling

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});


// Animate on View

$(function() {
	var $animation_elements = $('.animate');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	      (element_top_position <= window_bottom_position)) {
	      $element.addClass('animated fadeInUp');
	    } else {
	      $element.removeClass('');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});

// Chart JS - Chart 1 Bar

$(function() {
	var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(245, 245, 245, .75)",
	            strokeColor: "rgba(245, 245, 245, .75)",
	            highlightFill: "rgba(245, 245, 245, 1)",
	            highlightStroke: "rgba(245, 245, 245, 1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(102, 184, 119, 0.75)",
	            strokeColor: "rgba(102, 184, 119, 0.75)",
	            highlightFill: "rgba(102, 184, 119, 1)",
	            highlightStroke: "rgba(102, 184, 119, 1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};

    var options = {
        animation: true,
		showScale: false,
    };

    //Get the context of the canvas element we want to select
    var c = $('#chart1');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("chart1").getContext("2d");
    
    myBarChart = new Chart(ctx).Bar(data, options);
});

// Chart JS - Chart 2 Doughnut

$(function() {
    var data = [{
        value: 34,
        color: "#f5f5f5",
    }, {
        value: 66,
        color: "rgba(102, 184, 119, .75)",
		highlight: "rgba(102, 184, 119, 1)",
    }

    ]

    var options = {
        animation: true,
        percentageInnerCutout: 70
    };

    //Get the context of the canvas element we want to select
    var c = $('#chart2');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("chart2").getContext("2d");
    
    myNewChart = new Chart(ct).Doughnut(data, options);
});

// Chart JS - Chart 3 Line

$(function() {
	var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(102, 184, 119, .75)",
	            strokeColor: "rgba(102, 184, 119, 1)",
	            pointColor: "rgba(102, 184, 119, 1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(102, 184, 119, 1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};

    var options = {
        animation: true,
		showScale: false,
    };

    //Get the context of the canvas element we want to select
    var c = $('#chart3');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("chart3").getContext("2d");
    
    var myLineChart = new Chart(ctx).Line(data, options);
});