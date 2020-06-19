// home router
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";

//course router
const COURSE ="/courses";
const NEW_COURSE = "/new";
const MYCOURSE = "/mine";

//const api router
const API = '/api';
const APIDOCUMENT = "/documentation";

//const api v1 router
const API_V1 = "/v1";
const V1_BUY = "/buy";
const V1_REFUND = "/refund";

//const api v1 router
const API_V2 = "/v2";
const V2_REMOVE= "/remove";
const V2_EDIT = "/edit";

const routes = {
    home: HOME,
    join: JOIN,
    login : LOGIN,
    confirmAccount:CONFIRM_ACCOUNT,
    course: COURSE,
    newCourse: NEW_COURSE,
    myCourse : MYCOURSE,
    api:API,
    apiDocument: APIDOCUMENT,
    apiV1: API_V1,
    v1Buy: V1_BUY,
    v1Refund: V1_REFUND,
    apiV2 : API_V2,
    v2Remove: V2_REMOVE,
    v2Edit: V2_EDIT
}
export default routes;

