import { Box, Hidden, Paper, Typography } from "@mui/material";
import React from "react";
import Component3 from "./Component3";
const Component2 = () => {
  return (
    <>
      <Box>
        <Paper elevation={1}>
          <Box paddingLeft={"15px"}>
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "33vh", xs: "25vh" },
                backgroundImage: `url(https://www.pinkvilla.com/imageresize/swara_bhasker_main_3.jpg?width=752&format=webp&t=pvorg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />

            <Box
              sx={{
                width: { md: "450px", xs: "350px" },
                paddingTop: { md: "15px", xs: "30px" },
              }}
              // paddingBottom="20px"
            >
              <Typography variant="h6" py={"auto"}>
                Swara Bhasker says boycott trend in Bollywood is driven by
                agenda
              </Typography>
              {/* <Typography variant="h4" py={"auto"}>
                an Adventure Guide
              </Typography> */}

              <Box paddingTop={"5px"} paddingBottom="20px">
                <Typography variant="caption text" py={"auto"}>
                  <b>Travel</b> / August 19 2017
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Component3 />
      <Hidden mdDown>
        <Box sx={{ paddingTop: { md: "20px" } }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            justifyContent={"space-between"}
            border="1px solid blue"
            borderRadius="5px"
            height={"82vh"}
          >
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "100vh", xs: "100vh" },
                backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BMDk1MDYwODgtZGExMS00ZDk3LWJmYWMtOGE2YzNmYjZiNDVlXkEyXkFqcGdeQXVyNTIwODMzNjc@._V1_.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />
            {/* <Typography align="center" py="auto" my="auto">
              Advertistement
            </Typography> */}
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Component2;