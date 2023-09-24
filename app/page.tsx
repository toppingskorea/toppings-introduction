"use client";

import logo from "@/assets/logo.png";
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  HoverCard,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { findMemberImage } from "../assets/member";
import { 맴버_이름_목록 } from "../constants/member";

export default function Home() {
  return (
    <main>
      <Flex direction="column" align="center">
        <Image src={logo.src} alt="toppings" width={560} height={560} />
      </Flex>

      <Section pt="0" ml="8">
        <Heading size="8" mt="4">
          우리는 꿈을 팔지 않아요
        </Heading>
        <Heading size="8" mt="4">
          우리는 상상력을 만들어요
        </Heading>
      </Section>

      <Section mx="8">
        <Heading size="6">Problem Solver</Heading>

        <Section pt="0">
          {맴버들.map((맴버) => (
            <Card key={맴버.이름} mt="4" size="5">
              <Flex gap="3" align="center">
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Avatar
                      size="8"
                      src={맴버.이미지.src}
                      radius="full"
                      fallback="T"
                    />
                  </HoverCard.Trigger>
                  <HoverCard.Content size="3">{맴버.컨텐츠}</HoverCard.Content>
                </HoverCard.Root>
                <Box ml="8">
                  <Text as="div" size="9" weight="bold">
                    {맴버.이름}
                  </Text>
                  <Text as="div" size="8" color="gray" mt="4">
                    {맴버.소개}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Section>
      </Section>
    </main>
  );
}

const 맴버들 = [
  {
    이름: "김동규",
    소개: "쿠마 덕후",
    이미지: findMemberImage(맴버_이름_목록.김동규),
    컨텐츠: <Text>그는 자신의 상상을 화면에 집어넣어요</Text>,
  },
  {
    이름: "박찬혁",
    소개: "재치있는 등산가",
    이미지: findMemberImage(맴버_이름_목록.박찬혁),
    컨텐츠: (
      <Text>
        그는 <Strong>기술적 고민</Strong> 해결사에요
      </Text>
    ),
  },
  {
    이름: "변해빈",
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
    이름: "이철희",
    소개: "화면위의 집사",
    이미지: findMemberImage(맴버_이름_목록.이철희),
    컨텐츠: (
      <Text>
        그는 팀 토핑즈의 화면위의<Strong> 미술사</Strong>에요
      </Text>
    ),
  },
  {
    이름: "조해창",
    소개: "괴짜 몽상가",
    이미지: findMemberImage(맴버_이름_목록.조해창),
    컨텐츠: (
      <Text>
        그는 팀 토핑즈의<Strong>꿈 항해사</Strong>에요
      </Text>
    ),
  },
];
