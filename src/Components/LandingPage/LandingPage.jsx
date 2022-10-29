import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/Nature.jpg";
import Image2 from "../../Assets/Mountian.jpg";

const LandingPage = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"row"}
        width="90%"
        sx={{
          width: { md: "90%", xs: "98%" },
          paddingTop: { xs: "20px", md: "150px" },
          paddingBottom: { xs: "50px", md: "50px" },
        }}
        mx="auto"
      >
        <Box
          sx={{
            width: { md: "900px", xs: "450px" },
            height: { md: "70vh", xs: "50vh" },
            backgroundImage: `url(https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/04/14/yashkgfchapter-1100672-1649922768.png?itok=xeUMCwQa)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          borderRadius="10px"
          textAlign="left"
        >
          <Typography
            variant="h5"
            py={"auto"}
            color="white"
            paddingTop={"250px"}
            paddingLeft="50px"
          >
           Rocking Star Yash
          </Typography>
          <Typography
            variant="subtitle1"
            color={"wheat"}
            py={"auto"}
            paddingLeft="50px"
          >
            Travel/ August 19 2022
          </Typography>
        </Box>
        <Hidden smDown>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            paddingLeft="20px"
            justifyContent={"space-between"}
            borderRadius="10px"
          >
            <Box
              borderRadius="10px"
              sx={{
                width: { md: "100%", xs: "450px" },
                height: { md: "210px", xs: "50vh" },
                backgroundImage: `url(https://www.equitypandit.com/wp-content/uploads/2020/11/EP-Western-Union-960x540.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h5"
                py={"auto"}
                color="white"
                paddingTop={"100px"}
                paddingLeft="50px"
              >
                Western Union Buys 15% Stake in STC Pay
              </Typography>
              {/* <Typography
                variant="h5"
                py={"auto"}
                color="white"
                // paddingTop={"150px"}
                paddingLeft="50px"
              >
                You loved is doomed
              </Typography> */}
              <Typography
                variant="subtitle1"
                color={"wheat"}
                py={"auto"}
                paddingLeft="50px"
              >
                Travel/ August 19 2022
              </Typography>
            </Box>
            <Box
              borderRadius="10px"
              sx={{
                width: { md: "100%", xs: "450px" },
                height: { md: "210px", xs: "50vh" },
                backgroundImage: `url(https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_standard/public/EBHM39.jpg?itok=CP4v8aSe)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h6"
                py={"auto"}
                color="white"
                paddingTop={"120px"}
                paddingLeft="50px"
              >
                The Enduring Attraction of Hong Kong
              </Typography>
              <Typography
                variant="subtitle1"
                color={"wheat"}
                py={"auto"}
                paddingLeft="50px"
              >
                Travel/ August 19 2022
              </Typography>
            </Box>
          </Box>
        </Hidden>
      </Box>
    </>
  );
};

export default LandingPage;