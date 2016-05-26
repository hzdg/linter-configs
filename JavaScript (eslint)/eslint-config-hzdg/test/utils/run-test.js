import assert from 'power-assert';

export default function runTest(availableRules, definedRules) {
  return makeAssertions(compareRules(availableRules, definedRules));
}

function compareRules(availableRules, definedRules) {

  const missingRules = [];
  for (const rule in availableRules) {
    if (!definedRules.hasOwnProperty(rule)) missingRules.push(rule);
  }

  const extraRules = [];
  for (const rule in definedRules) {
    if (!availableRules.hasOwnProperty(rule)) extraRules.push(rule);
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
