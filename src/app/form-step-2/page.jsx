"use client";
import { Box, Container, Divider } from "@mui/material";
import Image2 from "../../assets/images/image-2.png";
import ImageCard from "../../components/ImageCard";
import Form2 from "../../components/form/Form2";
import Heading from "../../components/ui/Heading";

const FormStep2 = () => {
  return (
    <Box py={2}>
      <Container>
        <Heading text="Build Your Regimen" size="large" />
        <Divider
          sx={{
            marginTop: "12px",
            marginBottom: "15px",
          }}
        />

        <ImageCard src={Image2} />
        <Form2 />
      </Container>
    </Box>
  );
};

export default FormStep2;
