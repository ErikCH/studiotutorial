import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly Answers?: (QuestionAnswer | null)[] | null;
  readonly AcceptedAnswer?: Answer | null;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionAcceptedAnswerId?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly Answers: AsyncCollection<QuestionAnswer>;
  readonly AcceptedAnswer: AsyncItem<Answer | undefined>;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionAcceptedAnswerId?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly questions?: (QuestionAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly questions: AsyncCollection<QuestionAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Answer = LazyLoading extends LazyLoadingDisabled ? EagerAnswer : LazyAnswer

export declare const Answer: (new (init: ModelInit<Answer>) => Answer) & {
  copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

type EagerQuestionAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionId?: string | null;
  readonly answerId?: string | null;
  readonly question: Question;
  readonly answer: Answer;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionId?: string | null;
  readonly answerId?: string | null;
  readonly question: AsyncItem<Question>;
  readonly answer: AsyncItem<Answer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuestionAnswer = LazyLoading extends LazyLoadingDisabled ? EagerQuestionAnswer : LazyQuestionAnswer

export declare const QuestionAnswer: (new (init: ModelInit<QuestionAnswer>) => QuestionAnswer) & {
  copyOf(source: QuestionAnswer, mutator: (draft: MutableModel<QuestionAnswer>) => MutableModel<QuestionAnswer> | void): QuestionAnswer;
}