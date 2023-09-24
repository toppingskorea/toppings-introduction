import { ValueOf } from "type-fest";

export const 맴버_이름_목록 = {
  김규남: "김규남",
  김동규: "김동규",
  박찬혁: "박찬혁",
  변해빈: "변해빈",
  이시연: "이시연",
  이철희: "이철희",
  조해창: "조해창",
} as const;

export type 맴버_이름_목록 = ValueOf<typeof 맴버_이름_목록>;
