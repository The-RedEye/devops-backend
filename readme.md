## DevOps Backend  

see db/connection.js for unviersal connection port changes

### API calls
Basic Restful api for DevOps data. Use the following routes to access the correct object types
'./devops/' - project ojbects
'./task/'   - task objects
'./user'    - user objects


### Seed Data
Seed loccated at db/seeds.js

Seeds do not contain delcared object IDs or IDs of associated objects and must be entered after seeding the DB.

### Project Object Schema:
{
  name: String,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  comments: [{
    comment: String,
    author: String,
    targets: [String]
  }]
}

### Task Object Schema:
{
projectID: String,
  dev: String,
  completed: Boolean,
  subtask: Boolean,
  subtaskArr: [],
  masterTask: String,
  name: String,
  description: String,
  dueDate: String,
  comments: [{
    comment: String,
    author: String,
    targets: [String]
  }]
}

### User object Schema
{
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  admin: {type: Boolean, default:false},
  photo: String
}

by tristan tad and mabe