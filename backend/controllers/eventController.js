const Event = require('./models/Event');

exports.createEvent = async (req, res) => {
  const { title, description } = req.body;

  try {
    const event = await Event.create({ title, description, user: req.user.id });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: 'Event creation failed', error });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: 'Fetching events failed', error });
  }
};
