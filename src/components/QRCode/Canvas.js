"use strict";

var React = require("react");
var PropTypes = require("prop-types");
var createReactClass = require("create-react-class");

var { View, Platform } = require("react-native");
import { WebView } from "react-native-webview";

var Canvas = createReactClass({
  propTypes: {
    style: PropTypes.object,
    context: PropTypes.object,
    render: PropTypes.func.isRequired,
    onLoad: PropTypes.func,
    onLoadEnd: PropTypes.func
  },

  render() {
    var contextString = JSON.stringify(this.props.context);
    var renderString = this.props.render.toString();
    return (
      <View style={this.props.style}>
        <WebView
          source={{
            html:
              "<style>*{margin:0;padding:0;}canvas{transform:translateZ(0);}</style><canvas></canvas><script>var canvas = document.querySelector('canvas');(" +
              renderString +
              ").call(" +
              contextString +
              ", canvas);</script>"
          }}
          injectedJavaScript={`
            const meta = document.createElement('meta');
            let initialScale = 1;
            const content = 'width=device-width, initial-scale=' + initialScale ;
            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', content);
            document.getElementsByTagName('head')[0].appendChild(meta);
        `}
          automaticallyAdjustContentInsets={false}
          scrollEnabled={false}
          scalesPageToFit={false}
          contentInset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          opaque={false}
          underlayColor={"transparent"}
          style={this.props.style}
          javaScriptEnabled={true}
          onLoad={this.props.onLoad}
          onLoadEnd={this.props.onLoadEnd}
          originWhitelist={["*"]}
        />
      </View>
    );
  }
});

module.exports = Canvas;
