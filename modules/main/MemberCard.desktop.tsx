"use client";

import { Avatar, Box, Card, Flex, HoverCard, Text } from "@radix-ui/themes";
import { 맴버 } from "./맴버들";

type Props = {} & 맴버;

export function MemberCard({ 이름, 소개, 이미지, 컨텐츠 }: Props) {
  return (
    <Card key={이름} mt="4" size="5">
      <Flex gap="3" align="center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Avatar size="8" src={이미지.src} radius="full" fallback="T" />
          </HoverCard.Trigger>
          <HoverCard.Content size="3">{컨텐츠}</HoverCard.Content>
        </HoverCard.Root>
        <Box ml="8">
          <Text as="div" size="8" weight="bold">
            {이름}
          </Text>
          <Text as="div" size="7" color="gray" mt="4">
            {소개}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
