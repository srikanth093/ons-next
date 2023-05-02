import { defineConfig } from "cypress";
import React from "react";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    // devServer(cypressConfig){
    //   return{
    //     port: 3000,
    //     close:()=>{}
    //   }
    // }
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
