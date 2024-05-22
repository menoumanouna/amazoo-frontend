import { CardMedia, Stack } from "@mui/material";
import React, { useState } from "react";
import { IMAGE_UPLOAD_PLACEHOLDER } from "../../config/global.config";

interface ImageUploadProps {
  onUpload: (file: File) => void;
  imageUrl?: string;
}

function ImageUpload({ onUpload, imageUrl }: ImageUploadProps) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    imageUrl
  );
  const randomid = "image-upload-input" + Math.random();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        onUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById(randomid)?.click();
  };

  return (
    <Stack
      onClick={handleClick}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      sx={{
        cursor: "pointer",
        width: "100%",
        height: previewImage ? 200 : 100,
      }}
    >
      {!previewImage ? (
        <CardMedia
          component="img"
          image={IMAGE_UPLOAD_PLACEHOLDER}
          alt="Image Placeholder"
          sx={{
            height: "100%",
            objectFit: "scale-down",
            opacity: 0.5,
            "&:hover": {
              opacity: 1,
            },
          }}
        />
      ) : (
        <CardMedia
          component="img"
          image={previewImage}
          alt="Preview"
          style={{ height: "100%", objectFit: "scale-down" }}
        />
      )}
      <input
        accept="image/*"
        hidden
        type="file"
        onChange={handleUpload}
        id={randomid}
      />
    </Stack>
  );
}

export default ImageUpload;
