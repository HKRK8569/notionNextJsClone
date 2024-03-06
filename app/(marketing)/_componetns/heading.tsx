"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3x; sm:text-5xl md:text-6xl font-bold">
        あなたの仕事を、AIでつなぐ。
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        ドキュメントの作成、ナレッジの整理、プロジェクトの管理を、ひとつのワークスペースで行うことができます。
      </h3>
      <Link href="/documents">
        <Button>
          Notionを無料で入手
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
};
