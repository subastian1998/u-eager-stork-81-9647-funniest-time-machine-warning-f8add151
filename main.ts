import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: Never meet your past self. He already knows all your passwords, and he is terrible with money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
