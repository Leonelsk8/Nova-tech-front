import React from 'react';
import {Dropdown} from 'react-bootstrap';

const Dropdowns = (props) => {
  const {style , title , classD, classDtwo , itemIndex, categoryChange, loadingChange} = props;

  const items = [
    {
      titleOne: 'Completas',
      titleTwo: 'Hardware',
      titleTree: 'Perifericos',
      titleFor: 'Notebooks',
      catOne: 'PC-COMPLETA',
      catTwo: 'PC-HARDWARE',
      catTree: 'PC-PERIFERICO',
      catFor: 'PC-NOTE'
    },
    {
      titleOne: 'Samsung',
      titleTwo: 'BGH',
      titleTree: 'LG',
      titleFor: '',
      catOne: 'TV-SAMSUNG',
      catTwo: 'TV-BGH',
      catTree: 'TV-LG',
      catFor: ''
    },
    {
      titleOne: 'Samsung',
      titleTwo: 'Motorola',
      titleTree: 'Iphone',
      titleFor: '',
      catOne: 'CEL-SAMSUNG',
      catTwo: 'CEL-MOTOROLA',
      catTree: 'CEL-IPHONE',
      catFor: ''
    },
    {
      titleOne: 'Parlantes',
      titleTwo: 'Auriculares',
      titleTree: 'Microfonos',
      titleFor: '',
      catOne: 'AUD-PARLANTES',
      catTwo: 'AUD-AURIS',
      catTree: 'AUD-MICROFONO',
      catFor: ''
    },
    {
      titleOne: 'Freezer',
      titleTwo: 'Heladeras',
      titleTree: '',
      titleFor: '',
      catOne: 'FREEZER',
      catTwo: 'HELADERA',
      catTree: '',
      catFor: ''
    },
    {
      titleOne: 'Aire acondicionado',
      titleTwo: 'Calefactores',
      titleTree: 'Ventiladores',
      titleFor: '',
      catOne: 'CLIM-AIR',
      catTwo: 'CLIM-CALE',
      catTree: 'CLIM-VENTI',
      catFor: ''
    },
    {
      titleOne: 'LG',
      titleTwo: 'Noga',
      titleTree: 'BGH',
      titleFor: '',
      catOne: 'TABLET-LG',
      catTwo: 'TABLET-NOGA',
      catTree: 'TABLET-BGH',
      catFor: ''
    }
  ]

  return (
    <Dropdown>
      <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">{title}</Dropdown.Toggle>

      <Dropdown.Menu className={`${style.droppmenu}`}>
        <Dropdown.Item className={`text-white ${style.dropitem}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catOne); loadingChange(true);}}>{items[itemIndex].titleOne}</Dropdown.Item>
        <Dropdown.Item className={`text-white ${style.dropitem}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catTwo); loadingChange(true);}}>{items[itemIndex].titleTwo}</Dropdown.Item>
        <Dropdown.Item className={`text-white ${style.dropitem} ${classD}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catTree); loadingChange(true);}}>{items[itemIndex].titleTree}</Dropdown.Item>
        <Dropdown.Item className={`text-white ${style.dropitem} ${classDtwo}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catFor); loadingChange(true);}}>{items[itemIndex].titleFor}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Dropdowns