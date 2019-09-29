const Templates = require('../models/templates');
const randomPuppy = require('random-puppy');

const listPropertys = 'title owner createdAt active_status image';

const getTemplates = async (req, res, next) => {
  debugger;
  try {
    const { user } = req;
    let templates = [];

    if (user && user.role === 'admin') {
      templates = await Templates.find({}, listPropertys);
    } else {
      templates = await Templates.find({ active_status: true }, listPropertys)
        .catch(err => console.log('error in templates: ', err));
    }

    return res.status(200).send(templates);
  } catch(error) {
    console.log('error in getTemplates', error.name);
    return res.status(500).send(error);
  }
}

const createTemplate = async (req, res, next) => {
  const { user, body } = req;
  if (!user) {
    res.status(401).send({ error: 'Unauthorized'});
  }
  const { title, description, price } = body;
  const image = await randomPuppy();
  const template = await Templates.create({
    title,
    description,
    price,
    owner: { id: user._id, email: user.email },
    image,
  });

  res.status(201).send(template);
};

const getTemplate = async (req, res, next) => {
  const { user, params } = req;
  const id = params && params.id;
  let template;

  if (user && user.role === 'admin') {
    template = await Templates.findOne({ _id: id });
  } else if (user && user.role === 'client') {
    template = await Templates.findOne({ _id: id, active_status: true });
  } else {
    template = await Templates.findOne({ _id: id, active_status: true }).select('-comments');
  }

  if (template) res.status(200).send(template);
  else res.status(404).send({ error: 'Not found'});
}

module.exports = { getTemplates, createTemplate, getTemplate };
