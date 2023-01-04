var http = require('http')
var fs = require('fs')
var formidable = require('formidable')

http.createServer(function(req,res) 
{
    if(req.url=="/")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fapp" method="post">');
        res.write(`<h1> SELECT TWO FILES </h1>`);
        res.write(`<h3> FILE 1 </h3>`);
        res.write(`<input type="file" name="rf"><br>`);
        res.write(`<h3> FILE 2 </h3>`);
        res.write(`<input type="file" name="wf"><br>`);
        res.write(`<br><input type="submit"><br>`);
        res.end();
    }
    else if(req.url=='/fapp')
    {
        var form = new formidable.IncomingForm()
            
        form.parse(req,function(err,fields,files)
        {
            if(!err)
            {
                var w = fs.createWriteStream(fields.wf,{flags:"a"})
                var r = fs.createReadStream(fields.rf)

                w.on('close',function(){
                    console.log("writing done....")
                })

                r.pipe(w)
                res.write(fields.rf)
                res.end()
            }
            else{
                res.write("error in writing")
            }
        })
    }
    else
    {
        res.end("page not found")
    }
}).listen(8080);