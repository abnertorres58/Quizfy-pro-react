import { Button, Flex } from "@mantine/core";
import { Text } from "@mantine/core";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface QuizCardProps {
    question: string;
    options: string[];
    correctAnswer: string;
    onAnswer: (answer: string) => void;
    onNext: () => void;
}

const SAMPLE_OPTIONS = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
]

const QuizCard = ({}: QuizCardProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  return (
    <Flex miw={"90%"} direction={"column"} gap={10}>
        <Text
        size={"xl"}
        fw={500}
        my={"md"}
        >
            Question
        </Text>

        <Flex direction={"column"} gap={10}>
            {
                SAMPLE_OPTIONS.map((option, index) => (
                    <Button 
                    onClick={() => {
                        setSelectedAnswer(option);
                    }}
                    c={selectedAnswer === option ? "white" : "gray"}
                    key={index} 
                    bd={"0.5px solid deeppink"}
                    variant={selectedAnswer === option ? "gradient" : "outline"}
                    gradient={{from: "red", to: "deeppink"}}
                    radius={"xl"} 
                    size={"lg"}
                    >
                        {option}
                    </Button>
                ))}

                <Flex gap={10} justify={"end"} mt={10}>
                    <Button
                    variant="gradient"
                    gradient={{from: "red", to: "deeppink"}}
                    radius={"xl"}
                    size={"md"}
                    rightSection={<FaArrowRight />}
                    >
                        Next
                    </Button>

                </Flex>

        </Flex>
    </Flex>
  )
}

export default QuizCard