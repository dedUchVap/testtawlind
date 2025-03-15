export default function calculateWidth(len: number, containerWidth: number,
    gap: number = 10,
): number {
    return (containerWidth - len * gap) / len;
}

export function identifyDevice(
    resolutions: { [key: string]: number },
    containerWidth: number,
): number {
    const values = Object.values(resolutions);
    const len = values.length;
    let result = values[len - 1];
    let flagBreak = false;

    values.forEach((value, index) => {
        if (flagBreak) {
            return;
        }
        if (index === len - 1) {
            if (value > containerWidth) {
                result = values[index];
                return;
            }
        }
        if (value >= containerWidth && value > values[index + 1]) {
            return;
        } else result = value;
        flagBreak = true;
    });
    return result;
}