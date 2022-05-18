//! Це патерн проектування, призначений до створення об'єкта. 
//! Конструктором називається функція, що створює нові об'єкти

class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:80`
  }
}

const aws = new Server('AWS German', '82.21.21.32')
const arnb = new Server('ARNB GB', '182.211.241.12')
console.log(aws.getUrl())
console.log(arnb.getUrl())
