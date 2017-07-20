/*require("babel-register")({
	presets:["react"]
});
*/
import express      from 'express';
let app = express();
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString }        from 'react-dom/server'

import App from './Components/App';


app.use(express.static("js"))
app.use(express.static("public"))

const PORT = process.env.PORT || 3300;

app.listen(PORT, function(err){
	if(!err) { console.log(`Sever is up at ${PORT}`); }
	else { console.log("Error : ", err); }
});

app.get('/demo', function(request, response){
	function renderView() {
      console.log("renderView called");
      
      const InitialView = (
        <App />
      );

      const componentHTML = renderToString(InitialView);

      const HTML = `
      <!DOCTYPE html>
        <head>
          <meta charset="utf-8">
          <title>React basic App</title>
		</head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
      `;
      response.end(HTML)
    }
     renderView()
});

//<script type="application/javascript" src="/bundle.js"></script>


