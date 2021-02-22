import React from "react";


const SCRIPT_ID:string = 'tradingview-widget-script';
const CONTAINER_ID:string = 'tradingview-widget';

export default class TradingViewRaw extends React.Component {

    TradingView: any;
    containerId:string = `${CONTAINER_ID}-${Math.random()}`;
    
    getStyle = () => {
        return {
          width: '100%',
          height: '100%'
        };
      };

    scriptLoaded = () => {
        
        const scriptWidget:any = document.createElement('script');
        scriptWidget.type = 'text/javascript';
        const json: any = JSON.stringify({
            "width": 980,
            "height": 610,
            "symbol": "BITSTAMP:ETHUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "es",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": true,
            "allow_symbol_change": true
        });;
        
        scriptWidget.innerHTML = "new TradingView.widget("+ json +")";
        
        const divContainer:HTMLElement | any = document.getElementById(this.containerId);
        divContainer.appendChild(scriptWidget);
    }

    componentDidMount = () => {
        
        //const json: any = JSON.stringify({"symbol": "NASDAQ:AAPL"});
        const json: any = JSON.stringify({});
    
        const scriptTv:any = document.createElement('script');
        scriptTv.id = SCRIPT_ID;
        scriptTv.type = 'text/javascript';
        scriptTv.async = true;
        scriptTv.src = 'https://s3.tradingview.com/tv.js';
        scriptTv.onload = () => this.scriptLoaded();
        
        const head:HTMLElement | any = document.getElementsByTagName('head')[0];
        head.appendChild(scriptTv);
            
    };


	render = () => {
        return(
            <div id={this.containerId} style={this.getStyle()}>
                My Chart
            </div>
        );
    };
}
