/*
 * dev-开发环境配置 
 * alpha-公司环境配置
 * pro-上线环境配置
 */
const ConfigEnv = {
  baseUrl: {
    dev: '',
    alpha: '',
    pro: '',
  },
}
const ProxyEnvironment = variables => {
  let config = {};
  let currentEnv = process.env.VUE_APP_MODE || process.env.NODE_ENV;
  Object.keys(variables).forEach(k => {
    if (
      variables[k] instanceof Object &&
      Object.prototype.hasOwnProperty.call(variables[k], currentEnv)
    ) {
      config[k] = variables[k][currentEnv];
    } else {
      config[k] = variables[k];
    }
  });
  return config;
};
let config = ProxyEnvironment(ConfigEnv)
export default config