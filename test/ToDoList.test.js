const TodoList = artifacts.require("./TodoList.sol");

contract("TodoList", accounts => {
  const creatorAddress = accounts[0];
  const firstOwnerAddress = accounts[1];
  const secondOwnerAddress = accounts[2];
  const externalAddress = accounts[3];
  const unprivilegedAddress = accounts[4]
  /* create named accounts for contract roles */

  before(async () => {
    this.todoList = await TodoList.deployed();
  });

  it('should deploy successfully', async () => {
    assert.notEqual(creatorAddress, 0x0);
    assert.notEqual(creatorAddress, '');
    assert.notEqual(creatorAddress, null);
    assert.notEqual(creatorAddress, undefined);
  });

  it('should revert if ...', async () => {
    try {
      const result = this.todoList.publicOrExternalContractMethod(argument1, argument2, { from: externalAddress });
      assert.fail();
    } catch (error) {
      assert.notEqual(error.message, "assert.fail()", "Reason ...");
    }
  });

  it('should lists tasks', async () => {
    const taskCount = await this.todoList.taskCount();
    const task = await this.todoList.tasks(taskCount);

    assert.equal(task.id.toNumber(), taskCount.toNumber());
    assert.equal(task.completed, false);
    assert.equal(taskCount.toNumber(), 0);
  });

});
