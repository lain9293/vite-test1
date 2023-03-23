const Dog = ({ dogImg }: { dogImg: string }) => {
  return (
    <img src={dogImg} width={250} height={250} style={{ objectFit: "cover" }} />
  );
};

export default Dog;
