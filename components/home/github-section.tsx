"use client";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

import { useTheme } from "next-themes";

import { Separator } from "../ui/separator";

//Github Username
const GITHUB_USER_NAME = "koradiyamilan12";

const GithubActivity = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="mx-auto mt-8 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">
          GitHub Activity
        </h1>
      </div>

      <div className="bg-background py-2">
        <GitHubCalendar
          username="koradiyamilan12"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={3.9}
          blockRadius={0}
          fontSize={14}
          labels={{
            totalCount: `{{count}} contributions since 2025`,
          }}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
