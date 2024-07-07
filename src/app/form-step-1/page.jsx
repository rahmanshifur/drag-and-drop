"use client";
import { Box, Container, Divider } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import Form1 from "../../components/form/Form1";
import Heading from "../../components/ui/Heading";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import SubTitle from "../../components/ui/SubTitle";

const FormStep1 = () => {
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
        <PrimaryBtn text="Login To Klassy" />
        <SubTitle
          text=" * Login to sync your profile details for more easy step."
          color="warning"
          sx={{ margin: "16px 0" }}
        />
        <ImageCard />
        <Form1 />
      </Container>
    </Box>
  );
};

export default FormStep1;