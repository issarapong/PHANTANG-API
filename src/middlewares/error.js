module.exports = (err, req, res, next) => {

    if(err.name === 'ValidationError') {
        err.StatusCode = 400;
    }
    res.status(err.StatusCode || 500).json( { message: err.message})
}