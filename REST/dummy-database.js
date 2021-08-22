const database = {
  USERS: [
    {
      uid: 1,
      name: '김은혜',
      cohort_num: 22
    },
    {
      uid: 2,
      name: '강한결',
      cohort_num: 22
    },
    {
      uid: 3,
      name: '이빛나',
      cohort_num: null
    },
    {
      uid: 4,
      name: '피승권',
      cohort_num: 23
    },
    {
      uid: 5,
      name: '조정빈',
      cohort_num: 24
    },
    {
      uid: 6,
      name: '박준석',
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

export default database;
