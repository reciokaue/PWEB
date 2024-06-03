module.exports = function(app)
{
  app.get('/informacao/professores', function(req, res){
    const dbConnection = require('../config/dbConnection')

    async function getProfessores(){
      try {
        const database = await dbConnection();

        const result = await database.request().query(`
          SELECT * FROM PROFESSORES
        `)
        
        console.log(result)
        res.render('informacao/professores', {profs: result.recordset})
        // res.send({profs: result.recordsets})
      }catch(e){
        console.log(e)
      }
    }
    getProfessores()
  });
}
