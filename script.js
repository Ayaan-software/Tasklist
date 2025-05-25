// The function that creates a task
    function createTask() {
      const taskInput = document.querySelector('#newtask input');
      const taskSection = document.querySelector('.tasks');

      if (taskInput.value.trim().length === 0) {
        alert("The task field is blank. Enter a task name and try again.");
      } else {
        // Insert the new task HTML
        taskSection.innerHTML += `
          <div class="task">
            <label id="taskname">
              <input onclick="updateTask(this)" type="checkbox" id="check-task">
              <p>${taskInput.value}</p>
            </label>
            <div class="delete">
              <i class="uil uil-trash"></i>
            </div>
          </div>
        `;

        // Clear input after adding
        taskInput.value = "";

        // Add delete functionality
        const current_tasks = document.querySelectorAll(".delete");
        current_tasks.forEach(delBtn => {
          delBtn.onclick = function () {
            this.parentNode.remove();
            updateOverflow();
          };
        });

        updateOverflow();
      }
    }

    // Mark task as done or not done
    function updateTask(taskCheckbox) {
      const taskItem = taskCheckbox.parentElement.querySelector("p");
      if (taskCheckbox.checked) {
        taskItem.classList.add("checked");
      } else {
        taskItem.classList.remove("checked");
      }
    }

    // Handles scroll overflow
    function updateOverflow() {
      const taskSection = document.querySelector('.tasks');
      if (taskSection.offsetHeight >= 300) {
        taskSection.classList.add("overflow");
      } else {
        taskSection.classList.remove("overflow");
      }
    }

    // Add task on button click
    document.querySelector("#push").addEventListener("click", createTask);

