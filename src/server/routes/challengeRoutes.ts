import { ChallengeController } from './../controllers/challengeController';
import bodyParser = require('body-parser');
import { testFileWritter } from '../handlers/testFileWriter';
import { authMiddleware } from '../middlewares/authMiddleware';
import { hollow } from '../middlewares/hollowMiddleware';

const challengeController = new ChallengeController(); // challenge controller instance

// Store all challenge routes in an array
const routes = [
  { // get all challenges
    method: 'get',
    path: '/',
    middlewares: [hollow],
    description: 'get all challenges',
    action: challengeController.findAll,
    body: ['none']
  },
  { // get a challenge by its ID
    method: 'get',
    path: '/:id',
    middlewares: [hollow],
    description: 'get challenge by id',
    action: challengeController.findById,
    body: ['none']
  },
  { // run a test given challenge ID
    method: 'post',
    path: '/:id/test',
    middlewares: [
      authMiddleware,
      bodyParser.text(),
      testFileWritter
    ],
    description: 'test a user answer against challenge sample',
    action: challengeController.test,
    body: ['plain text']
  }
]

// //The following routes (and controller functions) are available for future implementation, after 
// //adding, for example, an ADMIN page.
// routes.patch('/:id', challengeController.update);
// routes.delete('/:id', challengeController.delete);
// routes.post('/', challengeController.create);

export default routes;