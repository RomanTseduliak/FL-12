const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

let idCounter = 0;

const rootNode = document.getElementById('root');

(function loadView(structure, node) {
  for (let i = 0; i < structure.length; i++) {
    if (structure[i].folder) {
      let currentNode = createFolder(structure[i], node);
      const currentNodeChildren = currentNode.childNodes[1];
      const flChildren = structure[i].children;
      if (flChildren) {
        loadView(flChildren, currentNodeChildren);
      } else {
        createEmptyFolder(currentNodeChildren);
      }
    } else {
      createFile(structure[i].title, node);
    }
  }
})(structure, rootNode);

function initClickListener(id) {
  const div = document.getElementById(id);
  div.addEventListener('click', function(event) {
    div.classList.toggle('folder-open');
    const isOpen = div.classList.contains('folder-open');
    if (isOpen) {
      div.childNodes[0].innerText = 'folder_open';
    } else {
      div.childNodes[0].innerText = 'folder';
    }
    event.stopPropagation();
  });
}

function createFolder(folder, node) {
  const folderId = 'id-' + idCounter++;
  const div = document.createElement('div');
  div.classList.add('folder-wrapper');
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('folder');
  divWrapper.setAttribute('id', folderId);
  const icon = getIconElement('folder');
  const text = document.createElement('span');
  text.innerText = folder.title;
  const divChildren = document.createElement('div');
  divChildren.classList.add('folder-children');
  divWrapper.appendChild(icon);
  divWrapper.appendChild(text);
  div.appendChild(divWrapper);
  div.appendChild(divChildren);
  node.appendChild(div);
  initClickListener(folderId);
  return div;
}

function createFile(title, node) {
  const div = document.createElement('div');
  div.classList.add('folder-file');
  const icon = getIconElement('insert_drive_file');
  icon.classList.add('grey');
  const text = document.createElement('span');
  text.innerText = title;
  div.appendChild(icon);
  div.appendChild(text);
  node.appendChild(div);
  return div;
}

function createEmptyFolder(node) {
  const div = document.createElement('div');
  div.classList.add('folder-empty');
  div.innerText = 'Folder is empty';
  node.appendChild(div);
  return div;
}

function getIconElement(type) {
  const i = document.createElement('i');
  i.classList.add('material-icons');
  i.innerText = type;
  return i;
}
