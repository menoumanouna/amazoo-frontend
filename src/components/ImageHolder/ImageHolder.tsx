import { Image } from "./imageHolder.style";
import { ImageHolderProps } from "./imageHolder.type";

function ImageHolder({
  imageurl,
  children,
  singleimage,
  width,
  height,
  topradius,
  withoutMargin,
  borderRadius,
  withCarousel,
}: ImageHolderProps & { children?: React.ReactElement }) {
  return (
    <Image
      imageurl={imageurl}
      topradius={topradius ?? 45}
      singleimage={singleimage}
      width={width}
      height={height}
      withcarousel={withCarousel ? "true" : "false"}
      withoutmargin={withoutMargin ? "true" : "false"}
      borderRadius={borderRadius}
    >
      {children}
    </Image>
  );
}

export default ImageHolder;
