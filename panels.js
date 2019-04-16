class Panel {
  constructor(panel) {
    this.panel = panel;
    this.panelButtons = this.panel.querySelector('.panel-buttons');
    this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
    this.panelBtnClose = this.panel.querySelector('.panel-btn-close');
    this.panelContent = this.panel.querySelector('.panel-content');
    
    // this is NOT bound to the arrow and therefore looks up and finds the this keyword in the constructor
    this.panelButtons.addEventListener('click', () => this.togglePanel());
  }

  // methods
  togglePanel() {
    this.panelBtnOpen.classList.toggle('hide-btn');
    this.panelBtnClose.classList.toggle('hide-btn');
    this.panelContent.classList.toggle('toggle-on');
  }
}

const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
  return new Panel(panel);
});