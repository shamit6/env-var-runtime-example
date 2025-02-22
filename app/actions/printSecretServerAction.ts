'use server'

import { getOrThrow } from "@/utils/getOrThrow";

const secret = getOrThrow("my-secret-env-var");

export async function printSecretServerAction() {
  console.log(secret);
  return {
    success: true,
  };
}
