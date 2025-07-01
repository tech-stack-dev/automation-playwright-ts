export function getValue<T>(
    value: T | undefined,
    anotherValue: T
): T {
    return value !== undefined ? value : anotherValue;
}