var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const PORT = process.env.PORT || 3030;

var xlsx=require('xlsx');
let wb=xlsx.readFile('students.xlsx');
let ws=wb.Sheets["Sheet1"];
let data=xlsx.utils.sheet_to_json(ws);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get('/students', function (req, res) {
  res.json(data)
});
 
