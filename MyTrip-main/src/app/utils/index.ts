export const generateTicketId = (length:number) :string =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export const pages = {
    BUS_SEARCH: 'busSearch',
    BUS_LIST: 'busList',
    SEAT_SELECTION: 'seatSelection',
    INFO: 'info',
    REVIEW: 'review',
    TICKET: 'ticket'
}
export const storageValues = {
    JOURNEY: 'journey',
    BUS: 'bus',
    SEATS: 'seats',
    USER_DETAILS: 'userDetails',
    TICKET_ID: 'ticketId'
}
export const checkPermission = (page: string) : boolean=>{
    switch (page) {
        case pages.BUS_SEARCH:
            return true
        case pages.BUS_LIST:
            {
                if(!localStorage.getItem(storageValues.JOURNEY)){
                    return false
                }else{
                    return true
                }
            }
        case pages.SEAT_SELECTION:
            {
                if(!localStorage.getItem(storageValues.BUS)){
                    return false
                }else{
                    return true
                }
            }
        case pages.INFO:
            {
                if(!localStorage.getItem(storageValues.SEATS)){
                    return false
                }else{
                    return true
                }
            }
        case pages.REVIEW:
            {
                if(!localStorage.getItem(storageValues.USER_DETAILS)){
                    return false
                }else{
                    return true
                }
            }
        case pages.TICKET:
            {
                if(!localStorage.getItem(storageValues.TICKET_ID)){
                    return false
                }else{
                    return true
                }
            }
        default:
            return false
    }
}
