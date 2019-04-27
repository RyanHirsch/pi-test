module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
    },
  ],
  deploy: {
    production: {
      user: "pi",
      host: ["192.168.0.138"],
      ref: "origin/master",
      repo: "git@github.com:RyanHirsch/pi-test.git",
      path: "/app",
      "post-deploy": "yarn install",
    },
  },
};
