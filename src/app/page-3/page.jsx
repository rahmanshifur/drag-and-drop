"use client";
import Heading from "../../components/ui/Heading";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import Image2 from "../../assets/images/image-2.png";
import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import ImageCard from "../../components/ImageCard";
import Form2 from "../../components/form/Form2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubTitle from "../../components/ui/SubTitle";
import CardList from "../../components/CardList";
const Page3 = () => {
  return (
    <Box py={2}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "#F4F4F4",
                padding: "16px",
                minHeight: "100vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <Heading
                  text={"Incoming Request"}
                  size="medium"
                  color="#172B4D"
                />
                <MoreHorizIcon sx={{ fontSize: 30 }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <CardList />
                <CardList />
                <CardList />
                <CardList />
                <CardList />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "#F4F4F4",
                padding: "16px",
                minHeight: "100vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <Heading text={"Processing"} size="medium" color="#172B4D" />
                <MoreHorizIcon sx={{ fontSize: 30 }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <CardList />
                <CardList />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "#F4F4F4",
                padding: "16px",
                minHeight: "100vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <Heading
                  text={"Done | Updated"}
                  size="medium"
                  color="#172B4D"
                />
                <MoreHorizIcon sx={{ fontSize: 30 }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <CardList />
                <CardList />
                <CardList />
                <CardList />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page3;
