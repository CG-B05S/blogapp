import React, { useContext } from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import Image1 from "../../Assets/OldBuilding.jpg";
import Image2 from "../../Assets/Avatarjpg.jpg";
import { Link } from "react-router-dom";
import { NewsContext } from "../../contextAPI/NewsProvider";
export default function Card1() {
    return (
      <>
        <Cards></Cards>
      </>
    );
  };
  // export default Card1;
  
  const Cards = (props) => {
    const { technology } = useContext(NewsContext);
    const listitems = technology?.map((card) => (
      <Grid item lg={3.3} xs={12}>
        <Link to={`/technology/${card.id}`} style={{ textDecoration: "none" }}>
          <Box
            sx={{ width: { xs: "100%", md: "100%" }, paddingTop: "60px" }}
            justifyContent="center"
          >
            <Paper elevation={1}>
              <Box
                sx={{
                  width: { md: "330px", xs: "340px" },
                  height: { md: "30vh", xs: "30vh" },
                  backgroundImage: `url(${card.img1})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                borderRadius="10px"
                textAlign="left"
              />
              <Box paddingY={"20px"} paddingLeft="10px">
                <Typography variant="h5" py={"auto"}>
                  {card.Heading1}
                </Typography>
                <Typography variant="subtitle2">{card.Heading2}</Typography>
  
                <Box
                  sx={{
                    paddingY: "10px",
                    display: { md: "flex", xs: "flex" },
                    justifyContent: { md: "left" },
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "55px", xs: "70px" },
                      height: { md: "9vh", xs: "9vh" },
                      backgroundImage: `url(${Image2})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  />
                  <Box paddingLeft="10px">
                    <Typography variant="subtitle1">Rakesh Gowda</Typography>
                    <Typography variant="caption text">
                      May 04,2022 10 min read
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Link>
      </Grid>
    ));
    return (
      <>
        <Grid
          container
          spacing={1}
          justifyContent="space-evenly"
          paddingBottom={"50px"}
        >
          {listitems}
        </Grid>
      </>
    );
  };