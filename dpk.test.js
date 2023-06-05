const {  deterministicPartitionKey } = require("./dpk");
const {MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY} = require('./constants')

const testEvent = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

const testEventWithPartitionKey = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  partitionKey: "9dc1328e-03ce-11ee-be56-0242ac120002"
}

describe("deterministicPartitionKey", () => {
  it("Returns the trivial partition key when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Returns a non zero value when input is given that doesn't have a partitionKey", () => {
    const trivialKey = deterministicPartitionKey(testEvent);
    expect(trivialKey).not.toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Returns a key with valid length", () => {
    const trivialKey = deterministicPartitionKey(testEvent);
    expect(trivialKey.length).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
  });

  it("Returns partitionKey when event has partitionKey", () => {
    const trivialKey = deterministicPartitionKey(testEventWithPartitionKey);
    expect(trivialKey).toBe(testEventWithPartitionKey.partitionKey);
  })
});
