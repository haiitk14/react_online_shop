import { uuidv4, getCurrentDate } from './../commons/func';

export const API_ENPOINT = 'https://localhost:44330/api';

export const INITIAL_CATEGORY = {
    id: uuidv4(),
    txtName: '',
    txtCode: '',
    txtDescription: '',
    txtOrder: '',
    chkIsPublic: false,
    txtTitleSeo: '',
    txtKeywordsSeo: '',
    txtDescriptionSeo: '',
    isMenu: true,
    createdDate: getCurrentDate(),
    updatedDate: "",
    errors: {
        txtName: 'Tối thiểu 5 ký tự'
    }
}

export const INITIAL_ARTICLE = {
    id: uuidv4(),
    sltcategoryId: '',
    txtName: '',
    txtSlug: '',
    txtDescription: '',
    txtImage: '',
    txtOrder: '',
    chkIsPublic: false,
    txtTitleSeo: '',
    txtKeywordsSeo: '',
    txtDescriptionSeo: '',
    createdDate: getCurrentDate(),
    updatedDate: "",
    errors: {
        txtName: 'Tối thiểu 5 ký tự',
    }
}