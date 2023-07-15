export default (editor, opts = {}) => {
  const options = { ...{
    // default options
    zoomInKey: ['ctrl', '='],
    zoomOutKey: ['ctrl', '-'],
    panelCategory: "Custom Category"
  },  ...opts };

  // zoomout button
  editor.Panels.addButton('options', {
    id: 'Zoom Out',
    className: 'fa fa-minus',
    command: 'zoomout',
    attributes: { title: 'Back' },
    category: options.panelCategory // add a new category for the custom icon
  })

  // zoomin button
  editor.Panels.addButton('options', {
    id: 'Zoom In',
    className: 'fa fa-plus',
    command: 'zoomin',
    attributes: { title: 'Back' },
    category: options.panelCategory // add a new category for the custom icon
  })

  editor.Commands.add('zoomin', {
    run: () => {
      const zoom = editor.Canvas.getZoom()
      editor.Canvas.setZoom(`${zoom + 5}`)
    }
  })

  editor.Commands.add('zoomout', {
    run: () => {
      const zoom = editor.Canvas.getZoom()
      editor.Canvas.setZoom(`${zoom - 5}`)
    }
  })

  document.addEventListener('keydown', function (event) {
    if (event.shiftKey && (event.keyCode === 187 || event.keyCode === 107)) {
      event.preventDefault()
      editor.runCommand('zoomin')
    }
    if (event.shiftKey && (event.key === '-' || event.key === '_')) {
      event.preventDefault()
      editor.runCommand('zoomout')
    }
  })
};