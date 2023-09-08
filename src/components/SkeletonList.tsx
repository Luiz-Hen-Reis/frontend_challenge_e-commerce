import SkeletonCard from "./SkeletonCard";

export default function SkeletonList() {
  const array = Array(12).fill("");

  return (
    <>
      {array.map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </>
  );
}
