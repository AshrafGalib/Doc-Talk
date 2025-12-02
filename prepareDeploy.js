// prepareDeploy.js
import { copyFileSync, existsSync } from "fs";

try {
  if (!existsSync("dist/200.html")) {
    copyFileSync("dist/index.html", "dist/200.html");
    console.log("✔ 200.html created successfully.");
  } else {
    console.log("✔ 200.html already exists, skipping copy.");
  }
} catch (err) {
  console.error("❌ Failed to create 200.html:", err);
}
