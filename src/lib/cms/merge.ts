export function mergeDefined<T extends object>(base: T, override: Partial<T> | null | undefined): T {
  if (!override) return base
  return { ...base, ...override }
}

export function replaceIfPresent<T>(base: T, override: T | null | undefined): T {
  return override ?? base
}

export function replaceArrayIfNonEmpty<T>(base: T[], override: T[] | null | undefined): T[] {
  if (override && override.length > 0) return override
  return base
}
