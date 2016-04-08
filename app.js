var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
app.engine('handlebars', 
	exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-marketing-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-marketing-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-marketing-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/marketing-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-marketing-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/marketing-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/news-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-news-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-marketing-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-awards-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-marketing-casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/marketing-casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/casestudies-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-marketing-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/marketing-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/technology-awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/awards-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-marketing-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-marketing-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-marketing-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/marketing-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-marketing-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/marketing-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/news-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-news-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-casestudies-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-casestudies-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-marketing-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-location', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-marketing-casestudies-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/marketing-casestudies-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-casestudies-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/casestudies-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-marketing-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/marketing-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/technology-location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/location', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: true,
	})
});

app.get('/services-technology-marketing-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-marketing-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-marketing-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-marketing-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/marketing-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-marketing-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/marketing-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/news-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-casestudies-news-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-marketing-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-awards', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-marketing-casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/marketing-casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/casestudies-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-marketing-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/marketing-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/technology-awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/awards', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: true,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-marketing-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-marketing-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-marketing-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/marketing-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/casestudies-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-marketing-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/marketing-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/news', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: true,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-casestudies', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-marketing-casestudies-news', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-casestudies', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-casestudies', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology-marketing', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-marketing', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services-technology', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/services', function(req, res) {
	res.render('index', {
		showServices: true,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-marketing-casestudies', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/marketing-casestudies', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-casestudies', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/casestudies', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: false,
		showCaseStudies: true,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology-marketing', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/marketing', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: false,
		showMarketing: true,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.get('/technology', function(req, res) {
	res.render('index', {
		showServices: false,
		showTechnology: true,
		showMarketing: false,
		showCaseStudies: false,
		showNews: false,
		showAwards: false,
		showLocation: false,
	})
});

app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 3000);
app.listen(port);
