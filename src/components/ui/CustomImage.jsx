import Image from "next/image";
const CustomImage = ({ src }) => {
  return (
    <Image src={src} width={111} height={111} alt="Picture of the author" />
  );
};

export default CustomImage;
