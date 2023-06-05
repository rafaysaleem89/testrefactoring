const { MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY } = require('./constants')
const { generateKey } = require('./helpers')

exports.deterministicPartitionKey = (event) => {
  let candidate = event?.partitionKey || generateKey(event) || TRIVIAL_PARTITION_KEY;

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = generateKey(candidate);
  }
  return candidate;
};