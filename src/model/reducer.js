const initState = {
    menuItemData: [
        "Like的發問",
        "Like的回答",
        "Like的文章",
        "Like的留言"
    ],
    TeacherFrame:[
        "擅於情境式教學，授課活潑、教學靈活，有效開發學員聽、說 、讀、寫能力。精準矯正學員發音，課堂進度掌握準確，文法與會話教學結構完整。",
        "擅於情境式教學，授課活潑、教學靈活，有效開發學員聽、說 、讀、寫能力。"
    ]
  };

const ADD_ITEM = 'ADD_ITEM';
const CLEAN_ITEM = 'CLEAN_ITEM';


const itemReducer = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const menuItemCopy = state.menuItemData.slice();
        return { menuItemData: [action.payload.itemNew].concat(menuItemCopy) };
      }
      case 'CLEAN_ITEM': {
        return { menuItemData: [] };
      }
      default:
        return state;
    }
};

export {itemReducer};
