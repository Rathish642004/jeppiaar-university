// This is a simple script to check for common deployment issues
// Run with: npx ts-node scripts/deployment-check.ts

import fs from "fs"
import { execSync } from "child_process"

console.log("🔍 Starting deployment troubleshooting...")

// Check if package.json exists
console.log("\n📦 Checking package.json...")
if (fs.existsSync("./package.json")) {
  console.log("✅ package.json exists")

  // Check if build script exists
  const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"))
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log("✅ build script exists")
  } else {
    console.log("❌ build script is missing in package.json")
  }
} else {
  console.log("❌ package.json is missing")
}

// Check if next.config.js exists
console.log("\n🔧 Checking next.config.js...")
if (fs.existsSync("./next.config.js")) {
  console.log("✅ next.config.js exists")
} else {
  console.log("❌ next.config.js is missing")
}

// Check for TypeScript errors
console.log("\n📝 Checking for TypeScript errors...")
try {
  execSync("npx tsc --noEmit", { stdio: "pipe" })
  console.log("✅ No TypeScript errors found")
} catch (error) {
  console.log('❌ TypeScript errors found. Run "npx tsc --noEmit" for details')
}

// Check for .env files
console.log("\n🔐 Checking for environment variables...")
if (fs.existsSync("./.env.local") || fs.existsSync("./.env")) {
  console.log("✅ Environment file exists")
} else {
  console.log("⚠️ No .env files found. This might be fine if you're not using environment variables")
}

// Check for build errors
console.log("\n🏗️ Checking if the project can build...")
try {
  console.log("This might take a moment...")
  execSync("npm run build", { stdio: "pipe" })
  console.log("✅ Project builds successfully")
} catch (error) {
  console.log('❌ Build failed. Run "npm run build" for details')
}

console.log("\n🔍 Deployment troubleshooting complete!")
console.log("\nIf all checks passed but you still can't deploy, check:")
console.log("1. Vercel account permissions and settings")
console.log("2. Network connectivity issues")
console.log("3. Resource limitations on your deployment platform")
console.log("4. Deployment logs on your platform for specific errors")

