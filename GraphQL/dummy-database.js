const database = {
  USERS: [
    {
      uid: 1,
      name: '김버그',
      cohort_num: 22
    },
    {
      uid: 2,
      name: '강버그',
      cohort_num: 22
    },
    {
      uid: 3,
      name: '이버그',
      cohort_num: null
    },
    {
      uid: 4,
      name: '피버그',
      cohort_num: 23
    },
    {
      uid: 5,
      name: '조버그',
      cohort_num: 24
    },
    {
      uid: 6,
      name: '박버그',
      cohort_num: 25
    }
  ],
  COHORTS: [
    {
      cid: 1,
      cohort_num: 22,
      cohort_user: [1, 2]
    },
    {
      cid: 2,
      cohort_num: 23,
      cohort_user: [4]
    },
    {
      cid: 3,
      cohort_num: 24,
      cohort_user: [5]
    },
    {
      cid: 4,
      cohort_num: 25,
      cohort_user: [6]
    }
  ]
};

module.exports = database;
