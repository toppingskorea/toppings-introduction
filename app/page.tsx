"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HoverCard,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { memberImages } from "./assets/member";

export default function Home() {
  return (
    <main>
      <Flex direction="column" align="center">
        <Image src={logo.src} alt="toppings" width={360} height={360} />
      </Flex>

      <Section ml="8">
        <Heading size="6" mt="4">
          우리는 꿈을 팔지 않아요
        </Heading>
        <Heading size="6" mt="4">
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
    이름: "이시연",
    소개: "90년대 MZ세대의 대장",
    이미지: memberImages[0],
    컨텐츠: (
      <Text>
        그는 팀 토핑즈의<Strong>미술부장</Strong>이에요
      </Text>
    ),
  },
  {
    이름: "박찬혁",
    소개: "재치있는 등산가",
    이미지: memberImages[1],
    컨텐츠: (
      <Text>
        그는 <Strong>기술적 고민</Strong> 해결사에요
      </Text>
    ),
  },
  {
    이름: "조해창",
    소개: "괴짜 몽상가",
    이미지: memberImages[2],
    컨텐츠: (
      <Text>
        그는 팀 토핑즈의<Strong>꿈 항해사</Strong>에요
      </Text>
    ),
  },
];
