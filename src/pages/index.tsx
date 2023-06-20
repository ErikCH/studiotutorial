import Quiz from "@/components/Quiz";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import type { GraphQLQuery } from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { ListQuestionsQuery } from "@/API";
import { listQuestions } from "@/graphql/queries";
import { API } from "aws-amplify";

export default function Home() {
  const { signOut } = useAuthenticator(context => [context.signOut]);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] =
    useState<GraphQLQuery<ListQuestionsQuery>>();
  useEffect(() => {
    const grabData = async () => {
      const { data } = await API.graphql<GraphQLQuery<ListQuestionsQuery>>({
        query: listQuestions
      });
      setQuestions(data);
    };
    grabData();
  }, []);

  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Heading level={1}>Quiz App - Current Score: {score}</Heading>

      {questions?.listQuestions?.items.map((question, idx) => (
        <Quiz
          key={question?.id}
          id={question?.id}
          question={question?.text!}
          correctAnswer={question?.questionAcceptedAnswerId!}
          questionNumber={idx + 1}
          setScore={setScore}
        />
      ))}
      <Button onClick={signOut} variation="warning">
        Sign Out
      </Button>
    </Flex>
  );
}
