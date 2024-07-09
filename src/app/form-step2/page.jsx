"use client";
import { Box, Container, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Image2 from "../../assets/images/image-2.png";
import ImageCard from "../../components/ImageCard";
import Form2 from "../../components/form/Form2";
import Heading from "../../components/ui/Heading";
import {
  addCard,
  FORM_EMPTY_STATE,
  setForm,
} from "../../store/features/appSlice";

const FormStep2 = () => {
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.app.form);
  const layout = useSelector((state) => state.app.layout);

  const router = useRouter();

  const handleChange = (e) => {
    dispatch(setForm({ ...formValues, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newCard = {
      id: uuidv4(),
      title: `Regimen: ${uuidv4().slice(0, 8).toUpperCase()}`,
      content: `Name: ${formValues.name}, Gender: ${formValues.gender}, Concern: ${formValues.concern}, DOB: ${formValues.dob}, Eye Concern: ${formValues.eyeConcern}, Details: ${formValues.detailedConcern}`,
    };
    dispatch(addCard({ columnId: layout[0].id, card: newCard }));
    // Reset form values after save
    dispatch(setForm(FORM_EMPTY_STATE));
    router.push("/board");
  };

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <Box py={2}>
      <Container maxWidth="sm">
        <Heading text="Build Your Regimen" size="large" />
        <Divider
          sx={{
            marginTop: "12px",
            marginBottom: "15px",
          }}
        />

        <ImageCard src={Image2} />
        <Form2
          handleChange={handleChange}
          formValues={formValues}
          submitHandler={submitHandler}
          handleBackClick={handleBackClick}
        />
      </Container>
    </Box>
  );
};

export default FormStep2;
