"use client";
import { Box, Container, Divider } from "@mui/material";
import Image1 from "../../assets/images/image-1.png";
import ImageCard from "../../components/ImageCard";
import Form1 from "../../components/form/Form1";
import Heading from "../../components/ui/Heading";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import SubTitle from "../../components/ui/SubTitle";


const FormStep1 = () => {
  return (
    <Box py={2}>
      <Container maxWidth='sm'>
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
          sx={{ margin: "12px 0 16px 0" }}
        />
        <ImageCard
          src={Image1}
          title={"Let’s get started!"}
          subTitle={
            "It’ll take 2-3 minutes to understand you and your skin concern. "
          }
        />
        <Form1 />
      </Container>
    </Box>
  );
};

export default FormStep1;
