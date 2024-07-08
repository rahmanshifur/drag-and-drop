"use client";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Container, Grid } from "@mui/material";
import CardList from "../../components/CardList";
import Heading from "../../components/ui/Heading";
const Page3 = () => {
  return (
    <Box>
      <Box sx={{
        background: '#F4F4F4',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <Container>
          <Heading size="large" text={'Client Regimen Request'} sx={{ marginLeft: '50px' }} />
        </Container>
      </Box>

      <Container >
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
