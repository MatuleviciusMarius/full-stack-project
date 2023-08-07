import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import { Card as CardMantine, Text, Image, Group } from "@mantine/core";

export default function Card({ title, text, link, photo }) {
  return (
    <CardMantine className={styles.card} shadow="sm" padding="lg" radius="md" withBorder>
      {photo && <Image src={photo} height={"100%"} />}
      {title && (
        <Group position="apart" mt="md" mb="xs">
          <Text weight={600}>{title}</Text>
        </Group>
      )}

      {text && <Text ta={"justify"}>{text}</Text>}
      {link && (
        <Link className={styles.link} href={link}>
          Daugiau
        </Link>
      )}
    </CardMantine>
  );
}
