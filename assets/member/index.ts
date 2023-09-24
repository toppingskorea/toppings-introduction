import 규남 from "./규남.png";
import 찬혁 from "./찬혁.png";
import 시연 from "./시연.png";
import 철희 from "./철희.png";
import 해창 from "./해창.png";
import 동규 from "./동규.png";
import 해빈 from "./해빈.png";
import { 맴버_이름_목록 } from "@/constants/member";

export const memberImages = [
  {
    이름: "김규남",
    이미지: 규남,
  },
  {
    이름: "김동규",
    이미지: 동규,
  },
  {
    이름: "박찬혁",
    이미지: 찬혁,
  },
  {
    이름: "변해빈",
    이미지: 해빈,
  },
  {
    이름: "이시연",
    이미지: 시연,
  },
  {
    이름: "이철희",
    이미지: 철희,
  },
  {
    이름: "조해창",
    이미지: 해창,
  },
] as const;

export const findMemberImage = (name: 맴버_이름_목록) => {
  const memberImage = memberImages.find((member) => member.이름 === name);
  if (!memberImage) {
    throw new Error("해당하는 맴버의 이미지가 없습니다.");
  }
  return memberImage.이미지;
};
