import { API } from "aws-amplify";
import type { GraphQLQuery } from "@aws-amplify/api";
import { ListAnswersQuery, QuestionAnswersByAnswerIdQuery } from "@/API";
import { listAnswers } from "@/graphql/queries";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Flex, Grid, Heading, View } from "@aws-amplify/ui-react";

export default function ({
  question,
  id,
  correctAnswer,
  questionNumber,
  setScore
}: {
  question?: string;
  id?: string;
  correctAnswer?: string;
  questionNumber: number;
  setScore: Dispatch<SetStateAction<number>>;
}) {
  const [answers, setAnswers] = useState<GraphQLQuery<ListAnswersQuery>>();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const grabData = async () => {
      const { data } = await API.graphql<
        GraphQLQuery<QuestionAnswersByAnswerIdQuery>
      >({
        query: listAnswers,
        variables: { questionId: id }
      });
      console.log("data", data);
      setAnswers(data);
    };
    grabData();
  }, []);

  const onClick = (id?: string) => {
    const isCorrect = id === correctAnswer;
    setDisabled(true);
    if (isCorrect) {
      setScore(prevValue => {
        return prevValue + 1;
      });
    }
  };
  return (
    <Grid gap="2rem" isDisabled={disabled} className="answer-grid">
      <Heading level={3}>
        Question {questionNumber}: {question}
      </Heading>
      <div>Select The Correct Answer:</div>
      <Flex direction="column">
        {answers?.listAnswers?.items.map(answer => (
          <Button key={answer?.id} onClick={() => onClick(answer?.id)}>
            {answer?.text}
          </Button>
        ))}
      </Flex>
    </Grid>
  );
}
