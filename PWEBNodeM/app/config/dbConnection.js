module.exports = async () => {
  const sql = require('mssql')

  const sqlConfig = {
    user: 'BD2221030',
    password: 'Senha123',
    database: 'BD',
    server: 'apolo',
    options: {
        encrypt: false, 
        trustServerCertificate: true // se você não tiver um certificado de servidor configurado
    }
  }
  const pool = await sql.connect(sqlConfig)

  return pool
}
