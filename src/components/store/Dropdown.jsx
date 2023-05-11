import {Dropdown} from 'react-bootstrap';

const Dropdowns = (props) => {
  const {style , title , classD, classDtwo , itemIndex, categoryChange, loadingChange, modeDL, lang} = props;

  const items = [
    {
      titleOne: lang.Store.pcC,
      titleTwo: lang.Store.pcH,
      titleTree: lang.Store.pcP,
      titleFor: lang.Store.pcN,
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
      titleOne: lang.Store.audiP,
      titleTwo: lang.Store.audiA,
      titleTree: lang.Store.audiM,
      titleFor: '',
      catOne: 'AUD-PARLANTES',
      catTwo: 'AUD-AURIS',
      catTree: 'AUD-MICROFONO',
      catFor: ''
    },
    {
      titleOne: lang.Store.heF,
      titleTwo: lang.Store.catTitleSix,
      titleTree: '',
      titleFor: '',
      catOne: 'FREEZER',
      catTwo: 'HELADERA',
      catTree: '',
      catFor: ''
    },
    {
      titleOne: lang.Store.climA,
      titleTwo: lang.Store.climC,
      titleTree: lang.Store.climV,
      titleFor: '',
      catOne: 'CLIM-AIR',
      catTwo: 'CLIM-CALE',
      catTree: 'CLIM-VENTI',
      catFor: ''
    },
    {
      titleOne: 'Samsung',
      titleTwo: 'Noga',
      titleTree: 'BGH',
      titleFor: '',
      catOne: 'TABLET-SAMSUNG',
      catTwo: 'TABLET-NOGA',
      catTree: 'TABLET-BGH',
      catFor: ''
    }
  ]

  return (
    <Dropdown>
      <Dropdown.Toggle className={`${style.dropp} ${modeDL === 'dark' ? style.droppHovdark : style.droppHovlight} ${modeDL === 'dark' ? style.droppdark : style.dropplight}`} variant="secondary" id="dropdown-basic">{title}</Dropdown.Toggle>

      <Dropdown.Menu className={`${style.droppmenu} ${modeDL === 'dark' ? style.menudark : style.menulight}`}>
        <Dropdown.Item className={`text-white ${style.dropitem}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catOne); loadingChange(true);}}>{items[itemIndex].titleOne}</Dropdown.Item>
        <Dropdown.Item className={`text-white ${style.dropitem}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catTwo); loadingChange(true);}}>{items[itemIndex].titleTwo}</Dropdown.Item>
        <Dropdown.Item className={`text-white ${style.dropitem} ${classD}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catTree); loadingChange(true);}}>{items[itemIndex].titleTree}</Dropdown.Item>
        <Dropdown.Item className={`text-white ${style.dropitem} ${classDtwo}`} type='button' onClick={()=>{categoryChange(items[itemIndex].catFor); loadingChange(true);}}>{items[itemIndex].titleFor}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Dropdowns