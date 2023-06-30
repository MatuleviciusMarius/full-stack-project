import React from 'react';
import { Box } from '@mantine/core';
import { useRouter } from 'next/router';

export default function LinkToModule({ moduleId }) {
  const router = useRouter();

  function handleClick() {
    router.push(`/dashboard/moduleView/${moduleId}`);
  }

  return (
    <Box
      onClick={handleClick}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
        width: '70%',
        margin: '1rem auto',

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}>
      Modulis {moduleId}
    </Box>
  );
}
