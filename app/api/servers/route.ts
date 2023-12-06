import { v4 as uuid } from "uuid";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Not authorized", { status: 401 });
    }

    const server = await db.server.create({
      data: {
        name,
        imageUrl,
        profileId: profile.id,
        inviteCode: uuid(),
        channels: { create: [{ name: "general", profileId: profile.id }] },
        members: {
          create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });

    return NextResponse.json(server);
  } catch (e) {
    console.error("[SERVERS_POST]", e);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
