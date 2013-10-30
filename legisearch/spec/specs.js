describe ('TaskList', function() {
  describe('addTask', function() {
    it("receives a string and adds it to an array of tasks", function() {
      var taskList = Object.create(TaskList); 
      taskList.addTask("first task");
      taskList.tasks[0].should.equal("first task");
    });
  });

  describe('setListName', function() {
    it("receives a string and sets it to the name of the list", function() {
      var taskList = Object.create(TaskList); 
      taskList.setListName("first list");
      taskList.listName.should.equal("first list");
    });
  });
});