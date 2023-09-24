import { ValueOf } from "type-fest";
import { findFootprintsImage } from "./assets/footprints";

export const 발자취_이름_목록 = {
  토핑즈: "토핑즈",
  멍더: "멍더",
  핏백: "핏백",
} as const;

export type 발자취_이름_목록 = ValueOf<typeof 발자취_이름_목록>;

export const 발자취들 = [
  {
    이름: 발자취_이름_목록.토핑즈,
    소개: '고향의 맛이 그리운 한국 거주 외국인들에게 "고향의 맛"을 전달해요',
    이미지: findFootprintsImage(발자취_이름_목록.토핑즈),
  },
  {
    이름: 발자취_이름_목록.멍더,
    소개: '내 동생 "멍더" 더 이상 혼자 산책할 걱정하지 마요',
    이미지: findFootprintsImage(발자취_이름_목록.멍더),
  },
  {
    이름: 발자취_이름_목록.핏백,
    소개: "운동에 정답은 없지만 오답은 있어요",
    이미지: findFootprintsImage(발자취_이름_목록.핏백),
  },
];

export type 발자취 = (typeof 발자취들)[number];
