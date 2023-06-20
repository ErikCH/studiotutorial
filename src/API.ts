/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestionInput = {
  id?: string | null,
  text?: string | null,
  quizID: string,
  _version?: number | null,
  questionAcceptedAnswerId?: string | null,
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null,
  quizID?: ModelIDInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  questionAcceptedAnswerId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  text?: string | null,
  Answers?: ModelQuestionAnswerConnection | null,
  AcceptedAnswer?: Answer | null,
  quizID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  questionAcceptedAnswerId?: string | null,
};

export type ModelQuestionAnswerConnection = {
  __typename: "ModelQuestionAnswerConnection",
  items:  Array<QuestionAnswer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type QuestionAnswer = {
  __typename: "QuestionAnswer",
  id: string,
  questionId: string,
  answerId: string,
  question: Question,
  answer: Answer,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Answer = {
  __typename: "Answer",
  id: string,
  text?: string | null,
  questions?: ModelQuestionAnswerConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  quizID?: string | null,
  _version?: number | null,
  questionAcceptedAnswerId?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
  _version?: number | null,
};

export type CreateAnswerInput = {
  id?: string | null,
  text?: string | null,
  _version?: number | null,
};

export type ModelAnswerConditionInput = {
  text?: ModelStringInput | null,
  and?: Array< ModelAnswerConditionInput | null > | null,
  or?: Array< ModelAnswerConditionInput | null > | null,
  not?: ModelAnswerConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateAnswerInput = {
  id: string,
  text?: string | null,
  _version?: number | null,
};

export type DeleteAnswerInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestionAnswerInput = {
  id?: string | null,
  questionId: string,
  answerId: string,
  _version?: number | null,
};

export type ModelQuestionAnswerConditionInput = {
  questionId?: ModelIDInput | null,
  answerId?: ModelIDInput | null,
  and?: Array< ModelQuestionAnswerConditionInput | null > | null,
  or?: Array< ModelQuestionAnswerConditionInput | null > | null,
  not?: ModelQuestionAnswerConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateQuestionAnswerInput = {
  id: string,
  questionId?: string | null,
  answerId?: string | null,
  _version?: number | null,
};

export type DeleteQuestionAnswerInput = {
  id: string,
  _version?: number | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  quizID?: ModelIDInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  questionAcceptedAnswerId?: ModelIDInput | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAnswerFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelAnswerFilterInput | null > | null,
  or?: Array< ModelAnswerFilterInput | null > | null,
  not?: ModelAnswerFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAnswerConnection = {
  __typename: "ModelAnswerConnection",
  items:  Array<Answer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestionAnswerFilterInput = {
  id?: ModelIDInput | null,
  questionId?: ModelIDInput | null,
  answerId?: ModelIDInput | null,
  and?: Array< ModelQuestionAnswerFilterInput | null > | null,
  or?: Array< ModelQuestionAnswerFilterInput | null > | null,
  not?: ModelQuestionAnswerFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  quizID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAnswerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAnswerFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnswerFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionQuestionAnswerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  questionId?: ModelSubscriptionIDInput | null,
  answerId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQuestionAnswerFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionAnswerFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type CreateAnswerMutationVariables = {
  input: CreateAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type CreateAnswerMutation = {
  createAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAnswerMutationVariables = {
  input: UpdateAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type UpdateAnswerMutation = {
  updateAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAnswerMutationVariables = {
  input: DeleteAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type DeleteAnswerMutation = {
  deleteAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestionAnswerMutationVariables = {
  input: CreateQuestionAnswerInput,
  condition?: ModelQuestionAnswerConditionInput | null,
};

export type CreateQuestionAnswerMutation = {
  createQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestionAnswerMutationVariables = {
  input: UpdateQuestionAnswerInput,
  condition?: ModelQuestionAnswerConditionInput | null,
};

export type UpdateQuestionAnswerMutation = {
  updateQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestionAnswerMutationVariables = {
  input: DeleteQuestionAnswerInput,
  condition?: ModelQuestionAnswerConditionInput | null,
};

export type DeleteQuestionAnswerMutation = {
  deleteQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestionsQuery = {
  syncQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type QuestionsByQuizIDQueryVariables = {
  quizID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionsByQuizIDQuery = {
  questionsByQuizID?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAnswerQueryVariables = {
  id: string,
};

export type GetAnswerQuery = {
  getAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAnswersQueryVariables = {
  filter?: ModelAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnswersQuery = {
  listAnswers?:  {
    __typename: "ModelAnswerConnection",
    items:  Array< {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAnswersQueryVariables = {
  filter?: ModelAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAnswersQuery = {
  syncAnswers?:  {
    __typename: "ModelAnswerConnection",
    items:  Array< {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestionAnswerQueryVariables = {
  id: string,
};

export type GetQuestionAnswerQuery = {
  getQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestionAnswersQueryVariables = {
  filter?: ModelQuestionAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionAnswersQuery = {
  listQuestionAnswers?:  {
    __typename: "ModelQuestionAnswerConnection",
    items:  Array< {
      __typename: "QuestionAnswer",
      id: string,
      questionId: string,
      answerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestionAnswersQueryVariables = {
  filter?: ModelQuestionAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestionAnswersQuery = {
  syncQuestionAnswers?:  {
    __typename: "ModelQuestionAnswerConnection",
    items:  Array< {
      __typename: "QuestionAnswer",
      id: string,
      questionId: string,
      answerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type QuestionAnswersByQuestionIdQueryVariables = {
  questionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionAnswersByQuestionIdQuery = {
  questionAnswersByQuestionId?:  {
    __typename: "ModelQuestionAnswerConnection",
    items:  Array< {
      __typename: "QuestionAnswer",
      id: string,
      questionId: string,
      answerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type QuestionAnswersByAnswerIdQueryVariables = {
  answerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionAnswersByAnswerIdQuery = {
  questionAnswersByAnswerId?:  {
    __typename: "ModelQuestionAnswerConnection",
    items:  Array< {
      __typename: "QuestionAnswer",
      id: string,
      questionId: string,
      answerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    text?: string | null,
    Answers?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    AcceptedAnswer?:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    quizID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questionAcceptedAnswerId?: string | null,
  } | null,
};

export type OnCreateAnswerSubscriptionVariables = {
  filter?: ModelSubscriptionAnswerFilterInput | null,
};

export type OnCreateAnswerSubscription = {
  onCreateAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAnswerSubscriptionVariables = {
  filter?: ModelSubscriptionAnswerFilterInput | null,
};

export type OnUpdateAnswerSubscription = {
  onUpdateAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAnswerSubscriptionVariables = {
  filter?: ModelSubscriptionAnswerFilterInput | null,
};

export type OnDeleteAnswerSubscription = {
  onDeleteAnswer?:  {
    __typename: "Answer",
    id: string,
    text?: string | null,
    questions?:  {
      __typename: "ModelQuestionAnswerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestionAnswerSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionAnswerFilterInput | null,
};

export type OnCreateQuestionAnswerSubscription = {
  onCreateQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestionAnswerSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionAnswerFilterInput | null,
};

export type OnUpdateQuestionAnswerSubscription = {
  onUpdateQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestionAnswerSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionAnswerFilterInput | null,
};

export type OnDeleteQuestionAnswerSubscription = {
  onDeleteQuestionAnswer?:  {
    __typename: "QuestionAnswer",
    id: string,
    questionId: string,
    answerId: string,
    question:  {
      __typename: "Question",
      id: string,
      text?: string | null,
      quizID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questionAcceptedAnswerId?: string | null,
    },
    answer:  {
      __typename: "Answer",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
