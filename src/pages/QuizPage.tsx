import QuizCard from "../componets/QuizCard"
import QuizContainer from "../componets/QuizContainer"
import { Text } from "@mantine/core"

const QuizPage = () => {
  return (
    <QuizContainer>
        <Text fz={"2rem"}
        fw={"bold"}
        ta={"center"}
        >General Knowledge Quiz
        </Text>

        <Text
        fz={"1.5rem"}
        ta={"center"}
        >
            1/10
        </Text>

        <QuizCard/>
    </QuizContainer>
  )
}

export default QuizPage