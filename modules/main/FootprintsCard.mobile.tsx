"use client";

import { Avatar, Box, Card, Flex, Popover, Text } from "@radix-ui/themes";
import { 발자취 } from "./발자취들";

type Props = {} & 발자취;

export function FootprintsCard({ 이름, 소개, 이미지 }: Props) {
  return (
    <Card key={이름} mt="4" size="3">
      <Flex gap="3" align="center">
        <Popover.Root>
          <Popover.Trigger>
            <Avatar size="5" src={이미지.src} radius="full" fallback="T" />
          </Popover.Trigger>
          <Popover.Content>우리의 추억</Popover.Content>
        </Popover.Root>
        <Box ml="2">
          <Text as="div" size="5" weight="bold">
            {이름}
          </Text>
          <Text as="div" size="4" color="gray">
            {소개}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
