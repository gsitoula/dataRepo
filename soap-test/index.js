  var soap = require('soap');
  var fs = require('fs');
  var url = 'http://acceso.centralpos.com:8096/centralposdebautws.asmx?WSDL';
  //var args = {name: 'value'};
  soap.createClient(url, function(err, client) {
      var json = JSON.stringify(client.describe());
      function callback(err) {
        if (err) return err;
        console.log('archivo generado');
      };
      fs.writeFile('soapMethods.js', json, 'utf8', callback);
  });