import { convert } from 'jcampconverter';

import { fromJSON } from '..';

test('xxyyArray test', () => {
  const data = [
    [1, 2],
    [2, 3],
  ];
  const jcamp = fromJSON(data);

  let converted = JSON.parse(JSON.stringify(convert(jcamp)));

  expect(converted.spectra).toStrictEqual([
    {
      data: [[1, 2, 2, 3]],
      dataType: '',
      firstX: 1,
      firstY: 2,
      isPeaktable: true,
      lastX: 2,
      lastY: 3,
      nbPoints: 2,
      title: '',
      xFactor: 1,
      xUnit: '',
      yFactor: 1,
      yUnit: '',
    },
  ]);
});

test('xxyyArray test with 0', () => {
  const data = [
    [0, 1],
    [1, 2],
  ];
  const jcamp = fromJSON(data);

  let converted = JSON.parse(JSON.stringify(convert(jcamp)));

  expect(converted.spectra).toStrictEqual([
    {
      data: [[0, 1, 1, 2]],
      dataType: '',
      firstX: 0,
      firstY: 1,
      isPeaktable: true,
      lastX: 1,
      lastY: 2,
      nbPoints: 2,
      title: '',
      xFactor: 1,
      xUnit: '',
      yFactor: 1,
      yUnit: '',
    },
  ]);
});

test('xxyyObject test', () => {
  const data = { x: [1, 2], y: [2, 3] };
  const jcamp = fromJSON(data);

  let converted = JSON.parse(JSON.stringify(convert(jcamp)));

  expect(converted.spectra).toStrictEqual([
    {
      data: [[1, 2, 2, 3]],
      dataType: '',
      firstX: 1,
      firstY: 2,
      isPeaktable: true,
      lastX: 2,
      lastY: 3,
      nbPoints: 2,
      title: '',
      xFactor: 1,
      xUnit: '',
      yFactor: 1,
      yUnit: '',
    },
  ]);
});