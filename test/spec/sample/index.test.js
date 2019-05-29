import { common } from '../../../src/sample/index';

describe('common', function () {
  it('common HelloWorld', function () {
    const a = common.HelloWorld;
    expect(a).to.be('HelloWorld');
  });
});
