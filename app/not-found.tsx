import Link from "next/link";

import { Home } from "lucide-react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container>
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        {/* 404 Glow Effect Background */}
        <div className="relative">
          <h1 className="bg-linear-to-b from-gray-300 to-gray-500 bg-clip-text text-[140px] leading-none font-black tracking-tighter text-transparent select-none md:text-[180px] dark:from-gray-300 dark:to-gray-600">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="mt-8 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Lost in Space?
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-4 space-y-6">
          <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-400">
            Oops! The page you are looking for doesn&lsquo;t exist or has been
            moved to another galaxy.
          </p>
          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button asChild>
              <Link href="/">
                <Home size={18} />
                Go Back Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
