export default function removePluginName(pluginRules) {
  const rules = {};
  for (const key in pluginRules) {
    rules[key.split('/')[1]] = pluginRules[key];
  }
  return rules;
}
