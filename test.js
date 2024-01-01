function removeFalsyValues(arr) {
  return arr.filter((el) => el);
}
removeFalsyValues([0, false, 'cat', NaN, true, '']);
//  => [ 'cat', true ]
removeFalsyValues([1, 2, 3, 4, 5, 'false']);
//  => [ 1, 2, 3, 4, 5, 'false' ]
removeFalsyValues([false, 0, NaN, '', undefined]);
//  => [ ]
