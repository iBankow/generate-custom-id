import { idGenerator } from "../src/index";

test("Generate a simple hash", () => {
  const newId = idGenerator("simple");
  expect(newId).toMatch(/[0-9]{2}/);
});
test("Generate a hash with simple prefix", () => {
  const newId = idGenerator("simple", undefined, { prefix: "pre" });
  expect(newId).toMatch(/pre[0-9]{2}/);
});
test("Generate a hash with simple sufix", () => {
  const newId = idGenerator("simple", undefined, { sufix: "sux" });
  expect(newId).toMatch(/[0-9]{2}[A-z|0-9]{8}sux/);
});
test("Generate a hash with 4 random lenght", () => {
  const newId = idGenerator("simple", 4);
  expect(newId).toMatch(/[0-9]{4}/);
});
test("Generate a hash with prefix trace", () => {
  const newId = idGenerator("simple", 4, { prefix: "pre", trace: true });
  expect(newId).toMatch(/pre-[0-9]{4}/);
});
