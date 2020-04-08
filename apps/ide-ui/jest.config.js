module.exports = {
  name: 'ide-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ide-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
