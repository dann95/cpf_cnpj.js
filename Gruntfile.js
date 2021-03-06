module.exports = function(grunt) {
  var config = {};
  var tasks = [
    "grunt-contrib-concat",
    "grunt-contrib-uglify",
    "grunt-contrib-copy",
    "gruntify-eslint"
  ];

  // ==========================================================

  config.eslint = {};

  config.eslint.dist = {
    options: {configFile: ".eslintrc"},

    files: {
      src: ["lib/**/*.js", "spec/**/*.js"]
    }
  };

  // ==========================================================

  config.copy = {};

  config.copy.all = {
    files: [
      {src: "lib/cnpj.js", dest: "build/cnpj.js"},
      {src: "lib/cpf.js", dest: "build/cpf.js"}
    ]
  };

  // ==========================================================

  config.concat = {};

  config.concat.bundle = {
    src: ["lib/cpf.js", "lib/cnpj.js"],
    dest: "build/cpf_cnpj.js"
  };

  // ==========================================================

  config.uglify = {};

  config.uglify.cnpj = {
    src: "build/cnpj.js",
    dest: "build/cnpj.min.js"
  };

  config.uglify.cpf = {
    src: "build/cpf.js",
    dest: "build/cpf.min.js"
  };

  config.uglify.cpf_cnpj = {
    src: "build/cpf_cnpj.js",
    dest: "build/cpf_cnpj.min.js"
  };

  // ==========================================================

  grunt.initConfig(config);
  tasks.forEach(grunt.loadNpmTasks);
  grunt.registerTask("default", ["eslint", "concat", "copy", "uglify"]);
};
