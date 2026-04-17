/**
 * Shared parser/serializer for semicolon-delimited field values.
 */
export function parseMultiValueFieldValue(value: unknown): string[] {
    if (typeof value !== "string") {
        return [];
    }

    return value
        .split(";")
        .map((item) => item.trim())
        .filter((item) => !!item);
}

export function serializeMultiValueFieldValue(values: string[]): string {
    return values
        .map((value) => value.trim())
        .filter((value) => !!value)
        .join(";");
}

/**
 * Allowed-values picklists validate the entire stored field value.
 * Joining multiple values with ';' creates a single combined value that
 * will not exist in a single-select allowed-values list.
 */
export function isAllowedValueCompatible(values: string[]): boolean {
    return values.length <= 1;
}
