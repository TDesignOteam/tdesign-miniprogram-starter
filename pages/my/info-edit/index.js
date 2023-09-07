import fetchPersonInfo from '../../../services/personInfo';

const areaList = {
  provinces: {
    110000: '北京市',
    440000: '广东省',
  },
  cities: {
    110100: '北京市',
    440100: '广州市',
    440200: '韶关市',
    440300: '深圳市',
    440400: '珠海市',
    440500: '汕头市',
    440600: '佛山市',
  }
}

const getOptions = (obj, filter) => {
  const res = Object.keys(obj).map((key) => ({ value: key, label: obj[key] }));

  if (filter) {
    return res.filter(filter);
  }

  return res;
};

const match = (v1, v2, size) => v1.toString().slice(0, size) === v2.toString().slice(0, size);

Page({
  data: {
    personInfo: {
      userName: '',
      gender: '0',
      birth: '',
      address: [],
      brief: '',
      photos: []
    },
    mode: '',
    birthVisible: false,

    addressText: '',
    addressVisible: false,
    provinces: getOptions(areaList.provinces),
    cities: [],

    gridConfig: {
      column: 3,
      width: 160,
      height: 160,
    },
  },

  onLoad() {
    this.updateCities();
    this.fetchData();
  },

  fetchData() {
    fetchPersonInfo().then((personInfo) => {
      this.setData({
        personInfo,
      });
      this.setData({
        addressText: `${areaList.provinces[this.data.personInfo.address[0]]} ${areaList.cities[this.data.personInfo.address[1]]}`
      });
    });
  },

  onColumnChange(e) {
    const { column, index } = e.detail;
    const { provinces, cities } = this.data;

    if (column === 0) {
      // 更改省份
      const cities = this.getCities(provinces[index].value);
      this.setData({ cities });
    }
  },

  // 更新第二栏的 city 列表 
  updateCities() {
    const { provinces } = this.data;
    const cities = this.getCities(provinces[0].value);
    this.setData({ cities });
  },

  getCities(provinceValue) {
    return getOptions(areaList.cities, (city) => match(city.value, provinceValue, 2));
  },

  showPicker(e) {
    const { mode } = e.currentTarget.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
    if (mode === "address") {
      const cities = this.getCities(this.data.personInfo.address[0]);
      this.setData({ cities });
    }
  },

  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },

  onPickerChange(e) {
    const { value, label } = e.detail;
    const { mode } = this.data;

    this.setData({
      [mode]: value,
      [`personInfo.${mode}`]: value,
    });
    if (mode === "address") {
      this.setData({
        addressText: label.join(' '),
      });
    }

    this.hidePicker();
  },

  saveUsername(e) {
    const { value } = e.detail;
    this.setData({
      [`personInfo.userName`]: value,
    });
  },

  saveGender(e) {
    const { value } = e.detail;
    this.setData({
      [`personInfo.gender`]: value,
    });
  },

  saveBrief(e) {
    const { value } = e.detail;

    this.setData({
      [`personInfo.brief`]: value,
    });
  },

  handleRemove(e) {
    const { index } = e.detail;
    const { photos } = this.data.personInfo;

    photos.splice(index, 1);
    this.setData({
      [`personInfo.photos`]: photos,
    });
  },

  saveInfo() {
    // console.log(this.data.personInfo)
  }
})