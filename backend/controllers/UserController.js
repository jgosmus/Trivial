class UserController {
    async save (req, res) {
        return res.status(200).send('Test')
    }
}

module.exports = new UserController()
