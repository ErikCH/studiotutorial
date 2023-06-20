// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Question, Answer, QuestionAnswer } = initSchema(schema);

export {
  Question,
  Answer,
  QuestionAnswer
};