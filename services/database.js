import LDatabase from './idatabse'

export default class Database {
  constructor() {
    this.table_name = 'items'
    this.db = new LDatabase('Itemsdata.db',(db) => {
      db.executeQuery(`
      CREATE TABLE IF NOT EXISTS ${this.table_name}(
        id integer primary key autoincrement,
        item text
      );`,
      () => {}, (error) => {console.log('error')})
      console.log("Banco de dados iniciado")
    })
  }
  loadItems() {
    return new Promise(resolve => {
      this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
        resolve(res.rows._array)
      }, (e) => console.log(e))
    })
  }

  // addNewAnuncio(){
  //   return new Promise(resolve => {
  //     if (ite)
  //   })
  // }
}