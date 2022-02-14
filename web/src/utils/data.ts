export const dummyData = {
  users: [
    {
      id: "c6a3528e-7d36-47b3-883e-cb7d0d3e1990",
      name: "Dummy name",
      age: 12,
      gender: "M",
      email: "fdsafdsa@e.co",
      cityOfBirth: "嘉義縣",
    },
    {
      id: "3678da4b-7e8e-48e8-812b-44154ea6a6d4",
      name: "Dummy name",
      age: 12,
      gender: "M",
      email: "fdsafdsa@e.co",
      cityOfBirth: "新北市",
    },
  ],
  totalPages: 1,
};

//TODO: cannot find english api convert chinese city name to english
const cityEnglishName = new Map();

cityEnglishName.set("嘉義縣", "Chiayi County");
cityEnglishName.set("新北市", "New Taipei City");
cityEnglishName.set("高雄市", "Kaohsiung City");
cityEnglishName.set("雲林縣", "Yunlin county");
cityEnglishName.set("金門縣", "Kinmen County");
cityEnglishName.set("連江縣", "Lienchiang County");
cityEnglishName.set("苗栗縣", "Miaoli County");
cityEnglishName.set("花蓮縣", "Hualien County");
cityEnglishName.set("臺東縣", "Taitung County");
cityEnglishName.set("臺南市", "Tainan City");
cityEnglishName.set("臺北市", "Taipei City");
cityEnglishName.set("臺中市", "Taichung City");
cityEnglishName.set("澎湖縣", "Penghu County");
cityEnglishName.set("桃園市", "Taoyuan City");
cityEnglishName.set("新竹縣", "Hsinchu County");
cityEnglishName.set("新竹市", "Hsinchu City");
cityEnglishName.set("彰化縣", "Changhua County");
cityEnglishName.set("屏東縣", "Pintung County");
cityEnglishName.set("宜蘭縣", "Yilan County");
cityEnglishName.set("基隆市", "Keelung City");
cityEnglishName.set("嘉義市", "Chiayi City");
cityEnglishName.set("南投縣", "Nantou County");

export { cityEnglishName };

export default dummyData;
