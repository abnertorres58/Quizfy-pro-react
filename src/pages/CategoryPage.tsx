import { Button, Grid, GridCol, Text } from "@mantine/core";
import { BiBrain } from "react-icons/bi";
import { IoEarthOutline } from "react-icons/io5";

import { FaFilm } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { IoCodeSlashSharp } from "react-icons/io5";
import CategoryItem from "../componets/CategoryItem";
import QuizContainer from "../componets/QuizContainer";


const categories = [
  {
    icon: <BiBrain color="#1F509A" size={70} />,
    title: "General Knowledge",
  },
  {
    icon: <IoEarthOutline color="#15B392" size={70} />,
    title: "Geography",
  },

  {
    icon: <GiMaterialsScience color="#6C48C5" size={70} />,
    title: "Science",
  },
  {
    icon: <FaFilm color="#3B1E54" size={70} />,
    title: "Movies",
  },

  {
    icon: <GrTechnology color="#FF204E" size={70} />,
    title: "Technologies",
  },
  {
    icon: <IoCodeSlashSharp color="#0096FF" size={70} />,
    title: "programming",
  },
];

const CategoryPage = () => {
  return (
    <QuizContainer>
        <Text
        variant="gradient"
        fw={"bold"}
        fz={{base: "2rem", md: "3rem", lg: "2rem"}}
        gradient={{from: "red", to: "deeppink", deg: 45}}
        >
            Category
        </Text>

        <Grid miw={"90%"}>
            {
                categories.map((category, index)=> (
                    <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                    <CategoryItem
                        icon={category.icon}
                        title={category.title}
                        onClick={() => {}}
                        active={index === 1} 
                        />
                    </Grid.Col>
                ))
            }
        </Grid>
        <Button 
        variant="gradient"
        miw={"200px"}
        size="lg"
        radius={"xl"}
        gradient={{from:"red", to: "deeppink", deg:45}}
        mt={"xl"}
        >Start Quiz</Button>
    </QuizContainer>
  )
}

export default CategoryPage