import React, { Component } from 'react';
import powerbi from "../node_modules/powerbi-client/dist/powerbi.min.js";

class App extends Component {
  render() {
    return (
      <div className="App">
              Titulo de Cargando prueba PowerBi...
          <div id="reportContainer">
              Cargando prueba PowerBi...
          </div>
          {custompowerbi()}
        <hr/>
      </div>

    )
  }

}

function custompowerbi() {
        var embedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiIwLjIuMCIsImF1ZCI6Imh0dHBzOi8vYW5hbHlzaXMud2luZG93cy5uZXQvcG93ZXJiaS9hcGkiLCJpc3MiOiJQb3dlciBCSSBOb2RlIFNESyIsIndjbiI6InBiaWVqc3NhbXBsZSIsIndpZCI6ImQ2NmQ4ZTQyLWI5MmEtNDU3Ni05MDcyLWZiYWFmYjg3MmFlNyIsInJpZCI6IjQ5NjRhOTQ3LTg1N2YtNGMxNC05MTRkLWM2NmUxYzU3MTNjZCIsIm5iZiI6MTQ4MzQ4NTYzNywiZXhwIjoxNDgzNDg5MjM3fQ._2ziDo37r_9LqSBvur-azWjOlVmXAznd6NROWdjejfY';
        var reportId = '4964a947-857f-4c14-914d-c66e1c5713cd';
        var embedUrl = 'https://embedded.powerbi.com/appTokenReportEmbed?reportId=' + reportId;
        var config = {
            type: 'report',
            accessToken: embedToken,
            embedUrl: embedUrl,
            id: reportId,
            settings: {
                filterPaneEnabled: false,
                navContentPaneEnabled: false
            }
        };
        // console.log("corrio la funcion power bi")
        powerbi.embed(document.getElementById('reportContainer'), config);
        
    }
  
  export default App;
