import * as dotenv from "dotenv";
import * as path from "path";
let envFile;
switch (process.env.NODE_ENV) {
  case "production": {
    envFile = ".env.prod.env";
    break;
  }
  case "development": {
    envFile = ".env.dev.env";
    break;
  }
  case "test": {
    envFile = ".env.test.env";
    break;
  }
  default: {
    envFile = ".env";
  }
}
let envPath = path.join(process.cwd(), envFile);
console.log("env-path: " + envPath);
dotenv.config({ path: envPath });
