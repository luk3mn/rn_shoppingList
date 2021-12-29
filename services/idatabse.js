const SQLite = require('expo-sqlite')

var db = null;

export default class Database {
  constructor(databse_name='database,db', initDB=(_)=>{}){
    db = SQLite.openDatabase(databse_name);
    db.exec([{sql: 'PRAGMA foreign_keys = ON', args:[]}], false, ()=>{})
    initDB(this)
  }
  executeQuery(query, seccess=()=>{}, error=(_)=>{}) {
    if (db && db != null) {
      db.transaction(tx => { tx.executeSql(query,[],success,error) })
    } else {
      console.log("Sem conexão com o banco de dados")
    }
  }
}