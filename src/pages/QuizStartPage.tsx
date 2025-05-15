import { Button, Text } from "@mantine/core"
import QuizContainer from "../componets/QuizContainer"

const QuizStartPage = () => {
  return (
    <QuizContainer minHeight="300px">
        <Text
        variant="gradient"
        fw={"bold"}
        fz={{base: "2rem", md: "3rem", lg: "2rem"}}
        gradient={{from: "red", to: "deeppink",deg:45}}
        >
            Quiz Start Page
        </Text>

        <Text fw={500} fz={16}>
            General Knowledge
        </Text>

        <Text fw={500} fz={16}>
            Test your general knowledge across various topics!
        </Text>

        <Text>
            8 correct answers
        </Text>

        <Button
        variant="gradient"
        miw={"200px"}
        size="md"
        radius={"xl"}
        gradient={{from: "red", to: "deeppink", deg: 45}}
        >
            Start Quiz
        </Button>

    </QuizContainer>
  )
}

export default QuizStartPage