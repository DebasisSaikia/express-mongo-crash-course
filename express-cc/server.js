const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000 || process.env.PORT;

// set middleware
app.use(express.static('public'));


// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/about.html");
// });

app.get('/download',(req,res)=>{
  res.download(path.resolve(__dirname) + '/download.html');
})

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
