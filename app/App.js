/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { generator, pickGeoPoints } from "./generator";

import MapView, {
  Polyline,
  Circle,
  Marker,
  PROVIDER_GOOGLE
} from "react-native-maps";

const { width, height } = Dimensions.get("window");

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const mapStyle = [
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    stylers: [
      {
        hue: "#00aaff"
      },
      {
        saturation: -100
      },
      {
        gamma: 2.15
      },
      {
        lightness: 12
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 24
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 57
      }
    ]
  }
];

const array = [];
const result = [];
const markers = undefined;
export default class App extends Component<Props> {
  // array = generator();
  // console.log("logging array" +array)
  // result = pickGeoPoints(array);
  // markers = result.map((marker, i) => {
  //   const val = marker.split(",");
  //   alert(val[0]);
  //   <Marker
  //     key={i}
  //     pinColor="#6B6813"
  //     coordinate={{
  //       latitude: Number(val[0]),
  //       longitude: Number(val[1])
  //     }}
  //   />;
  // });
  render() {
    array = generator();
    // result = pickGeoPoints(array);
    console.log(array, "logging");
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <MapView
          initialRegion={{
            latitude: 24.908895,
            longitude: 67.090807,
            latitudeDelta: 0.0059397161733585335,
            longitudeDelta: 0.005845874547958374
          }}
          // renderMarker={markers}
          style={StyleSheet.absoluteFillObject}
          loadingEnabled
          showsBuildings
          showsUserLocation
          loadingIndicatorColor="blue"
          showsCompass
          provider={PROVIDER_GOOGLE}
          minZoomLevel={5}
          customMapStyle={mapStyle}
          ref={ref => {
            this.map = ref;
          }}
          moveOnMarkerPress={false}
          rotateEnabled={true}
          onRegionChange={region => console.log(region)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
