const { User } = require('../models')

class UserController {
  async index(req, res) {
    const user = await User.findAll()

    return res.json({
      data: user,
    })
  }

  async create(req, res) {
    const user = req.body

    await User.create(user)

    return res.json({
      data: user,
      message: "User successfully registered!"
    })
  }

  async update(req, res) {
    const { name } = req.body
    const { id } = req.params

    const user = await User.findOne({ where: { id: id } })

    if (user === null) {
      return res.json({
        message: "User not found!"
      })
    } else {
      await User.update({ name: name }, {
        where: {
          id: id
        }
      })

      const userUpdated = await User.findOne({ where: { id: id } })

      return res.json({
        data: userUpdated,
        message: "User successfully updated"
      })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    const user = await User.findOne({ where: { id: id } })

    if (user === null) {
      return res.json({
        message: "User not found!"
      })
    } else {
      await User.destroy({
        where: {
          id: id
        }
      });

      return res.json({
        message: "User deleted successfully"
      })
    }
  }
   
}


module.exports = new UserController()