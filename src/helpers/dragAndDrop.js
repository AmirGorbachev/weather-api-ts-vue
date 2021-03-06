export default function dragAndDrop(classList, classItem) {
  const tasksListElement = document.querySelector(`.${classList}`);
  const taskElements = tasksListElement.querySelectorAll(`.${classItem}`);

  for (const task of taskElements) {
    task.draggable = true;
  }

  tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  });

  tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });

  const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter =
      currentElementCoord.y + currentElementCoord.height / 2;

    const nextElement =
      cursorPosition < currentElementCenter
        ? currentElement
        : currentElement.nextElementSibling;

    return nextElement;
  };

  tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();

    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains(classItem);

    if (!isMoveable) {
      return;
    }

    const nextElement = getNextElement(evt.clientY, currentElement);

    if (
      (nextElement && activeElement === nextElement.previousElementSibling) ||
      activeElement === nextElement
    ) {
      return;
    }

    tasksListElement.insertBefore(activeElement, nextElement);
  });
}
