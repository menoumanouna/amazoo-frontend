import ImageHolder from "../ImageHolder/ImageHolder";
import { ImageHolderContainer } from "../ImageHolder/imageHolder.style";
import { LandingCardProps } from "./landginCard.types";
import { Stack, Typography } from "@mui/material";
import { MainHolder } from "./landingCard.style";
import Carousel from "react-material-ui-carousel";

function LandingCard({
  title,
  description,
  backgroundImage,
  images,
  floating,
  backgroundColor,
  withgradient,
  textColor,
  textSpacing,
  alignText,
  subHeader,
  direction,
  withImageAlt,
  textFullWidth,
  divided,
  mainHolderSpacing,
  withCarousel,
  withOverFlow,
}: LandingCardProps) {
  const hasMoreThanOneImage = images ? images.length > 1 : false;
  const hasSingleImage = images ? images.length === 1 : false;
  return (
    <ImageHolderContainer
      imageurl={backgroundImage ?? ""}
      backgroundColor={backgroundColor}
      withgradient={withgradient}
    >
      <MainHolder
        direction={direction ?? "column"}
        floating={String(floating!)}
        spacing={mainHolderSpacing ?? 2}
        hasmorethanoneimage={hasMoreThanOneImage ? "true" : "false"}
      >
        <Stack
          {...(divided && {
            flex: 0.7,
          })}
          spacing={textSpacing ?? 2}
          width={textFullWidth ? "100%" : "inherit"}
        >
          <Stack spacing={0.75}>
            <Typography
              color={textColor ?? "white"}
              variant={"h1"}
              textAlign={alignText ?? "center"}
            >
              {title}
            </Typography>
            <Typography
              color={textColor ?? "white"}
              variant={"h5"}
              textAlign={alignText ?? "center"}
            >
              {subHeader}
            </Typography>
          </Stack>
          <Typography
            color={textColor ?? "white"}
            variant={"body1"}
            textAlign={alignText ?? "center"}
          >
            {description}
          </Typography>
        </Stack>
        <Stack {...(divided && { flex: 0.3 })}>
          {images &&
            (withCarousel ? (
              <Carousel strictIndexing>
                {images?.map((image, index) => (
                  <Stack
                    key={index}
                    sx={{ cursor: "pointer" }}
                    onClick={image.onClick}
                    direction={"column"}
                  >
                    <ImageHolder
                      imageurl={image.src}
                      singleimage={"false"}
                      withCarousel={!!withCarousel}
                    />
                    {withImageAlt && (
                      <Typography variant="h4" color={textColor ?? "black"}>
                        {image.alt}
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Carousel>
            ) : (
              <Stack
                direction={"row"}
                spacing={15}
                justifyContent={"center"}
                sx={{
                  overflowX: "auto",
                  maxWidth: "99vw",
                }}
              >
                {images?.map((image, index) => (
                  <Stack
                    key={index}
                    sx={{ cursor: "pointer" }}
                    onClick={image.onClick}
                  >
                    <ImageHolder
                      imageurl={image.src}
                      singleimage={hasSingleImage ? "true" : "false"}
                    />
                    {withImageAlt && (
                      <Typography variant="h4" color={textColor ?? "black"}>
                        {image.alt}
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Stack>
            ))}
        </Stack>
      </MainHolder>
    </ImageHolderContainer>
  );
}

export default LandingCard;
