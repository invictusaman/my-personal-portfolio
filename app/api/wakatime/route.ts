import { unstable_noStore as noStore } from "next/cache";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async () => {
  noStore();

  const res = await fetch(
    "https://wakatime.com/api/v1/users/current/all_time_since_today",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.WAKATIME_API_KEY || ""
        ).toString("base64")}`,
      },
    }
  );

  const {
    data: { total_seconds },
  } = await res.json();

  return NextResponse.json({
    seconds: total_seconds,
  });
};
