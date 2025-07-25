const { exec } = require('child_process');
const path = require('path');
const fs = require("fs");


 // const command = `git log --pretty=format:"%ad:%s" --date=short`;

try {
  const command = `git log --pretty=format:%ad::%s -10 --date=short`;
  exec(command,(error,stdout,stderr) => {
    if (error) {
      console.log(error.message);
      return;
    }
    if (stderr) {
      console.log(stderr);
      return;
    }
    const rows = stdout.trim().split('\n');
    const json = rows.reduce((acc,item) => {
        const date = item.split('::')[0];
        const message = item.split('::')[1];
        acc.push({
          date:date,
          message:message
        });
        return acc;
    },[]);
    const filepath = path.join(__dirname,"../src/assets/data/news.json");
    const data = {
      data:json
    };
    fs.writeFileSync(filepath,JSON.stringify(data));
    console.log('news.json updated');
  })
  // const args = ['log',`--pretty=format:'{ "date": "%ad", "message": "%s" },'`,'--date=short'];
  // const line = spawn(command,args,{ shell:true});
  // const json = `{ data:[${line}]}`;

} catch (error) {
  console.error('Error writing to file:', error.message);
}
