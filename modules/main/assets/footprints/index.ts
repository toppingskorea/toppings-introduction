import 토핑즈 from "./토핑즈.jpg";
import 멍더 from "./멍더.png";
import 핏백 from "./핏백.png";
import { 발자취_이름_목록 } from "../../발자취들";

export const footprintsImages = [
  {
    이름: "토핑즈",
    이미지: 토핑즈,
  },
  {
    이름: "멍더",
    이미지: 멍더,
  },
  {
    이름: "핏백",
    이미지: 핏백,
  },
];

export const findFootprintsImage = (name: 발자취_이름_목록) => {
  const footprintsImage = footprintsImages.find(
    (footprints) => footprints.이름 === name
  );
  if (!footprintsImage) {
    throw new Error("해당하는 맴버의 이미지가 없습니다.");
  }
  return footprintsImage.이미지;
};
