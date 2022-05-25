import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { postUserInfo, deleteUserInfo } from "./src/Pages/LoginNetworking.js";

Deno.test("Creating an account creates an account", async () => {
  assertEquals(await postUserInfo("xyz", "hello1234", "users"), {
    response: "Success",
  });
  await deleteUserInfo("xyz", "users");
});

Deno.test("Logging in logs an existing user in", async () => {
  assertEquals(await postUserInfo("ellie", "123", "sessions"), {
    response: "Success",
  });
});
