enum StorageStore {
  Local = 'local',
  Session = 'session'
}

class QuestionStorage {
  private storage: Storage
  constructor(store: StorageStore) {
    switch (store) {
      case StorageStore.Local:
        this.storage = localStorage
        break
      case StorageStore.Session:
        this.storage = sessionStorage
        break
    }
  }

  set(key: string, value: any) {
    if (typeof value === 'string') {
      this.storage.setItem(key, value)
    }
    this.storage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    return JSON.parse(this.storage.getItem(key) as string) || ''
  }

  remove(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const local = new QuestionStorage(StorageStore.Local)
const session = new QuestionStorage(StorageStore.Session)
export {
  local,
  session
}