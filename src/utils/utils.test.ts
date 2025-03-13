import { describe, test, expect } from "@jest/globals";
import {identifyDevice} from "./common.ts";


describe("identifyDevice", () => {
    test("Должно правильно возвращать текущее разрешение", () => {
        expect(identifyDevice({desktop: 1024, middle: 790, mobile: 768}, 890)).toBe(790);
        expect(identifyDevice({desktop: 1024, middle: 790, mobile: 768}, 1920)).toBe(1024);
        expect(identifyDevice({desktop: 1024, middle: 790, mobile: 768}, 360)).toBe(768)
    });
});