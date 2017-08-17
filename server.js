var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "Article One | Uzair",
    heading: "Article First Heading",
    date: "Sept 5, 2017",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sapien eget ipsum porttitor ultricies. Morbi aliquet vestibulum interdum. Nam id augue in magna consectetur tristique. Pellentesque tempor pharetra libero a ultrices. Donec a semper lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mattis quam at quam pulvinar, ac auctor lacus convallis. Morbi pharetra mi vitae turpis fermentum, sed ullamcorper nisl hendrerit. Nullam egestas diam justo, vitae ultricies lectus tincidunt quis. In consequat in justo non posuere. Morbi turpis leo, mollis quis mattis sit amet, accumsan eleifend quam. Quisque non magna augue. Integer maximus luctus libero quis faucibus. Suspendisse posuere quis ligula nec ullamcorper. Mauris ut dolor eu orci accumsan hendrerit ut quis justo..</p>`
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `<!DOCTYPE html>
    <html>
      <head>
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/ui/style.css" rel="stylesheet">
      </head>
      <body>
          <div class="container">
              <div>
                <a href="/ui/index.html">Home</a>
              </div>
              <hr>
              <div>
                  <h4>${heading}</h4>
              </div>
              <div>
                ${date}  
              </div>
              <div>
                ${content}
              </div>
          </div>
      </body>
    </html>`;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
