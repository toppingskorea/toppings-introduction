import logo from "@/assets/logo.png";
import { MemberCard } from "@/modules/main/MemberCard.mobile";
import { 맴버들 } from "@/modules/main/맴버들";
import { Flex, Heading, Section } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Flex direction="column" align="center">
        <Image src={logo.src} alt="toppings" width={320} height={320} />
        <Heading size="4">우리는 꿈을 팔지 않아요</Heading>
        <Heading size="4" mt="4">
          우리는 상상력을 만들어요
        </Heading>
      </Flex>

      <Section mx="8">
        <Heading size="6">Problem Solver</Heading>

        <Section pt="0">
          {맴버들.map((맴버) => (
            <MemberCard
              key={맴버.이름}
              이름={맴버.이름}
              소개={맴버.소개}
              이미지={맴버.이미지}
              컨텐츠={맴버.컨텐츠}
            />
          ))}
        </Section>
      </Section>
    </main>
  );
}