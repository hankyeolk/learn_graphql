import express from 'express';
import controller from './util-controller.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => console.log('hello world'));
app.get('/user/:id', controller.getUser);
app.get('/user/cohort/:cohort_num', controller.getUserByCohortNum);
app.post('/user', controller.postAddUser);
app.delete('/user/:id', controller.deleteUser);

app.listen(4000, () => console.log(`server is running on 4000`));
