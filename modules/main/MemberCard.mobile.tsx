"use client";

import { Avatar, Box, Card, Flex, Popover, Text } from "@radix-ui/themes";
import { 맴버 } from "./맴버들";

type Props = {} & 맴버;

export function MemberCard({ 이름, 소개, 이미지, 컨텐츠 }: Props) {
  return (
    <Card key={이름} mt="4" size="3">
      <Flex gap="3" align="center">
        <Popover.Root>
          <Popover.Trigger>
            <Avatar size="5" src={이미지.src} radius="full" fallback="T" />
          </Popover.Trigger>
          <Popover.Content>{컨텐츠}</Popover.Content>
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
