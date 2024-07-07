import Image from "next/image";
const CustomImage = ({ src, width = 111, height = 111 }) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Picture of the author"
    />
  );
};

export default CustomImage;