module.exports = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Koa Server HTML</title>
      <link href="https://cdn.bootcss.com/twitter-bootstrap/4.4.0/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
      <script src="https://cdn.bootcss.com/twitter-bootstrap/4.4.0/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
      <div class="content>
        <div class="row">
          <div class="col-md-8">
          <h1>Hi <%= you%></h1>
          <p>This is <%= me%></p>
        </div>
        <div class="col-md-4">
          <p>测试静态 EJS 模版引擎</p>
        </div>
        </div>
      </div>
    </body>
  </html>
`
