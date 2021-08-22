import database from './dummy-database.js';
let { USERS, COHORTS } = database;
const cohortNumEnum = {
  22: 1,
  23: 2,
  24: 3,
  25: 4
};

const getUserData = (uid) => {
  if (uid === undefined) return [];

  return USERS.filter((el) => el.uid === uid);
};

const getUserByCohort = (cohort_num) => {
  const targetCohort = COHORTS.find(
    (el) => el.cid === cohortNumEnum[cohort_num]
  ).cohort_user;
  const targetUser = targetCohort.map((cohortUser) =>
    USERS.find((user) => user.uid === cohortUser)
  );

  if (targetCohort === undefined) return [];

  return targetUser;
};

const addUser = (name, cohort_num) => {
  const isAlreadyUser = USERS.find((user) => user.name === name);
  const uid = USERS[USERS.length - 1].uid + 1;

  if (isAlreadyUser) {
    return false;
  }

  if (cohort_num === undefined) {
    USERS = [...USERS, { uid, name, cohort_num: null }];
    return true;
  }

  USERS = [...USERS, { uid, name, cohort_num }];
  COHORTS.find(
    (cohort) => cohort.cid === cohortNumEnum[cohort_num]
  ).cohort_user.push(uid);

  return true;
};

const deleteUserById = (uid) => {
  const user = getUserData(uid)[0];
  const userIndex = USERS.indexOf(user);
  const userCohort = user.cohort_num;

  if (user === undefined) return false;

  USERS.splice(userIndex, 1);
  const targetCohort = COHORTS.find(
    (cohort) => cohort.cid === cohortNumEnum[userCohort]
  ).cohort_user;

  targetCohort.splice(targetCohort.indexOf(user.uid), 1);
  return true;
};

export { getUserData, getUserByCohort, addUser, deleteUserById };
