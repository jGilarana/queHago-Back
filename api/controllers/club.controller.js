const Club = require("../models/club.model")

async function getAllClubs(req, res) {
  try {
    const clubs = await Club.findAll()
    res.status(200).json(clubs)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function getOneClub(req, res) {
  try {
    const club = await Club.findByPk(req.params.id)
    res.status(200).json(club)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function createClub(req, res) {
  try {
    const club = await Club.create(req.body)
    res.status(200).send("club created")
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function updateClub(req, res) {
  try {
    const [club, clubExists] = await Club.update(req.body, {
      where: { id: req.params.id },
    })
    if (!clubExists) {
      res.status(404).send("No club found")
    }
    return res.status(200).json(club)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function deleteClub(req, res) {
  try {
    const club = await Club.destroy(req.params.id)
    return res.status(200).json(club)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllClubs,
  getOneClub,
  createClub,
  updateClub,
  deleteClub,
}
