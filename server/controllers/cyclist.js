const Cyclist = require('../db/models/cyclist');
const User = require('../db/models/user');
const Review = require('../db/models/reviews');

// AUTHENTICATED REQUESTS
exports.createCyclist = async (req, res) => {
  const { name, zipcode, phone, bicycles } = req.body;
  try {
    const cyclist = new Cyclist({
      name,
      zipcode,
      phone,
      bicycles,
      user: req.user._id
    });

    const user = await User.findById(req.user._id);

    user.cyclist = cyclist._id;

    await Promise.all([cyclist.save(), user.save()]);
    res.status(201).json(cyclist);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get current cyclist
// ***********************************************//
exports.getCurrentCyclist = async (req, res) => {
  const user = await User.findById(req.user._id).populate('cyclist');
  res.json(user);
};

// ***********************************************//
// Update a cyclist
// ***********************************************//
exports.updateCurrentCyclist = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'zipcode', 'phone', 'bicycles'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const cyclist = await Cyclist.findOne({
      user: req.user._id
    });
    if (!cyclist) return res.status(404).json({ message: 'cyclist not found' });
    updates.forEach((update) => (cyclist[update] = req.body[update]));
    await cyclist.save();
    res.status(200).json(cyclist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
