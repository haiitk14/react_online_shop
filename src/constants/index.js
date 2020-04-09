import { getCurrentDate } from './../commons/func';

export const API_ENPOINT = 'https://localhost:44330/api';

export const INITIAL_CATEGORY = {
    id: '',
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
    updatedDate: '',
    errors: {
        txtName: 'Tối thiểu 5 ký tự'
    }
}

export const INITIAL_ARTICLE = {
    id: '',
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
    updatedDate: '',
    txtContent: '<p></p>',
    errors: {
        txtName: 'Tối thiểu 5 ký tự',
    }
}