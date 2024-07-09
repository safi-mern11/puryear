import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  draftMode().enable();
  redirect(`/${slug}?${searchParams.toString()}`);
};