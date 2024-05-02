import mysql from 'mysql2/promise'

export async function handler(req, res, db, table, columnArr) {
  const dbconn = await mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    database: db,
    port: 3306,
    user: 'sql6701922',
    password: 'fqZaNH4Mj4',
  })

  try {
    const query = `Select ${columnArr.join(', ')} from ${table}`
    const values = []
    const [data] = await dbconn.execute(query, values)

    dbconn.end()
    
    res.status(200).json({results: data})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}