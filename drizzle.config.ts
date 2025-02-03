import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.tsx",
  dbCredentials:{
    url:'postgresql://ai-kids-story-builder_owner:npg_uRSt21iTwQLp@ep-late-flower-a85yon2x-pooler.eastus2.azure.neon.tech/ai-kids-story-builder?sslmode=req',
  },
  verbose:true,
  strict:true,
//   out: "./drizzle",
});