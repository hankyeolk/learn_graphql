import {
  getUserData,
  getUserByCohort,
  addUser,
  // modifyUser,
  deleteUserById
} from './util-model.js';

const controller = {
  getUser: (req, res) => {
    const id = req.params.id;
    const data = getUserData(+id);

    if (data.length === 0) return res.status(404).send('User is not found');

    return res.status(200).json(data);
  },
  getUserByCohortNum: (req, res) => {
    const cohort_num = req.params.cohort_num;
    const data = getUserByCohort(+cohort_num);

    if (data.length === 0)
      return res
        .status(404)
        .send(`User is not found who's cohort is ${cohort_num}`);

    return res.status(200).json(data);
  },
  postAddUser: (req, res) => {
    const { name, cohort_num } = req.body;
    const response = addUser(name, cohort_num);

    if (!response) return res.status(409).send('This User is already here!');

    return res.status(201).send('User is added successfully');
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    const response = deleteUserById(+id);

    if (!response) return res.status(404).send('User is not found');

    return res.status(201).send('User is successfully deleted');
  }
};

export default controller;
