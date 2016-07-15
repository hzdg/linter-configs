export default function rulesTest(availableRules, definedRules) {
  return makeAssertions(compareRules(availableRules, definedRules));
}

export function compareRules(availableRules, definedRules) {

  const missingRules = [];
  for (const rule in availableRules) {
    if (!{}.hasOwnProperty.call(definedRules, rule)) missingRules.push(rule);
  }

  const extraRules = [];
  for (const rule in definedRules) {
    if (!{}.hasOwnProperty.call(availableRules, rule)) extraRules.push(rule);
  }

  return {missingRules, extraRules};
}

function makeAssertions({missingRules, extraRules}) {
  return t => {
    t.is(missingRules.length, 0, `Missing Rule(s): ${missingRules}`);
    t.is(extraRules.length, 0, `Extra Rule(s): ${extraRules}`);
  };
}

export function removePluginName(pluginRules) {
  const rules = {};
  for (const key in pluginRules) rules[key.split('/')[1]] = pluginRules[key];
  return rules;
}
