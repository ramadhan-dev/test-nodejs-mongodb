exports.secondMiddleware = (req, res, next) => {
  console.log('second middleware worked');
  console.log(process.cwd());
  console.log(__dirname);
  next();
};
