import { uuidv4 } from './../commons/func';

export const API_ENPOINT = 'http://localhost:3000';

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
    errors: {
        txtName: 'Tối thiểu 5 ký tự'
    }
}