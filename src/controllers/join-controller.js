exports.joinRequest = async (req, res, next) => {
    console.log(req.body)
    res.status(200).json({ message: "Hello From joinRequest controller" })
}



exports.joinAccept = async (req, res, next) => {
    console.log(req.body)
    res.status(200).json({ message: "Hello From joinAccept controller" })
}

exports.joinCancel = async (req, res, next) => {
    console.log(req.body)
    res.status(200).json({ message: "Hello From joinCancel controller" })
}

exports.joinReject = async (req, res, next) => {
    console.log(req.body)
    res.status(200).json({ message: "Hello From joinReject controller" })
}