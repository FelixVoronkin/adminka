const allowedCors = ["*","https://mybend.nomorepartiesco.ru/","https://myfend.nomorepartiesco.ru"];

function cors(req, res, next) {
  const { origin } = req.headers;
  res.header("Access-Control-Allow-Origin", origin);

  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,HEAD");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Con>
  next();
}

module.exports = cors;

