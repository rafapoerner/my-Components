import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { NgbAccordion, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, Subject } from 'rxjs';
import { ItemMultiSelectModel, ListMultiSelectModel } from './models/multi-select.model';
import { SearchMultiSelectPipe } from '../pipes/searchMultiSelect.pipe';

@Component({
  selector: 'myraeasy-multiselect',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [SearchMultiSelectPipe]
})


export class MultiSelectComponent implements OnInit {

  @Input() listMultiSelect$!: Observable<ListMultiSelectModel[]>;

  @ViewChild('myAccordion') myAccordion!: NgbAccordion;

  public filter!: string;
  listFiltered: any = [];
  teste: boolean = true

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    this.listMultiSelect$.subscribe((list) => {
      this.listFiltered = list;
      console.log('list',this.listFiltered)
    });


    this.listMultiSelect$.subscribe(() => {
      this.updateSelectedItems()
    })


    // Fecha o accordion clicando fora dele
    document.addEventListener('click', (event) => {
      const accordion = this.el.nativeElement.querySelector('.accordion-header');
      if (!accordion.contains(event.target)) {
        this.myAccordion.collapseAll();
      }
    });


    window.addEventListener('resize', () => {
      this.updateSelectedItems()
    });
  }

  ngAfterView() {
    this.listMultiSelect$.subscribe(() => {
      this.selectAllCheckboxes()
    })
  }


  selectAll = false;

  selectAllChanged = new Subject<boolean>();
  selectAllChanged$ = this.selectAllChanged.asObservable();

  selectAllCheckboxes() {
    this.selectAll = !this.selectAll;
    for (let item of this.listFiltered) {
      item.selected = this.selectAll;
      for (let checkbox of item.dropdownList) {
        checkbox.selected = this.selectAll;
      }
    }
    this.updateSelectedItems()
    this.selectAllChanged.next(this.selectAll);
    // console.log('entrei aqui')
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectAll'] && !changes['selectAll'].firstChange) {
      this.updateSelectedItems();
    }
    // alert('executei')
  }

  onAccordionClick(accordion: NgbAccordion) {
    const activeIdsSet = new Set(accordion.activeIds);
    const isOpen = activeIdsSet.has('1');
    if (isOpen) {
      this.updateSelectedItems();
    }else{
      this.updateSelectedItems();
    }
    console.log(accordion)
  }


  updateSelectedItems() {
    const selectedItems: ItemMultiSelectModel[] = [];
    if (this.selectAll) {
      this.listFiltered.forEach((item: any) => {
        item.dropdownList.forEach((dropdownItem: any) => {
          if (dropdownItem.selected) {
            selectedItems.push(dropdownItem);
          }
        });
      });
      this.renderSelectedItems(selectedItems)
    } else {
      this.listFiltered.forEach((item: any) => {
        item.dropdownList.forEach((dropdownItem: any) => {
          if (dropdownItem.selected) {
            selectedItems.push(dropdownItem);
          }
        });
      });
    }
    this.renderSelectedItems(selectedItems);
  }



  renderSelectedItems(selectedItems: ItemMultiSelectModel[]) {
    let selectedItemsElement = this.el.nativeElement.querySelector(".custom-button");
    let hiddenItemsInfoElement = this.el.nativeElement.querySelector(".hidden-items-info");
    let accordionElement = this.el.nativeElement.querySelector(".multiselect-container");

    if (selectedItemsElement) {
      selectedItemsElement.innerHTML = "";

      let parentWidth = selectedItemsElement.parentNode.offsetWidth;
      const padding = 10;
      let availableWidth = parentWidth - padding;
      let totalWidth = 0;
      let maxVisibleItems = 0;

      // Percorre a lista de itens selecionados para determinar quantos itens cabem no botão
      for (let i = 0; i < selectedItems.length; i++) {
        const item = selectedItems[i];
        if (item.selected) {
          const span = this.renderer.createElement('span');
          this.renderer.addClass(span, 'selected-item');
          let spanTextContent = '';
          if (item.label) {
            spanTextContent = item.label;
          }
          const spanText = this.renderer.createText(spanTextContent);
          this.renderer.appendChild(span, spanText);
          this.renderer.appendChild(selectedItemsElement, span);

          totalWidth += span.offsetWidth;
          if (totalWidth <= availableWidth) {
            maxVisibleItems++;
          } else {
            break;
          }
        }
      }

      // Oculta ou exibe o botão para exibir os itens escondidos
      if (selectedItems.length > maxVisibleItems) {
        selectedItemsElement.classList.add('hide-selected-items');
        const visibleSpans = selectedItemsElement.querySelectorAll(".selected-item");
        for (let i = maxVisibleItems; i < visibleSpans.length; i++) {
          visibleSpans[i].style.display = "none";
        }

        // Adiciona o botão para exibir os itens escondidos
        if (hiddenItemsInfoElement) {
          hiddenItemsInfoElement.innerText = `+${selectedItems.length - maxVisibleItems}`;
          this.renderer.appendChild(selectedItemsElement, hiddenItemsInfoElement);
        } else {
          const hiddenItemsInfo = this.renderer.createElement('span');
          this.renderer.addClass(hiddenItemsInfo, 'hidden-items-info');
          hiddenItemsInfo.innerText = `+${selectedItems.length - maxVisibleItems}`;
          this.renderer.appendChild(selectedItemsElement, hiddenItemsInfo);
        }
      } else {
        selectedItemsElement.classList.remove('hide-selected-items');
        const visibleSpans = selectedItemsElement.querySelectorAll(".selected-item");
        for (let i = 0; i < visibleSpans.length; i++) {
          visibleSpans[i].style.display = "inline-block";
        }
        if (hiddenItemsInfoElement) {
          this.renderer.removeChild(selectedItemsElement, hiddenItemsInfoElement);
        }
      }

      accordionElement.addEventListener('click', () => {
        if (hiddenItemsInfoElement) {
          const numVisibleItems = selectedItemsElement.querySelectorAll(".selected-item").length;
          const numHiddenItems = selectedItems.length - numVisibleItems;

          hiddenItemsInfoElement.innerText = `+ ${numHiddenItems}`;

          if (numHiddenItems > 0) {
            hiddenItemsInfoElement.style.display = "inline-block";
          } else {
            hiddenItemsInfoElement.style.display = "none";
          }
        }
      });
    }
  }



  onFormSubmit(event: any) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll('.check_box input[type="checkbox"]');
    let checkedValues = [];

    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i] as HTMLInputElement;
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
        // Simula atualização do checkbox para true
        checkbox.setAttribute('checked', 'true');
      } else {
        // Simula atualização do checkbox para false
        checkbox.removeAttribute('checked');
      }
    }

    if (checkedValues.length === 0) {
      alert('Selecione pelo menos um item!');
      return;
    }

    const checkboxValuesDiv = document.getElementById('checkbox-values');
    if (checkboxValuesDiv) {
      checkboxValuesDiv.innerHTML = 'Valores selecionados: ' + checkedValues.join(' - ');
      alert(checkboxValuesDiv.innerHTML)
    }
  }
}







