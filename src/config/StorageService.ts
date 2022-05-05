class StorageService {
  static set(key: string, data: Object) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string) {
    const data: string | null = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static remove(key: string) {
    return localStorage.removeItem(key);
  }
}

export default StorageService;
