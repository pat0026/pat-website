import type { NextConfig } from "next";
import { basePath } from "@/lib/constants";

const nextConfig: NextConfig = {
  /* config options here */
  basePath,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
