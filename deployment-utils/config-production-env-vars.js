const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const targetPath = './src/environments/environment.ts';
  
  require('dotenv').config({
    //path: 'src/environments/.env'
  });
  
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
    apiUrl: '${process.env['API_URL']}',
    production: true,
  };
  `;


  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
}

setEnv();
