import {breakPoints} from "../hooks/typesHooks.ts";

export default function calculateWidth(len: number, containerWidth: number,
    gap: number = 10,
): number {
    return (containerWidth + gap) / len;
}

export function identifyDevice(
    breackPoints: breakPoints[],
    containerWidth: number,
): breakPoints {
    const values = breackPoints
    const len = values.length;
    let result = values[len - 1];
    let flagBreak = false;

    values.forEach((value, index) => {
        if (flagBreak) {
            return;
        }
        if (index === len - 1) {
            if (value.width > containerWidth) {
                result = values[index];
                return;
            }
        }
        if (value.width >= containerWidth && value.width > values[index + 1].width) {
            return;
        } else result = value;
        flagBreak = true;
    });
    console.log(result)
    return result;
}