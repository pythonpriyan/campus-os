const STORAGE_PREFIX = "campus-os:";

export function saveData<T>(key: string, data: T): void {
  localStorage.setItem(
    `${STORAGE_PREFIX}${key}`,
    JSON.stringify(data),
  );
}

export function loadData<T>(key: string, fallback: T): T {
  const storedData = localStorage.getItem(
    `${STORAGE_PREFIX}${key}`,
  );

  if (!storedData) {
    return fallback;
  }

  try {
    return JSON.parse(storedData) as T;
  } catch {
    return fallback;
  }
}

export function removeData(key: string): void {
  localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
}

export function clearAllData(): void {
  const keysToRemove: string[] = [];

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);

    if (key?.startsWith(STORAGE_PREFIX)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });
}