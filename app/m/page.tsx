import logo from "@/assets/logo.png";
import { FootprintsCard } from "@/modules/main/FootprintsCard.mobile";
import { MemberCard } from "@/modules/main/MemberCard.mobile";
import { 맴버들 } from "@/modules/main/맴버들";
import { 발자취들 } from "@/modules/main/발자취들";
import { Flex, Heading, Kbd, Section } from "@radix-ui/themes";
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

      <Section mx="8">
        <Heading size="6">Footprints</Heading>

        <Section pt="0">
          {발자취들.map((발자취) => (
            <FootprintsCard
              key={발자취.이름}
              이름={발자취.이름}
              소개={발자취.소개}
              이미지={발자취.이미지}
            />
          ))}
        </Section>
      </Section>

      <Flex direction="column" align="center">
        <Heading size="4">세상의 문제를 빠르게 해결해요</Heading>
        <Heading size="4" mt="4">
          토핑즈 행성에서 파티하는 그날까지
        </Heading>
      </Flex>

      <Flex direction="column" align="center" my="8">
        <Kbd size="4">@team toppings</Kbd>
      </Flex>
    </main>
  );
}
