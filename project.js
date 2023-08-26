document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const chatMessages = document.getElementById('chat-messages');
    const assigneeInput = document.getElementById('assignee-input');
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const fileInput = document.getElementById('file-input');
    const sendFileBtn = document.getElementById('send-file-btn');
  
    function addTask(assignee, task) {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task');
      taskItem.innerHTML = `<strong>${assignee}:</strong> ${task}`;
      taskList.appendChild(taskItem);
    }
  
    function addChatMessage(message) {
      const chatMessage = document.createElement('div');
      chatMessage.classList.add('message');
      chatMessage.textContent = message;
      chatMessages.appendChild(chatMessage);
    }
  
    function handleFileUpload(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(e) {
          const fileData = e.target.result;
          // Simulate file transfer to other user
          simulateFileTransfer(file.name, fileData);
        };
        reader.readAsDataURL(file);
      }
    }
  
    
    function simulateFileTransfer(filename, filedata) {
      const fileLink = `<a href="${filedata}" target="_blank">${filename}</a>`;
      addChatMessage(`File sent: ${fileLink}`);
    }
  
    
    addTaskBtn.addEventListener('click', function() {
      const assignee = assigneeInput.value.trim();
      const task = taskInput.value.trim();
      if (assignee !== '' && task !== '') {
        addTask(assignee, task);
        assigneeInput.value = '';
        taskInput.value = '';
      }
    });
  
    sendBtn.addEventListener('click', function() {
      const message = messageInput.value.trim();
      if (message !== '') {
        addChatMessage(message);
        messageInput.value = '';
      }
    });
  
    sendFileBtn.addEventListener('click', function() {
      const files = fileInput.files;
      if (files.length > 0) {
        handleFileUpload(files);
        fileInput.value = ''; // Clear the file input
      }
    });
    addTask('User A', 'Task 1');
    addTask('User B', 'Task 2');
    addChatMessage('User A: Hello!');
    addChatMessage('User B: Hi there!');
  });