import { findMemberImage } from "@/assets/member";
import { 맴버_이름_목록 } from "@/constants/member";
import { Strong, Text } from "@radix-ui/themes";

export const 맴버들 = [
  {
    이름: 맴버_이름_목록.김규남,
    소개: "봄의 마술사",
    이미지: findMemberImage(맴버_이름_목록.김규남),
    컨텐츠: (
      <Text>
        그는 팀 토핑즈 팀원들에게 <Strong>숨을 쉬게 해줘요</Strong>
      </Text>
    ),
  },
  {
    이름: 맴버_이름_목록.김동규,
    소개: "쿠마 덕후",
    이미지: findMemberImage(맴버_이름_목록.김동규),
    컨텐츠: <Text>그는 자신의 상상을 화면에 집어넣어요</Text>,
  },
  {
    이름: 맴버_이름_목록.박찬혁,
    소개: "재치있는 등산가",
    이미지: findMemberImage(맴버_이름_목록.박찬혁),
    컨텐츠: (
      <Text>
        그는 <Strong>기술적 고민</Strong> 해결사에요
      </Text>
    ),
  },
  {
    이름: 맴버_이름_목록.변해빈,
    소개: "팀 토핑즈의 비타민",
    이미지: findMemberImage(맴버_이름_목록.변해빈),
    컨텐츠: <Text>그는 돌아가는 바퀴를 갈아끼워요</Text>,
  },
  {
    이름: 맴버_이름_목록.이시연,
    소개: "90년대 MZ세대의 대장",
    이미지: findMemberImage(맴버_이름_목록.이시연),
    컨텐츠: (
      <Text>
        그녀는 팀 토핑즈의<Strong>미술부장</Strong>이에요
      </Text>
    ),
  },
  {
    이름: 맴버_이름_목록.이철희,
    소개: "화면위의 집사",
    이미지: findMemberImage(맴버_이름_목록.이철희),
    컨텐츠: (
      <Text>
        그는 팀 토핑즈의 화면위의<Strong> 미술사</Strong>에요
      </Text>
    ),
  },
  {
    이름: 맴버_이름_목록.조해창,
    소개: "괴짜 몽상가",
    이미지: findMemberImage(맴버_이름_목록.조해창),
    컨텐츠: (
      <Text>
        그는 팀 토핑즈의<Strong>꿈 항해사</Strong>에요
      </Text>
    ),
  },
];

export type 맴버 = (typeof 맴버들)[number];
