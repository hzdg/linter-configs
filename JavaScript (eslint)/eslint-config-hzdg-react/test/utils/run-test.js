import assert from 'power-assert';

export default function runTest(availableRules, definedRules) {
  return makeAssertions(compareRules(availableRules, definedRules));
}

function compareRules(availableRules, definedRules) {

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

  it('should not be missing rules', done => {
    assert(missingRules.length === 0, `Missing Rule(s): ${missingRules}`);
    done();
  });

  it('should not have extra rules', done => {
    assert(extraRules.length === 0, `Extra Rule(s): ${extraRules}`);
    done();
  });

}
