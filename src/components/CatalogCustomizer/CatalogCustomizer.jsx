import React, { useState } from 'react';
import './CatalogCustomizer.scss';
import ButtonCustomizer from '../AdminLibrary/Inputs/Special/ButtonCustomizer';
import SubTabSection from '../SubTabSection/SubTabSection';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const CatalogCustomizer = () => {
  const [currentTab, setCurrentTab] = useState('');
  const [menu, setMenu] = useState([
    {
      name: "Enquiry", link: "hi", id: 'enquiry', icon: 'font-info',
      setting: [
        { 
          name: 'Display Enquiry form via popup', 
          id: 'is_disable_popup', 
          type: 'checkbox',
          value: 'is_disable_popup', 
          description: "By default the form will be displayed via popup. Enable this, if you want to display the form below the product description." 
        },
        { 
          name: 'Redirect after Enquiry form Submission', 
          id: 'is_page_redirect', 
          value: 'is_page_redirect',
          type: 'checkbox',
          description: "Enable this to redirect user to another page after successful enquiry submission." 
        },
      ]
    },
    {
      name: "Enquiry Cart", link: "hi", id: 'enquiry_cart', icon: 'font-store',
      setting: [
        { 
          name: 'Enable Multiple Enquiry Cart', 
          id: 'is_enable_multiple_product_enquiry', 
          value: 'is_enable_multiple_product_enquiry', 
          type: 'checkbox',
          description: "Enable this checkbox to allow multiple product enquiry via enquiry cart. Also multiple enquiry product displays on the cart" 
        },
      ]
    },
    {
      name: "Quote", link: "hi", id: 'quote', icon: 'font-payment',
      setting: [
        { name: 'name1', id: 2, value: 3, description: "Allow backorder subscription" },
      ]
    },
  ]);

  const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const initialItems = [
  {
    id: 'additional-input',
    content: (
      <div className='additional-input'>
        <input placeholder='Additional input(optional)' type='text' />
      </div>
    ),
  },
  {
    id: 'custom-button',
    content: (
      <div className='custom-button'>
        <div className={currentTab === 'enquiry' ? 'enquiry' : ''}>
          <ButtonCustomizer text='enquiry' />
        </div>
        <div className={currentTab === 'enquiry_cart' ? 'enquiry_cart' : ''}>
          <ButtonCustomizer text='Add to enquiry cart' />
        </div>
        <div className={currentTab === 'quote' ? 'quote' : ''}>
          <ButtonCustomizer text='Add to quote' />
        </div>
      </div>
    ),
  },
];

  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = reorder(items, result.source.index, result.destination.index);
    setItems(newItems);
  };

  return (
    <>
      <SubTabSection menuitem={menu} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <section className='catelog-customizer'>
        <div className='product-img'>
          <img src="https://rb.gy/owvfpe" alt="" />
        </div>
        <div className='product-data'>
          <h1 className='product-name'>V-Neck T-Shirt</h1>
          <div className='drag-drop-component'>
            <p className='product-price'>₹15.00 – ₹20.00</p>
            <p className='product-description'>This is a variable product.</p>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='droppable'>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className='product-sku-category'>
            <p>SKU: <span>WOO-ALBUM</span></p>
            <p>Category: <span>Music</span></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CatalogCustomizer;
