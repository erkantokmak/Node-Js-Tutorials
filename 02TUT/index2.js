 const fs = require('fs');

 fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data)=> {
     if (err) throw err;
     console.log(data);
 })

//  CallBack Hell ( dont do it)

 console.log("Hello...")

 fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err)=> {
     if (err) throw err;
     console.log('Write complete');

     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Yes it is.', (err)=> {
         if (err) throw err;
         console.log('Append complete');

         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err)=> {
             if (err) throw err;
             console.log('Rename complete');
         })
     })
    
 })


/* OR */ 

 fs.readFile('./files/starter.txt', (err, data)=> {
     if (err) throw err;
     console.log(data.toString());
 })

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})