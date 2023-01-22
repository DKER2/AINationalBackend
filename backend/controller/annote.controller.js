const { spawn } = require("child_process");
const fs = require('fs');
const YAML = require('yaml')
let csvToJson = require('convert-csv-to-json');

const annoteVideo = async (req, res) => {
    await fs.rmSync('../Model/data', { recursive: true, force: true });
    await fs.mkdirSync('../Model/data')

    const file = await fs.readFileSync('../Model/pipeline_config.yml', 'utf8')
    yml = YAML.parse(file)
    yml.nodes[0]['input.visual'].source = 'uploads/' + req.file.filename
    data = YAML.stringify(yml)
    await fs.writeFileSync('../Model/pipeline_config.yml', data)

    const bat = await spawn('cmd.exe', ['/c','run.bat']);
    for await (const data of bat.stdout) {
        console.log(`number of files: ${data}`);
    };

    var files = fs.readdirSync('../Model/data');
    if(files.length==1){
        csvData = fs.readFileSync('../Model/data/' + files[0])        
        let json = csvToJson.fieldDelimiter(',').getJsonFromCsv('../Model/data/' + files[0]);
        res.send(json)
    }
    else{
        res.status(505).send('Backend is frozen, try later')
    }

    
}

module.exports = {
    annoteVideo
}