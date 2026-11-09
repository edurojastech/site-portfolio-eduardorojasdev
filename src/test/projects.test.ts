import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";

describe("Recent portfolio projects", () => {
  it("places the two supplied projects before the previous projects", () => {
    expect(projects.slice(0, 3).map((project) => project.live)).toEqual([
      "https://portal-do-convidado.decodingp.com/",
      "https://decoding-assessment-ia.replit.app/admin/login",
      "https://atendimento-com-ia.netlify.app/",
    ]);
  });
});